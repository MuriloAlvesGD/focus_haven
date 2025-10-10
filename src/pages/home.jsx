import Timer from "../components/Timer.jsx";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Box, Text, Card, CardBody, CardFooter } from "grommet";
import { customTheme } from "../styles.js";
import { BatteryCharging, ClockUser, HandPalm} from "@phosphor-icons/react";

function Home() {
    const navigate = useNavigate();
    const [state, setState] = useState("Idle");
    const [isActive, setActive] = useState(false);

    const handleIcon = (status) => {
        if (status == "Working") return <ClockUser size="50px" weight="duotone" />
        if (status == "Rest") return <BatteryCharging size="50px" weight="duotone" />
        if (status == "Idle") return <HandPalm size="50px" weight="duotone" />
    }

    useEffect(() => {
        if (isActive) {
            setState("Working");
        } else {
            setState("Idle");
        }
    }, [isActive]);

    return (
            <Box {...customTheme.boxAlignRow} pad="0">
                <Timer setActive={setActive} isActive={isActive} setState={setState} />
                <Box {...customTheme.boxAlign} pad="0" margin={{left: "10px"}}>
                    <Card pad="small" width="xsmall" background={{color: "text", opacity:"weak"}}>
                        <CardBody {...customTheme.boxAlign}>
                            {state && handleIcon(state)}
                        </CardBody>
                        {/*
                        <CardFooter {...customTheme.boxAlign} background={{color: "control", opacity: "weak"}}>
                            <Text>Teste</Text>
                        </CardFooter>
                        */}
                    </Card>
                    <Button primary label={isActive ? "give up" : "start work"} onClick={() => setActive(!isActive)} />
                </Box>

                {/*
                <span>Work Time: {format(workTime * 60)}</span>
                <span>Sleep Time: {format(sleepTime * 60)}</span>
                */}
            </Box>
    );
}

export default Home;
