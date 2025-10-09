import { useState } from "react";
import SliderInput from "../component/sliderInput/SliderInput.jsx";
import ListInput from "../component/listInput/ListInput.jsx";
import { useNavigate } from "react-router-dom";
import { Grommet, Box, Button } from "grommet";
import {customTheme} from "../styles.js";

function App() {
  const [durantion, setDuration] = useState(1);
  const [stopTime, setStopTime] = useState(1);
  const [cicles, setCicles] = useState(1);
  const navigate = useNavigate();

  const getBack = () => {
    localStorage.setItem("workTime", durantion);
    localStorage.setItem("sleepTime", stopTime);
    localStorage.setItem("cicles", cicles);

    navigate("/");
  };

  return (
    <Grommet theme={customTheme} full>
      <Box align="center" justify="center">
        <h1>Pomodoro Config.:</h1>
        <SliderInput func={setDuration} max={60} />
        <SliderInput func={setCicles} max={4} type={"ciclo"} />
        <SliderInput func={setStopTime} max={10} />
        <Button primary label="Return" onClick={() => getBack()}/>
      </Box>
        <ListInput theme={customTheme}/>
    </Grommet>
  );
}

export default App;
