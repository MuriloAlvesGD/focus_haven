import SliderInput from "../components/SliderInput.jsx";
import { Box, Button, Text } from "grommet";
import { customTheme } from "../styles.js";

function App() {
  const save = (name, value) => {
    localStorage.setItem(name, value);
  };

  return (
    <>
      <Box align="center">
        <Box align="start" width="fit-content">
          <Text size="xlarge" weight="bold" margin={{ bottom: "20px" }}>
            Pomodoro Config.:
          </Text>
          <SliderInput save={save} name="workTime" max={60} />
          <SliderInput save={save} name="cicles" max={4} type={"ciclo"} />
          <SliderInput save={save} name="sleepTime" max={10} />
        </Box>
      </Box>
    </>
  );
}

export default App;
