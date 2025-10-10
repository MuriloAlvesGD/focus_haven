import { useState, useEffect } from "react";
import { Box, Meter, Button, Clock } from "grommet";
import { customTheme } from "../styles.js";
import { format } from "../globalFunctions.js";

function Timer({setActive, isActive, setState}) {
    const workTime = localStorage.getItem("workTime");
    const sleepTime = localStorage.getItem("sleepTime");
    const cicles = localStorage.getItem("cicles");
    const [limit, setLimit] = useState(0);
    const [cicle, setCicle] = useState(0);
    const [intervalId, setIntervalId] = useState(null);
    const [seg, setSeg] = useState(0);

    const resetTime = () => {
        setSeg(0);
    };

    useEffect(() => {
        if (isActive) {
            setLimit(workTime);
            const Id = setInterval(() => setSeg((prev) => prev + 1), 1000);
            setIntervalId(Id);
        } else if (intervalId) {
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
                setCicle((prev) => prev + 1);
            } else {
                resetTime();
                setActive(false);
                clearInterval(intervalId);
            }
        }
    }, [seg]);

    return (
        <Box {...customTheme.boxAlign} pad="0">
            <Meter
                values={[
                    {
                        color: "control",
                        value: (seg / Number(limit * 60)) * 100
                    }
                ]}
                background={{ color: "control", opacity: "weak" }}
                size="xsmall"
                thickness="medium"
                type="circle"
                aria-label="meter"
            />
            {limit ? (
                <Clock
                    type="digital"
                    time={isActive ? "T" + format(limit * 60 - seg) : "T00:00:00"}
                    run={isActive ? "backward" : false}
                />
            ) : (
                <Clock type="digital" time="T00:00:00" run={false} />
            )}
        </Box>
    );
}

export default Timer;
