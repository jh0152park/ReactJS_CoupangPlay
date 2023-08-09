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

function TopMovies() {
    const PopularMovies = useQuery<IData>("popularMovies1", () =>
        getPopularMovieList(1)
    );
    const Results = PopularMovies.data?.results;

    const [startIndex, setStartIndex] = useState<number>(0);
    const [endIndex, setEndIndex] = useState<number>(7);

    /*
    start and end index have to gonna change as below.

    - initial: start 0 / end 7
    - 2step: start 7 / end 14
    - 3step: start 13 / end 20

    after that gonna to initial state
    */

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

                <RightArrow
                    onClick={onRightArrowClick}
                    src={RIGHT_ARROW_URL}
                ></RightArrow>
            </Container>
        </>
    );
}

export default TopMovies;
