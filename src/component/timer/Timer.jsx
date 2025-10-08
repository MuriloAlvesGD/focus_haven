import { useState, useEffect } from "react";
import { Grommet, Box, Meter } from "grommet";

function Timer() {
    const workTime = localStorage.getItem("workTime");
    const sleepTime = localStorage.getItem("sleepTime");
    const cicles = localStorage.getItem("cicles");
    const [limit, setLimit] = useState(0);
    const [seg, setSeg] = useState(0);
    const [cicle, setCicle] = useState(0);
    const [state, setState] = useState("Idle");
    const [isActive, setActive] = useState(false);
    const [intervalId, setIntervalId] = useState(null);
    const [completeWork, setCompleteWork] = useState(Array.from({ length: Number(cicles) }));

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
            completeWork.fill(false);
            setLimit(workTime);
            setState("Working");
            const Id = setInterval(() => setSeg((prev) => prev + 1), 1000);

            setIntervalId(Id);
        } else if (intervalId) {
            setState("Idle");
            clearInterval(intervalId);
            setCicle(0);
        }
    }, [isActive]);

    useEffect(() => {
        if (isActive && seg / 60 >= limit) {
            if (cicle < cicles) {
                resetTime();
                setLimit(limit == workTime ? sleepTime : workTime);
                setState(limit == workTime ? "Rest" : "Working");
                if (limit == workTime) completeWork[cicle] = true;
                setCicle((prev) => prev + 1);
            } else {
                resetTime();
                completeWork[cicle - 1] = true;
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
                <Meter
                    values={[
                        {
                            value: (seg / Number(limit * 60)) * 100
                        }
                    ]}
                    size="xsmall"
                    thickness="medium"
                    type="circle"
                    aria-label="meter"
                />
                <span>{format(seg)}</span>
                <button onClick={() => setActive(true)}>Start</button>
                <button onClick={() => setActive(false)}>Stop</button>
                <span>{"Status: " + state}</span>
                <span>Work Time: {format(workTime * 60)}</span>
                <span>Sleep Time: {format(sleepTime * 60)}</span>
                {completeWork.map((status, index) => (
                    <span key={index}>{status ? "Complete" : "Uncomplete"}</span>
                ))}
            </Box>
        </Grommet>
    );
}

export default Timer;
