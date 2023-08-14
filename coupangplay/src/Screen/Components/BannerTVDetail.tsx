import {
    Background,
    BackgroundImage,
    Description,
    Extra,
    MovieDetail,
    Overlay,
    Overview,
    SubTitle,
    Summary,
    Title,
} from "../Styled/BannerMovieDetailStyled";
import { useRecoilValue, useSetRecoilState } from "recoil";

import { useQuery } from "react-query";
import {
    getMovieDetail,
    getMovieVideoInfo,
    getTVDetail,
    getTVVideoInfo,
} from "../../API";
import Youtube from "./Yotube";
import { Star } from "../Styled/BannerStyled";
import { BannerClickMovieBGLink } from "../../ProjectCommon";

function TVDetail({ id }: { id: number | string }) {
    const currentPathId = id;
    const clickedMovieBGLink = useRecoilValue(BannerClickMovieBGLink);

    let videoKey: string = "";
    const { data, isLoading } = useQuery(["tvVideo", currentPathId], () =>
        getTVVideoInfo(+currentPathId)
    );

    let title = "";
    let genre = "";
    let genres = "";
    let score = 0; // vote_average
    let runtime = 0; //minutes
    let release = ""; // release date
    let production = "";
    let overview = "";
    const { data: movieDetail, isLoading: DetailLoading } = useQuery(
        ["tvDetail", currentPathId],
        () => getTVDetail(+currentPathId)
    );

    function getVideoKey() {
        if (!isLoading && data?.results) {
            for (var i of data?.results) {
                if (
                    i.site.toLowerCase() === "youtube" &&
                    (i.type.toLowerCase() === "teaser" ||
                        i.type.toLowerCase() === "trailer" ||
                        i.type.toLowerCase() === "clip")
                ) {
                    return i.key;
                }
            }
        }
        return "n/a";
    }

    function getGenres() {
        let gen = "";
        for (var i of movieDetail?.genres) {
            gen += i.name + ", ";
        }
        return gen.slice(0, gen.length - 2);
    }

    function getProduction() {
        let pro = "";
        for (var i of movieDetail?.production_companies) {
            pro += i.name + ", ";
        }
        return pro.slice(0, pro.length - 2);
    }

    function updateDetail() {
        if (!DetailLoading && movieDetail) {
            title = movieDetail.name;

            if (movieDetail.genres.length > 0) {
                genre = movieDetail.genres[0].name;
                genres = getGenres();
            } else {
                genre = "TV쇼";
                genres = genre;
            }
            if (movieDetail.episode_run_time.length > 0)
                runtime = movieDetail.episode_run_time[0];
            else runtime = 10;
            score = movieDetail.vote_average.toFixed(1);
            release = movieDetail.first_air_date;
            overview = movieDetail.overview;
            production = getProduction();
        }
    }

    videoKey = getVideoKey();
    updateDetail();

    return (
        <>
            {isLoading || DetailLoading ? null : (
                <>
                    <Background>
                        {videoKey !== "n/a" && videoKey !== undefined ? (
                            <Youtube
                                videoKey={videoKey}
                                width="700"
                                height="360"
                            ></Youtube>
                        ) : (
                            <BackgroundImage
                                BGPhoto={clickedMovieBGLink}
                            ></BackgroundImage>
                        )}
                    </Background>

                    {movieDetail ? (
                        <>
                            <Title>{title}</Title>
                            <Summary>
                                <Star>★</Star>
                                {score === 0 ? "1.0" : score} ◦ {genre} ◦{" "}
                                {runtime === 0 ? "123" : runtime}분
                            </Summary>
                            <Description>
                                <Overview>{overview}</Overview>
                                <Extra>
                                    <span>
                                        <SubTitle>Genres:</SubTitle>
                                        &nbsp;&nbsp;{genres}
                                    </span>
                                    <span>
                                        <SubTitle>Release:</SubTitle>
                                        &nbsp;&nbsp;{release}
                                    </span>
                                    <span>
                                        <SubTitle>Productions:</SubTitle>
                                        &nbsp;&nbsp;{production}
                                    </span>
                                </Extra>
                            </Description>
                        </>
                    ) : null}
                </>
            )}
        </>
    );
}

export default TVDetail;
