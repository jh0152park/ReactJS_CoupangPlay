import { AnimatePresence, delay, useScroll } from "framer-motion";
import { createImagePath, getMovieDetail } from "../../API";
import {
    Wrapper,
    DisplayBox,
    MainBannerImageVariants,
    LeftArrow,
    RightArrow,
    Description,
    Title,
    Information,
    Star,
    Play,
    Dots,
    Dot,
    PlayVariants,
} from "../Styled/BannerStyled";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { IData, LEFT_ARROW_URL, RIGHT_ARROW_URL } from "../../GlobalFeatures";
import { useHistory } from "react-router-dom";
import Detail from "./BannerMovieDetail";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
    BannerClickMovieBGLink,
    BannerClickMovieState,
    BannerDetailState,
} from "../../ProjectCommon";
import { MovieDetail, Overlay } from "../Styled/BannerMovieDetailStyled";

function Banner({ results }: IData) {
    const History = useHistory();

    const setBannerClickMovieId = useSetRecoilState(BannerClickMovieState);
    const setBannerClickMovieBGLink = useSetRecoilState(BannerClickMovieBGLink);
    const [showDetail, setShowDetail] = useRecoilState(BannerDetailState);

    const [playButton, setPlayButton] = useState<boolean>(false);
    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(1);
    const [moving, setMoving] = useState(false);
    const [direction, setDirection] = useState(1);
    const detail = useQuery("detail", () =>
        getMovieDetail(results[startIndex].id)
    );

    let genre = "";
    let runtime = "";
    let dummyDots: number[] = [];
    const maxLength = results.length;
    const { scrollY } = useScroll();

    for (var i = 0; i < maxLength; i++) {
        dummyDots.push(i);
    }

    function onRightArrowClick() {
        if (moving) return;

        if (endIndex === maxLength) {
            setStartIndex(0);
            setEndIndex(1);
        } else {
            setStartIndex((prev) => prev + 1);
            setEndIndex((prev) => prev + 1);
        }
        setMoving(true);
        setDirection(1);
    }

    function onLeftArrowClick() {
        if (moving) return;

        if (startIndex === 0) {
            setStartIndex(maxLength - 1);
            setEndIndex(maxLength);
        } else {
            setStartIndex((prev) => prev - 1);
            setEndIndex((prev) => prev - 1);
        }
        setMoving(true);
        setDirection(-1);
    }

    function animationFinished() {
        setMoving(false);
        detail.refetch();
    }

    function getMoreInfo() {
        if (!detail.isLoading && detail.data) {
            genre = detail.data.genres[0].name;
            runtime = detail.data.runtime;
        }
    }

    function onDotClick(clickIndex: number) {
        if (moving) return;
        if (startIndex === clickIndex) return;

        if (clickIndex > startIndex) {
            setDirection(1);
        } else {
            setDirection(-1);
        }
        setMoving(true);
        setStartIndex(clickIndex);
        setEndIndex(clickIndex + 1);
    }

    function handlePlayButtonClick(id: number, BGLink: string) {
        setPlayButton(true);
        setBannerClickMovieId(id);
        setBannerClickMovieBGLink(BGLink);
    }

    function handleClickOutside() {
        setPlayButton(false);
    }

    useEffect(() => {
        detail.refetch();
        getMoreInfo();
    }, [startIndex, endIndex, moving]);

    getMoreInfo();
    return (
        <>
            {detail.isLoading ? null : (
                <Wrapper>
                    <AnimatePresence
                        initial={false}
                        onExitComplete={animationFinished}
                        custom={direction}
                    >
                        <LeftArrow
                            onClick={onLeftArrowClick}
                            src={LEFT_ARROW_URL}
                        ></LeftArrow>
                        {results.slice(startIndex, endIndex).map((result) => (
                            <DisplayBox
                                key={startIndex}
                                variants={MainBannerImageVariants}
                                initial="start"
                                animate="end"
                                exit="exit"
                                custom={direction}
                                BGPhoto={createImagePath(
                                    result.backdrop_path
                                        ? result.backdrop_path
                                        : result.poster_path
                                )}
                                transition={{
                                    type: "tween",
                                    duration: 1.5,
                                }}
                            >
                                <Description>
                                    <Title>
                                        {result.title
                                            ? result.title
                                            : result.name}
                                    </Title>
                                    <Information>
                                        <Star>★</Star>
                                        {result.vote_average === 0
                                            ? "1.0"
                                            : result.vote_average}{" "}
                                        ◦ {genre} ◦{" "}
                                        {runtime == "0" ? "123" : runtime}분
                                    </Information>
                                    <Play
                                        variants={PlayVariants}
                                        whileHover="hover"
                                        layoutId={"main" + result.id + ""}
                                        // layoutId="test"
                                        onClick={() =>
                                            handlePlayButtonClick(
                                                result.id,
                                                createImagePath(
                                                    result.backdrop_path
                                                        ? result.backdrop_path
                                                        : result.poster_path
                                                )
                                            )
                                        }
                                    >
                                        ► 재생하기
                                    </Play>

                                    <Dots>
                                        {dummyDots.map((index) => (
                                            <Dot
                                                key={index}
                                                focus={index === startIndex}
                                                onClick={() =>
                                                    onDotClick(index)
                                                }
                                            ></Dot>
                                        ))}
                                    </Dots>
                                </Description>

                                {playButton ? (
                                    <AnimatePresence>
                                        <Overlay
                                            onClick={handleClickOutside}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                        >
                                            <MovieDetail
                                                style={{
                                                    top: scrollY.get() + 200,
                                                }}
                                                layoutId={
                                                    "main" + result.id + ""
                                                }
                                                transition={{
                                                    type: "tween",
                                                }}
                                            >
                                                <Detail id={result.id}></Detail>
                                            </MovieDetail>
                                        </Overlay>
                                    </AnimatePresence>
                                ) : null}
                            </DisplayBox>
                        ))}
                        <RightArrow
                            onClick={onRightArrowClick}
                            src={RIGHT_ARROW_URL}
                        ></RightArrow>
                    </AnimatePresence>
                </Wrapper>
            )}
            {/* {showDetail ? <Detail y={scrollY.get()}></Detail> : null} */}
        </>
    );
}

export default Banner;
