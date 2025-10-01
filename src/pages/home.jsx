import Timer from "../component/timer/Timer.jsx";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();


    return (
    <>
        <Timer/>
        <button onClick={() => navigate("/config")}>config</button>
    </>)
}

export default Home;
