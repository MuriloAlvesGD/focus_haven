import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import Config from "./pages/config.jsx";
import Home from "./pages/home.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/config" element={<Config />} />
      </Routes>
    </MemoryRouter>
  </StrictMode>
);
