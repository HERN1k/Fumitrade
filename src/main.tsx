import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppRoutes from "./components/general/Routes.tsx";
import "./scripts/i18n.ts";
import "./index.css";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppRoutes />
  </StrictMode>,
);