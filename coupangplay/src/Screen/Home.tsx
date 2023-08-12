import { useQuery } from "react-query";
import Banner from "./Components/Banner";
import { getNowPlayingMovieList } from "../API";
import CategoryBar from "./Components/CategoryBar";
import TopMovies from "./Components/TopMovies";
import Slider from "./Components/Slider";
import { IData } from "../GlobalFeatures";

function Home() {
    const MainMovies = useQuery(["mainMovies", "home"], () =>
        getNowPlayingMovieList(1)
    );
    const LikeMovies = useQuery(["likeMovies", "home"], () =>
        getNowPlayingMovieList(2)
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
                ></Slider>
            )}
        </>
    );
}

export default Home;
