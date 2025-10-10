import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MemoryRouter } from "react-router-dom";
import { Grommet, Box, Stack } from "grommet";
import { customTheme } from "./styles.js";
import Router from "./router.jsx";
import FloatingMenu from "./components/FloatingMenu.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MemoryRouter>
      <Grommet theme={customTheme} full>
        <Stack anchor="top-right">
          <Box pad={{top:"100px"}}>
            <Router />
          </Box>
          <FloatingMenu />
        </Stack>
      </Grommet>
    </MemoryRouter>
  </StrictMode>
);
