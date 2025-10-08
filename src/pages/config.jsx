import { useState } from "react";
import SliderInput from "../component/sliderInput/SliderInput.jsx";
import ListInput from "../component/listInput/ListInput.jsx";
import { useNavigate } from "react-router-dom";
import { Grommet, Box } from "grommet";

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

  const theme = {
    global: {
      font: {
        family: "Roboto",
        size: "18px",
        height: "20px"
      }
    }
  };

  return (
    <Grommet theme={theme} full>
      <Box align="center" justify="center">
        <h1>Pomodoro Config.:</h1>
        <SliderInput func={setDuration} max={60} />
        <SliderInput func={setCicles} max={4} type={"ciclo"} />
        <SliderInput func={setStopTime} max={10} />
        <button onClick={() => getBack()}>Return</button>
      </Box>
        <ListInput/>
    </Grommet>
  );
}

export default App;
