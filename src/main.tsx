import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import AppWrapper from "./components/general/AppWrapper.tsx";
import "./scripts/i18n.ts";
import "./index.css";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename="/Fumitrade/">
      <AppWrapper />
    </BrowserRouter>
  </StrictMode>,
);