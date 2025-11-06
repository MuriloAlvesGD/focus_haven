import { useState, useEffect } from "react";
import { Box, Meter, Button, Clock } from "grommet";
import { customTheme } from "../style/styles.js";
import { format } from "../globalFunctions.js";

function Timer({ setActive, isActive, setState }) {
    const [limit, setLimit] = useState(0);
    const [intervalId, setIntervalId] = useState(null);
    const [seg, setSeg] = useState(0);

    const getState = () => {
        chrome.storage.local.get(["seg", "limit", "active", "working"], (res) => {
            if (chrome.runtime.lastError) {
                console.error("Erro ao recuperar os dados:", chrome.runtime.lastError);
                setActive(false);
            }

            setLimit(res.limit);
            setSeg(res.seg);
            if (res.working) setState(res.working);
            setActive(res.active);
        });
    };

    useEffect(() => {
        if (isActive) {
            const Id = setInterval(() => getState(), 1000);
            setIntervalId(Id);
        }
    }, [isActive]);

    useEffect(() => {
        getState();
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
