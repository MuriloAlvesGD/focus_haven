import { Routes, Route } from "react-router-dom";
import Config from "./pages/config.jsx";
import Home from "./pages/home.jsx";
import BlackList from "./pages/blackList.jsx";

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/config" element={<Config />} />
            <Route path="/black_list" element={<BlackList />} />
        </Routes>
    );
}

export default Router;
