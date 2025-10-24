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
        if (status == "Working") return <Icons icon="suitcase" height="50px" width="50px" />;
        if (status == "Rest") return <Icons icon="tea" height="50px" width="50px" />;
        if (status == "Idle") return <Icons icon="bed" height="50px" width="50px" />;
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
        <Box
            {...customTheme.boxAlignRow}
            style={{
                padding: "0",
                height: "300px",
                width: "fit-content",
                margin: "0 auto"
            }}>
            <Timer setActive={setActive} isActive={isActive} setState={setState} giveUp={giveUp} />
            <Box {...customTheme.boxAlign} pad="0" width="fit-content" gap="15px">
                <Card
                    background={{ color: "text", opacity: "weak" }}
                    style={{
                        padding: "0", // Define o padding diretamente
                        margin: "0",
                        borderRadius: "12px"
                    }}>
                    <CardBody
                        {...customTheme.boxAlign}
                        style={{
                            padding: "0", // Define o padding diretamente
                            margin: "20px",
                            borderRadius: "0"
                        }}>
                        {state && handleIcon(state)}
                    </CardBody>
                    {/*
                        <CardFooter {...customTheme.boxAlign} background={{color: "control", opacity: "weak"}}>
                            <Text>Teste</Text>
                        </CardFooter>
                        */}
                </Card>
                <Button
                    primary
                    style={{
                        padding: "0 5px", // Define o padding diretamente
                        margin: "0",
                        borderRadius: "10px",
                            fontSize: "12px",
                                width: "100px"
                    }}
                    label={isActive ? "give up" : "start work"}
                    onClick={() => handleGiveUp()}
                />
            </Box>

            {/*
                <span>Work Time: {format(workTime * 60)}</span>
                <span>Sleep Time: {format(sleepTime * 60)}</span>
                */}
        </Box>
    );
}

export default Home;
