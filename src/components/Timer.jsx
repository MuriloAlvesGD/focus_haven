import { useState, useEffect } from "react";
import { Box, Meter, Button, Clock, Text } from "grommet";
import { theme } from "../style/styles.js";
import { format } from "../globalFunctions.js";

function Timer({ setActive, isActive, setState, colors }) {
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
        <Box {...theme.boxAlign} pad="0" gap="5px">
            <Meter
                values={[
                    {
                        color: colors.contrast_shadown,
                        value: (seg / Number(limit * 60)) * 100
                    }
                ]}
                size="xsmall"
                thickness="medium"
                type="circle"
                aria-label="meter"
                background={colors.back_shadown}
            />
            <Text color={colors.contrast}>{format(limit ? limit * 60 - seg : 0)}</Text>
        </Box>
    );
}

export default Timer;
