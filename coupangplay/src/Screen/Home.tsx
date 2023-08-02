import { useQuery } from "react-query";
import Banner from "./Components/Banner";
import { getNowPlayingMovieList } from "../API";

function Home() {
    const MainMovies = useQuery("mainMovies", () => getNowPlayingMovieList(1));

    return (
        <>
            {MainMovies.isLoading ? null : (
                <Banner results={MainMovies.data.results}></Banner>
            )}
        </>
    );
}

export default Home;
