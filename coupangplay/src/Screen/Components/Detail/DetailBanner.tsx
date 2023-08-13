import { useQuery } from "react-query";
import {
    IDetail,
    IImages,
    LARGE_ADDED_BUTTON_URL,
    LARGE_ADD_BUTTON_URL,
    SHARE_BUTTON_URL,
} from "../../../GlobalFeatures";
import {
    createImagePath,
    getMovieDetail,
    getMovieDetailEN,
    getMovieImages,
    getMovieVideoInfo,
} from "../../../API";
import {
    BGImage,
    ButtonContainer,
    ButtonImg,
    Buttons,
    Description,
    DisplayBox,
    Extra,
    Logo,
    LogoImage,
    LogoTitle,
    Overlay,
    Overview,
    Play,
    Star,
    Summary,
    Text,
    VideoFrame,
} from "../../Styled/Detail/DetailBannerStyled";
import {
    LikeMovieState,
    convertMinutesToHoursAndMinutes,
} from "../../../ProjectCommon";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import Youtube from "../Yotube";
import { useRecoilState, useSetRecoilState } from "recoil";

function DetailBanner({ id }: { id: string | number }) {
    let backdrop_path = "";
    let poster_path = "";
    let genre = "";
    let genres = "";
    let homepage = "";
    let overview = "";
    let release_year = "";
    let release_date = "";
    let runtime = "";
    let title = "";
    let vote_average = 0;
    let vote_count = "";
    let productions = "";
    let logo_path = "";

    const detail = useQuery<IDetail>(["movie_detail_page", id], () =>
        getMovieDetail(id)
    );

    const detail_eng = useQuery<IDetail>(["movie_detail_eng_page", id], () =>
        getMovieDetailEN(id)
    );

    const image = useQuery<IImages>(["movie_detail_image", id], () =>
        getMovieImages(id)
    );

    const [playVideo, setPlayVideo] = useState(false);
    const currntPath = useLocation().pathname.slice(1);
    const currentPathId = currntPath.split("/")[2];

    const [likeMovieList, setLikeMovieList] = useRecoilState(LikeMovieState);

    let videoKey: string = "";
    const video = useQuery(["movie_detail_video", currentPathId], () =>
        getMovieVideoInfo(+currentPathId)
    );

    function getGenres(): string {
        if (!detail.isLoading && detail.data) {
            let gen = "";
            for (var i of detail.data.genres) {
                gen += i.name + ", ";
            }
            return gen.slice(0, gen.length - 2);
        }
        return "n/a";
    }

    function getProduction(): string {
        if (!detail.isLoading && detail.data) {
            let pro = "";
            for (var i of detail.data.production_companies) {
                pro += i.name + ", ";
            }
            return pro.slice(0, pro.length - 2);
        }
        return "n/a";
    }

    function updateDetail() {
        if (
            !detail.isLoading &&
            detail.data &&
            !detail_eng.isLoading &&
            detail_eng.data
        ) {
            backdrop_path = detail.data.backdrop_path;
            poster_path = detail.data.poster_path;
            genre = detail.data.genres[0].name;
            genres = getGenres();
            homepage = detail.data.homepage;
            overview = detail.data.overview;
            release_date = detail.data.release_date;
            release_year = release_date.split("-")[0];
            runtime = convertMinutesToHoursAndMinutes(detail.data.runtime);
            title = detail.data.title;
            vote_average = parseFloat(detail.data.vote_average.toFixed(1));
            vote_count = detail.data.vote_count.toLocaleString();
            productions = getProduction();
            if (overview === "") {
                overview = detail_eng.data.overview;
            }
        }
    }

    function computeLogoIamgePath() {
        if (!image.isLoading && image.data) {
            for (var i of image.data.logos) {
                if (i.iso_639_1?.toLowerCase() === "en") {
                    logo_path = i.file_path;
                    return;
                }
            }
        }
    }

    function handlePlayButtonClick() {
        setPlayVideo(true);
    }

    function handleOutsideClick() {
        setPlayVideo(false);
    }

    function getVideoKey() {
        if (!video.isLoading && video.data?.results) {
            for (var i of video.data?.results) {
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

    function handleLikeButtonClick() {
        if (!likeMovieList.includes(id)) {
            setLikeMovieList((prev) => [...prev, id]);
        }
    }

    function isAdded() {
        return likeMovieList.includes(id);
    }

    updateDetail();
    computeLogoIamgePath();
    videoKey = getVideoKey();

    return (
        <>
            {detail.isLoading ||
            image.isLoading ||
            detail_eng.isLoading ? null : (
                <DisplayBox
                    BGPhoto={createImagePath(
                        backdrop_path ? backdrop_path : poster_path
                    )}
                >
                    <Description>
                        <Logo>
                            {logo_path ? (
                                <LogoImage
                                    src={createImagePath(logo_path)}
                                ></LogoImage>
                            ) : (
                                <LogoTitle>{title}</LogoTitle>
                            )}
                        </Logo>

                        <Summary>
                            <Star>★</Star>
                            &nbsp;{vote_average} ({vote_count}) ◦ {runtime} ◦
                            {genre} ◦ {release_year}
                        </Summary>

                        <Buttons>
                            <Play
                                onClick={handlePlayButtonClick}
                                layoutId={currntPath}
                                whileHover={{ opacity: "0.8" }}
                            >
                                ► 재생하기
                            </Play>
                            <ButtonContainer onClick={handleLikeButtonClick}>
                                <ButtonImg
                                    src={
                                        isAdded()
                                            ? LARGE_ADDED_BUTTON_URL
                                            : LARGE_ADD_BUTTON_URL
                                    }
                                ></ButtonImg>
                                <Text>찜한 콘텐츠</Text>
                            </ButtonContainer>
                            <ButtonContainer>
                                <ButtonImg src={SHARE_BUTTON_URL}></ButtonImg>
                                <Text>공유</Text>
                            </ButtonContainer>
                        </Buttons>

                        <Overview>{`${overview.slice(0, 550)}...`}</Overview>
                        <Extra>
                            <p>
                                <span>Genres:</span> {genres}
                            </p>
                            <p>
                                <span>Release Date:</span> {release_date}
                            </p>
                            <p>
                                <span>Production Companies:</span>{" "}
                                {productions.slice(0, 80) + "..."}
                            </p>
                        </Extra>
                    </Description>

                    <AnimatePresence>
                        {playVideo ? (
                            <Overlay
                                onClick={handleOutsideClick}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                            >
                                <VideoFrame layoutId={currntPath}>
                                    {videoKey === "n/a" ? (
                                        <BGImage
                                            BGPhoto={createImagePath(
                                                backdrop_path
                                                    ? backdrop_path
                                                    : poster_path
                                            )}
                                        ></BGImage>
                                    ) : (
                                        <Youtube
                                            videoKey={videoKey}
                                            width="960"
                                            height="540"
                                        ></Youtube>
                                    )}
                                </VideoFrame>
                            </Overlay>
                        ) : null}
                    </AnimatePresence>
                </DisplayBox>
            )}
        </>
    );
}

export default DetailBanner;
