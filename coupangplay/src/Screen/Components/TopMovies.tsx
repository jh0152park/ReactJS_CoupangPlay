import { useQuery } from "react-query";
import {
    LEFT_ARROW_URL,
    QUESTION_MARK_URL,
    RIGHT_ARROW_URL,
} from "../../GlobalFeatures";
import {
    Container,
    Frame,
    Frames,
    Header,
    LeftArrow,
    Poster,
    Rank,
    RightArrow,
} from "../Styled/TopMoviesStyled";
import { createImagePath, getPopularMovieList } from "../../API";
import { IData } from "../Styled/BannerStyled";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

function TopMovies() {
    const PopularMovies = useQuery<IData>("popularMovies1", () =>
        getPopularMovieList(1)
    );
    const Results = PopularMovies.data?.results;

    const [startIndex, setStartIndex] = useState<number>(0);
    const [endIndex, setEndIndex] = useState<number>(7);

    function onLeftArrowClick() {
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
    }

    function onRightArrowClick() {
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
    }

    return (
        <>
            <Container>
                <LeftArrow
                    onClick={onLeftArrowClick}
                    src={LEFT_ARROW_URL}
                ></LeftArrow>

                <Header>이번 주 인기작 TOP 20</Header>

                <AnimatePresence>
                    <Frames>
                        {Results?.slice(startIndex, endIndex).map(
                            (movie, index) => (
                                <Frame>
                                    <Rank>{index + startIndex + 1}</Rank>
                                    <Poster
                                        BGPhoto={createImagePath(
                                            movie.poster_path
                                                ? movie.poster_path
                                                : movie.backdrop_path
                                        )}
                                    ></Poster>
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
