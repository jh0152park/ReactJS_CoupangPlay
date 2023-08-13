import { useQuery } from "react-query";
import Banner from "./Components/Banner";
import {
    getNowPlayingMovieList,
    getPopularMovieList,
    getTopRatedMovieList,
    getUpComingMovieList,
} from "../API";
import CategoryBar from "./Components/CategoryBar";
import TopMovies from "./Components/TopMovies";
import Slider from "./Components/Slider";
import Footer from "./Components/Footer";

function Home() {
    const MainMovies = useQuery(["mainMovies", "home"], () =>
        getNowPlayingMovieList(1)
    );
    const LikeMovies = useQuery(["likeMovies", "home"], () =>
        getNowPlayingMovieList(2)
    );

    const PopularMovies = useQuery(["popularMovies", "home"], () =>
        getPopularMovieList(2)
    );

    const TopRatedMovies = useQuery(["topRatedMovies", "home"], () =>
        getTopRatedMovieList(1)
    );

    const UpComingMovies = useQuery(["soonMovies", "home"], () =>
        getUpComingMovieList(1)
    );

    return (
        <>
            {MainMovies.isLoading ? null : (
                <Banner results={MainMovies.data.results}></Banner>
            )}
            <CategoryBar></CategoryBar>
            <TopMovies></TopMovies>

            {LikeMovies.isLoading && LikeMovies ? null : (
                <Slider
                    title="내가 좋아할 만한 콘텐츠"
                    results={LikeMovies.data?.results}
                    type="movie"
                ></Slider>
            )}
            {PopularMovies.isLoading && PopularMovies ? null : (
                <Slider
                    title="인기 콘텐츠"
                    results={PopularMovies.data?.results}
                    type="movie"
                ></Slider>
            )}
            {TopRatedMovies.isLoading && TopRatedMovies ? null : (
                <Slider
                    title="높은 평점의 콘텐츠"
                    results={TopRatedMovies.data?.results}
                    type="movie"
                ></Slider>
            )}
            {UpComingMovies.isLoading && UpComingMovies ? null : (
                <Slider
                    title="다가오는 기대작"
                    results={UpComingMovies.data?.results}
                    type="movie"
                ></Slider>
            )}
            <Footer></Footer>
        </>
    );
}

export default Home;
