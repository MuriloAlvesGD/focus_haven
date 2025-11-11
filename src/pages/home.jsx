import Timer from "../components/Timer.jsx";
import { useEffect, useState } from "react";
import { Button, Box, Text, Card, CardBody, CardFooter } from "grommet";
import { theme } from "../style/styles.js";
import Icons from "../style/icons.jsx";

function Home(colors) {
    const [state, setState] = useState("Idle");
    const [isActive, setActive] = useState(false);

    const handleIcon = (status) => {
        if (status == "Working") return <Icons icon="suitcase" height="50px" width="50px" fill={colors.background} />;
        if (status == "Rest") return <Icons icon="tea" height="50px" width="50px" fill={colors.background} />;
        if (status == "Idle") return <Icons icon="bed" height="50px" width="50px" fill={colors.background} />;
    };

    const handleClick = () => {
        //chrome.runtime.sendMessage({ action: !isActive ? "start" : "stop" });
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
            {...theme.boxAlignRow}
            style={{
                padding: "0",
                height: "300px",
                width: "fit-content",
                margin: "0 auto"
            }}
            >
            <Timer setActive={setActive} isActive={isActive} setState={setState} colors={colors}/>
            <Box {...theme.boxAlign} pad="0" width="fit-content" gap="15px">
                <Card
                    style={{
                        padding: "0", // Define o padding diretamente
                        margin: "0",
                        borderRadius: "12px"
                    }}
                    >
                    <CardBody
                        {...theme.boxAlign}
                        style={{
                            padding: "0", // Define o padding diretamente
                            margin: "20px",
                            borderRadius: "0"
                        }}>
                        {state && handleIcon(state)}
                    </CardBody>
                    {/*
                        <CardFooter {...theme.boxAlign} background={{color: "control", opacity: "weak"}}>
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
                    color={colors.contrast}
                    label={isActive ? "give up" : "start work"}
                    onClick={() => handleClick()}
                />
            </Box>
        </Box>
    );
}

export default Home;
