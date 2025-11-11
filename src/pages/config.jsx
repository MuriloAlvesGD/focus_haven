import SliderInput from "../components/SliderInput.jsx";
import { Box, Button, Text } from "grommet";

function Config(colors) {
  const save = (name, value) => {
    let saveData = {};
    saveData[name] = value;
    //chrome.storage.local.set(saveData, () => {
    //    if (chrome.runtime.lastError) {
    //        console.error("Erro ao salvar dados:", chrome.runtime.lastError);
    //    } else {
    //        console.log(`Dados salvos com sucesso: ${name} = ${value}`);
    //    }
    //});
  };

  return (
    <Box
      style={{
        padding: "0",
        height: "300px",
        width: "300px"
      }}>
      <Box align="center">
        <Box align="start" width="fit-content">
          <Text size="xlarge" weight="bold" margin={{ bottom: "20px" }} color={colors.contrast}>
            Pomodoro Config.:
          </Text>
          <SliderInput save={save} name="workTime" max={60} colors={colors}/>
          <SliderInput save={save} name="cicles" max={4} type={"ciclo"} colors={colors}/>
          <SliderInput save={save} name="sleepTime" max={10} colors={colors}/>
        </Box>
      </Box>
    </Box>
  );
}

export default Config;
