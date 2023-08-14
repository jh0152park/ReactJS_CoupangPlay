import { useQueries } from "react-query";
import {
    MessageBox,
    MessageBoxContainer,
} from "../../Styled/LikeContents/LikeContentsStyled";
import { getMovieDetail, getTVDetail } from "../../../API";
import Slider from "../Slider";
import { useRecoilValue } from "recoil";
import { LikeMovieState, LiveTVState } from "../../../ProjectCommon";

function LikeContentsScreen() {
    let movies_data = [];
    let tvs_data = [];

    const movie_ids = useRecoilValue(LikeMovieState);
    const tv_ids = useRecoilValue(LiveTVState);

    const movie_results = useQueries(
        movie_ids.map((id) => {
            return {
                queryKey: "mlike" + id,
                queryFn: () => getMovieDetail(id),
            };
        })
    );

    const tv_results = useQueries(
        tv_ids.map((id) => {
            return {
                queryKey: "tlike" + id,
                queryFn: () => getTVDetail(id),
            };
        })
    );

    const movie_entire_loading = movie_results.some(
        (result) => result.isLoading
    );
    const tv_entire_loading = tv_results.some((result) => result.isLoading);

    if (!movie_entire_loading) {
        console.log(movie_results);
        movies_data = movie_results.map((result) => result.data);
    }

    if (!tv_entire_loading) {
        console.log(tv_results);
        tvs_data = tv_results.map((result) => result.data);
    }

    return (
        <>
            <MessageBoxContainer>
                <MessageBox>내가 찜한 콘텐츠</MessageBox>
            </MessageBoxContainer>

            {movie_entire_loading && movie_results ? null : (
                <Slider
                    title="내가 찜한 영화 콘텐츠"
                    results={movies_data}
                    type="movie"
                ></Slider>
            )}
            {tv_entire_loading && tv_results ? null : (
                <Slider
                    title="내가 찜한 TV 콘텐츠"
                    results={tvs_data}
                    type="tv"
                ></Slider>
            )}
        </>
    );
}

export default LikeContentsScreen;
