import { BrowserRouter, Route, Switch, useLocation } from "react-router-dom";
import Header from "./Screen/Components/Header";
import Home from "./Screen/Home";
import SwitchScreen from "./SwitchScreen";

export function Screens() {
    // const Location = useLocation();
    // const DetailMatch = Location.pathname.startsWith("/movies/details");
    // const MovieId = DetailMatch ? Location.pathname.split("/")[3] : "n/a";

    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <SwitchScreen></SwitchScreen>
        </BrowserRouter>
    );
}
