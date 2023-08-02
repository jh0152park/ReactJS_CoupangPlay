import { BrowserRouter, Link } from "react-router-dom";
import Header from "./Screen/Components/Header";
import Home from "./Screen/Home";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Link to="/">
                <Home></Home>
            </Link>
        </BrowserRouter>
    );
}

export default App;
