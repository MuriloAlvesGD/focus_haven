import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Clock from "./component/clock/Clock.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<Clock />} />
        <Route path="/config" element={<App />} />
      </Routes>
    </MemoryRouter>
  </StrictMode>
);
