import { Routes, Route } from "react-router";
import {
    MAIN_PAGE_ID,
    NOT_FOUND_PAGE_ID,
} from "./Constants.ts";
import MainPage from "./Pages/MainPage";
import NotFoundPage from "./Pages/NotFoundPage";

const AppRoutes = () => {
  return (
        <Routes>
            <Route path="/" element={<MainPage id={MAIN_PAGE_ID} />} />
            <Route path="*" element={<NotFoundPage id={NOT_FOUND_PAGE_ID} />} />
        </Routes>
    );
};

export default AppRoutes;