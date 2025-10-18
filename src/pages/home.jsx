import Timer from "../components/Timer.jsx";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Box, Text, Card, CardBody, CardFooter } from "grommet";
import { customTheme } from "../styles.js";
import { BatteryCharging } from "pixelarticons/fonts/react/BatteryCharging.js";
import { BriefcaseSearch1 } from "pixelarticons/fonts/react/BriefcaseSearch1.js";
import { Bed } from "pixelarticons/fonts/react/Bed.js";

function Home() {
    const navigate = useNavigate();
    const [state, setState] = useState("Idle");
    const [isActive, setActive] = useState(false);
    const [giveUp, setGiveUp] = useState(false);

    const handleIcon = (status) => {
        if (status == "Working") return <BriefcaseSearch1 height="50px" width="50px" viewBox="0 0 24 24" fill="gray" />;
        if (status == "Rest") return <BatteryCharging height="50px" width="50px" viewBox="0 0 24 24" fill="gray" />;
        if (status == "Idle") return <Bed height="50px" width="50px" viewBox="0 0 24 24" fill="gray" />;
    };

    const handleGiveUp = () => {


        setActive(!isActive);
    };
    useEffect(() => {
        if (isActive) {
            setState("Working");
        } else {
            setState("Idle");
        }
    }, [isActive]);

    return (
        <Box {...customTheme.boxAlignRow} pad="0">
            <Timer setActive={setActive} isActive={isActive} setState={setState} giveUp={giveUp}/>
            <Box {...customTheme.boxAlign} pad="0" width="180px">
                <Card pad="small" width="xsmall" background={{ color: "text", opacity: "weak" }}>
                    <CardBody {...customTheme.boxAlign}>{state && handleIcon(state)}</CardBody>
                    {/*
                        <CardFooter {...customTheme.boxAlign} background={{color: "control", opacity: "weak"}}>
                            <Text>Teste</Text>
                        </CardFooter>
                        */}
                </Card>
                <Button primary label={isActive ? "give up" : "start work"} onClick={() => handleGiveUp()} />
            </Box>

            {/*
                <span>Work Time: {format(workTime * 60)}</span>
                <span>Sleep Time: {format(sleepTime * 60)}</span>
                */}
        </Box>
    );
}

export default Home;
