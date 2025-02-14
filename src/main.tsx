import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppRoutes from "./components/general/Routes.tsx";
import { HelmetProvider } from "react-helmet-async";
import "./scripts/i18n.ts";
import "./index.css";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <AppRoutes />
    </HelmetProvider>
  </StrictMode>,
);