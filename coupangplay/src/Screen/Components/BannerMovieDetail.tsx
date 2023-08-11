import { useHistory, useLocation, useParams } from "react-router-dom";
import {
    Background,
    BackgroundImage,
    Description,
    MovieDetail,
    Overlay,
    Summary,
    Title,
} from "../Styled/BannerMovieDetailStyled";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
    BannerClickMovieBGLink,
    BannerClickMovieState,
    BannerDetailState,
} from "../../GlobalFeatures";
import { useQuery } from "react-query";
import { getMovieDetail, getMovieVideoInfo } from "../../API";
import Youtube from "./Yotube";
import { Star } from "../Styled/BannerStyled";

function Detail({ y }: { y: number }) {
    const History = useHistory();

    const setShowDetail = useSetRecoilState(BannerDetailState);
    const clickedMovieId = useRecoilValue(BannerClickMovieState);
    const clickedMovieBGLink = useRecoilValue(BannerClickMovieBGLink);

    const currntPath = useLocation().pathname.slice(1);
    const currentPathId = currntPath.split("main")[1];
    const isRealClicked = clickedMovieId === +currentPathId;

    let videoKey: string = "";
    const { data, isLoading } = useQuery(["movieVideo", currentPathId], () =>
        getMovieVideoInfo(+currentPathId)
    );

    let title = "";
    let genre = "";
    let genres = "";
    let score = 0; // vote_average
    let runtime = 0; //minutes
    let release = ""; // release date
    let homepage = "";
    let overview = "";
    const { data: movieDetail, isLoading: DetailLoading } = useQuery(
        ["movieDetail", currentPathId],
        () => getMovieDetail(+currentPathId)
    );

    function handleClickOutside() {
        setShowDetail(false);
        History.goBack();
    }

    function getVideoKey() {
        if (!isLoading && data?.results) {
            for (var i of data?.results) {
                if (
                    i.site.toLowerCase() === "youtube" &&
                    (i.type.toLowerCase() === "teaser" ||
                        i.type.toLowerCase() === "trailer" ||
                        i.type.toLowerCase() === "clip")
                ) {
                    console.log(i);
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

    function updateDetail() {
        if (!DetailLoading && movieDetail) {
            title = movieDetail.title;
            genre = movieDetail.genres[0].name;
            genres = getGenres();
            score = movieDetail.vote_average.toFixed(2);
            runtime = movieDetail.runtime;
            release = movieDetail.release_date;
            homepage = movieDetail.homepage;
            overview = movieDetail.overview;
        }
    }

    videoKey = getVideoKey();
    updateDetail();
    console.log(movieDetail);
    return (
        <>
            {isLoading || DetailLoading ? null : (
                <>
                    {isRealClicked ? (
                        <Overlay
                            onClick={handleClickOutside}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <MovieDetail
                                style={{ top: y + 200 }}
                                layoutId={currntPath}
                                transition={{
                                    type: "tween",
                                }}
                            >
                                <Background>
                                    {videoKey !== "n/a" &&
                                    videoKey !== undefined ? (
                                        <Youtube videoKey={videoKey}></Youtube>
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
                                            {score === 0 ? "1.0" : score} ◦{" "}
                                            {genre} ◦{" "}
                                            {runtime === 0 ? "123" : runtime}분
                                        </Summary>
                                        <Description></Description>
                                    </>
                                ) : null}
                            </MovieDetail>
                        </Overlay>
                    ) : null}
                </>
            )}
        </>
    );
}

export default Detail;
