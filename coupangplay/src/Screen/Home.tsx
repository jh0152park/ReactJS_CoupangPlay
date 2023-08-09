import { useQuery } from "react-query";
import Banner from "./Components/Banner";
import { getNowPlayingMovieList } from "../API";
import CategoryBar from "./Components/CategoryBar";
import TopMovies from "./Components/TopMovies";

function Home() {
    const MainMovies = useQuery("mainMovies", () => getNowPlayingMovieList(1));

    return (
        <>
            {MainMovies.isLoading ? null : (
                <Banner results={MainMovies.data.results}></Banner>
            )}
            <CategoryBar></CategoryBar>
            <TopMovies></TopMovies>
        </>
    );
}

export default Home;
