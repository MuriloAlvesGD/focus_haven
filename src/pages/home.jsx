import Timer from "../components/Timer.jsx";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Box, Text, Card, CardBody, CardFooter } from "grommet";
import { customTheme } from "../style/styles.js";
import Icons from "../style/icons.jsx";

function Home() {
    const navigate = useNavigate();
    const [state, setState] = useState("Idle");
    const [isActive, setActive] = useState(false);
    const [giveUp, setGiveUp] = useState(false);

    const handleIcon = (status) => {
        if (status == "Working") return <Icons icon="suitcase" height="50px" width="50px"/>;
        if (status == "Rest") return <Icons icon="tea" height="50px" width="50px"/>;
        if (status == "Idle") return <Icons icon="bed" height="50px" width="50px"/>;
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
