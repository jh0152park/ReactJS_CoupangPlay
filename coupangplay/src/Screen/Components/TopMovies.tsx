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

function TopMovies() {
    const PopularMovies = useQuery<IData>("popularMovies1", () =>
        getPopularMovieList(1)
    );
    const Results = PopularMovies.data?.results;

    return (
        <>
            <Container>
                <LeftArrow src={LEFT_ARROW_URL}></LeftArrow>

                <Header>이번 주 인기작 TOP 20</Header>
                <Frames>
                    {Results?.slice(0, 7).map((movie, index) => (
                        <Frame>
                            <Rank>{index + 1}</Rank>
                            <Poster
                                BGPhoto={createImagePath(
                                    movie.poster_path
                                        ? movie.poster_path
                                        : movie.backdrop_path
                                )}
                            ></Poster>
                        </Frame>
                    ))}
                </Frames>

                <RightArrow src={RIGHT_ARROW_URL}></RightArrow>
            </Container>
        </>
    );
}

export default TopMovies;
