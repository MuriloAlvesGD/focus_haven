import { useState, useEffect } from "react";
import { Box, Meter, Button, Clock } from "grommet";
import { customTheme } from "../style/styles.js";
import { format } from "../globalFunctions.js";

function Timer({ setActive, isActive, setState, giveUp }) {
    const [workTime, setWorkTime] = useState(0);
    const [sleepTime, setSleepTime] = useState(0);
    const [cicles, setCicles] = useState(0);
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
        //localStorage.setItem("seg", seg);
        //localStorage.setItem("cicle", cicle);
    }, [isActive]);

    //useEffect(() => {
    //        localStorage.removeItem("seg");
    //        localStorage.removeItem("cicle");
    //        resetTime();
    //}, [giveUp])

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

    useEffect(() => {
        setWorkTime(!localStorage.getItem("workTime") ? 1 : localStorage.getItem("workTime"));
        setSleepTime(!localStorage.getItem("sleepTime") ? 1 : localStorage.getItem("sleepTime"));
        setCicles(!localStorage.getItem("cicles") ? 1 : localStorage.getItem("cicles"));
        //setSeg(!localStorage.getItem("seg") ? 0 : localStorage.getItem("seg"));
        //setCicle(!localStorage.getItem("cicle") ? 0 : localStorage.getItem("cicle"));
    }, []);

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
