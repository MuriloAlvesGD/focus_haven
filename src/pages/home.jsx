import Timer from "../component/timer/Timer.jsx";
import { useNavigate } from "react-router-dom";
import { Grommet, Button, Box } from "grommet";
import { customTheme} from "../styles.js";

function Home() {
    const navigate = useNavigate();

    return (
        <Grommet theme={customTheme} full>
            <Box {...customTheme.boxAlign}>
                <Timer />
                <Button primary label="config" onClick={() => navigate("/config")} />
            </Box>
        </Grommet>
    );
}

export default Home;
