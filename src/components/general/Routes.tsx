import { Routes, Route } from "react-router";
import Constants from "../../constants.ts";
import Main from "../../pages/Main.tsx";
import NotFound from "../../pages/NotFound.tsx";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Main id={Constants.MAIN_PAGE_ID} />} />
            <Route path="*" element={<NotFound id={Constants.NOT_FOUND_PAGE_ID} />} />
        </Routes>
    );
};

export default AppRoutes;