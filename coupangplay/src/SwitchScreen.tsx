import { Route, Switch, useLocation } from "react-router-dom";
import Header from "./Screen/Components/Header";
import Home from "./Screen/Home";
import MovieDetail from "./Screen/MovieDetail";
import TV from "./Screen/TV";
import TVDetail from "./Screen/TVDetail";

function SwitchScreen() {
    const Location = useLocation();

    const DetailMatch = Location.pathname.startsWith("/movies/details");
    const MovieId = DetailMatch ? Location.pathname.split("/")[3] : "n/a";

    const TVDetailMatch = Location.pathname.startsWith("/tvs/details");
    const TVId = TVDetailMatch ? Location.pathname.split("/")[3] : "n/a";

    return (
        <>
            <Header />
            <Switch>
                <Route path={`/movies/details/${MovieId}`}>
                    <MovieDetail id={MovieId}></MovieDetail>
                </Route>

                <Route path={`/tvs/details/${TVId}`}>
                    <TVDetail id={TVId}></TVDetail>
                </Route>

                <Route path={"/TV"}>
                    <TV></TV>
                </Route>

                <Route path={["/", "/영화"]}>
                    <Home></Home>
                </Route>
            </Switch>
        </>
    );
}

export default SwitchScreen;
