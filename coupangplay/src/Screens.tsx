import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Screen/Components/Header";
import Home from "./Screen/Home";

export function Screens() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Header />

            <Switch>
                <Route path="/">
                    <Home></Home>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}
