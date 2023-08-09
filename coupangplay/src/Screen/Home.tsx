import { useQuery } from "react-query";
import Banner from "./Components/Banner";
import { getNowPlayingMovieList } from "../API";
import CategoryBar from "./Components/CategoryBar";

function Home() {
    const MainMovies = useQuery("mainMovies", () => getNowPlayingMovieList(1));

    return (
        <>
            {MainMovies.isLoading ? null : (
                <Banner results={MainMovies.data.results}></Banner>
            )}
            <CategoryBar></CategoryBar>
        </>
    );
}

export default Home;
