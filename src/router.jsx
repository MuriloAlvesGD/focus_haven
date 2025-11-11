import { Routes, Route } from "react-router-dom";
import Config from "./pages/config.jsx";
import Home from "./pages/home.jsx";
import BlackList from "./pages/blackList.jsx";

function Router(colors) {
    return (
        <Routes>
            <Route path="/" element={<Home {...colors}/>} />
            <Route path="/config" element={<Config {...colors}/>} />
            <Route path="/black_list" element={<BlackList {...colors}/>} />
        </Routes>
    );
}

export default Router;
