import { useQuery } from "react-query";
import {
    IData,
    LEFT_ARROW_URL,
    MouseOnTop20State,
    RIGHT_ARROW_URL,
} from "../../GlobalFeatures";
import {
    Container,
    Frame,
    Frames,
    Header,
    LeftArrow,
    Poster,
    PosterBadige,
    PosterVariants,
    Rank,
    RightArrow,
} from "../Styled/TopMoviesStyled";
import { createImagePath, getPopularMovieList } from "../../API";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { SlideVariants } from "../../ProjectCommon";
import InfoBar from "./TinyInfoBar";
import { useSetRecoilState } from "recoil";

function TopMovies() {
    const PopularMovies = useQuery<IData>("popularMovies1", () =>
        getPopularMovieList(1)
    );
    const Results = PopularMovies.data?.results;

    const [startIndex, setStartIndex] = useState<number>(0);
    const [endIndex, setEndIndex] = useState<number>(7);
    const [direction, setDirection] = useState<number>(1);
    const [moving, setMoving] = useState<boolean>(false);

    const setMouseOnPoster = useSetRecoilState(MouseOnTop20State);

    function onLeftArrowClick() {
        if (moving) return;

        console.log("left arrow clikced");
        switch (startIndex) {
            case 0:
                setStartIndex(13);
                setEndIndex(20);
                break;
            case 7:
                setStartIndex(0);
                setEndIndex(7);
                break;
            case 13:
                setStartIndex(7);
                setEndIndex(14);
                break;
            default:
                break;
        }
        setDirection(-1);
        setMoving(true);
    }

    function onRightArrowClick() {
        if (moving) return;

        console.log("right arrow clikced");
        switch (startIndex) {
            case 0:
                setStartIndex(7);
                setEndIndex(14);
                break;
            case 7:
                setStartIndex(13);
                setEndIndex(20);
                break;
            case 13:
                setStartIndex(0);
                setEndIndex(7);
                break;
            default:
                break;
        }
        setDirection(1);
        setMoving(true);
    }

    function handleExitAnimation() {
        setMoving(false);
    }

    function MouseOnPoster() {
        setMouseOnPoster(true);
    }

    function MouseOutPoster() {
        setMouseOnPoster(false);
    }

    return (
        <>
            <Container>
                <LeftArrow
                    onClick={onLeftArrowClick}
                    src={LEFT_ARROW_URL}
                ></LeftArrow>

                <Header>이번 주 인기작 TOP 20</Header>

                <AnimatePresence
                    initial={false}
                    custom={direction}
                    onExitComplete={handleExitAnimation}
                >
                    <Frames
                        key={startIndex}
                        variants={SlideVariants}
                        initial="start"
                        animate="end"
                        exit="exit"
                        custom={direction}
                        transition={{
                            type: "tween",
                            duration: 0.7,
                        }}
                    >
                        {Results?.slice(startIndex, endIndex).map(
                            (movie, index) => (
                                <Frame>
                                    <Rank>{index + startIndex + 1}</Rank>
                                    <Poster
                                        BGPhoto={createImagePath(
                                            movie.poster_path
                                                ? movie.poster_path
                                                : movie.backdrop_path,
                                            300
                                        )}
                                        variants={PosterVariants}
                                        whileHover="hover"
                                        onMouseEnter={MouseOnPoster}
                                        onMouseLeave={MouseOutPoster}
                                        // style={{
                                        //     originX: 1,
                                        //     originY: 0,
                                        // }}
                                    >
                                        <PosterBadige>
                                            <span>쿠플 </span>
                                            &nbsp; 독점
                                        </PosterBadige>

                                        <InfoBar data={movie}></InfoBar>
                                    </Poster>
                                </Frame>
                            )
                        )}
                    </Frames>
                </AnimatePresence>

                <RightArrow
                    onClick={onRightArrowClick}
                    src={RIGHT_ARROW_URL}
                ></RightArrow>
            </Container>
        </>
    );
}

export default TopMovies;
