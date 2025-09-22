import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Grommet, Box} from "grommet";

function Clock() {
    const workTime = localStorage.getItem("workTime");
    const sleepTime = localStorage.getItem("sleepTime");
    const cicles = localStorage.getItem("cicles");
    const [limit, setLimit] = useState(0);
    const [seg, setSeg] = useState(0);
    const [cicle, setCicle] = useState(0);
    const [state, setState] = useState("Idle");
    const [isActive, setActive] = useState(false);
    const [intervalId, setIntervalId] = useState(null);
    const navigate = useNavigate();

    const resetTime = () => {
        setSeg(0);
    };

    const format = (s) => {
        const hour = Math.floor(s / 3600);
        const min = Math.floor((s % 3600) / 60);
        const seg = Math.floor(s % 60);
        return `${String(hour).padStart(2, "0")}:${String(min).padStart(2, "0")}:${String(seg).padStart(2, "0")}`;
    };

    useEffect(() => {
        if (isActive) {
            setLimit(workTime);
            setState("Working");
        } else {
            setState("Idle");
        }
    }, [isActive]);

    useEffect(() => {
        if (isActive) {
            const Id = setInterval(() => setSeg((prev) => prev + 1), 1000);

            setIntervalId(Id);
        } else if (intervalId) {
            clearInterval(intervalId);
            setCicle(0);
        }
    }, [isActive]);

    useEffect(() => {
        if (seg / 60 >= limit) {
            if (cicle <= cicles) {
                resetTime();
                setLimit(limit == workTime ? sleepTime : workTime);
                setState(limit == workTime ? "Rest" : "Working");
                setCicle((prev) => prev + 1);
            } else {
                resetTime();
                setActive(false);
                clearInterval(intervalId);
            }
        }
    }, [seg]);

    const theme = {
        global: {
            font: {
                family: "Roboto",
                size: "18px",
                height: "20px"
            }
        }
    };

    return (
        <Grommet theme={theme} full>
            <Box align="center" justify="center" gap="medium" pad="large">
                <span>{state}</span>
                <span>{format(seg)}</span>
                <span>Total - {limit == workTime ? "work" : "sleep"} time : {format(limit*60)}</span>
                <button onClick={() => setActive((prev) => !prev)}>Start / Stop</button>
                <button onClick={() => navigate("/config")}>config</button>
            </Box>
        </Grommet>
    );
}

export default Clock;
