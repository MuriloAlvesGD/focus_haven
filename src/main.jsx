import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { MemoryRouter } from "react-router-dom";
import { Grommet, Box, Stack } from "grommet";
import { theme, colors } from "./style/styles.js"; // Presumindo que você tenha um tema customizado
import Router from "./router.jsx";
import FloatingMenu from "./components/FloatingMenu.jsx";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      const theme = localStorage.getItem("theme");
      if (theme) {
        setIsDarkMode(theme == "dark");
        return false;
      }
      return true;
    };

    if (checkTheme()) {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

      // Função para atualizar o estado
      const handleChange = (event) => {
        setIsDarkMode(event.matches);
      };

      // Adiciona o listener
      mediaQuery.addEventListener("change", handleChange);

      // Verifica a preferência inicial
      setIsDarkMode(mediaQuery.matches);

      // Cleanup: remove o listener ao desmontar o componente
      return () => {
        mediaQuery.removeEventListener("change", handleChange);
      };
    }
  }, []);

  const changeTheme = (theme) => {
    localStorage.setItem("theme", theme);
    setIsDarkMode(theme == "dark");
  };

  const currentColors = isDarkMode ? colors.dark : colors.light; //Usado para controlar cores em componentes externos ao Grommet

  return (
    <Grommet theme={theme}>
      <Stack anchor="top-right">
        <Box pad={{ top: "80px" }} background={{ color: currentColors.background }}>
          <Router {...currentColors} />
        </Box>
        <FloatingMenu colors={currentColors} changeTheme={changeTheme} isDark={isDarkMode} />
        {/*isDarkMode ? "DARK MODE" : "LIGHT MODE"*/}
      </Stack>
    </Grommet>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MemoryRouter>
      <App />
    </MemoryRouter>
  </StrictMode>
);
