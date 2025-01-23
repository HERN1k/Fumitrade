import { FC } from "react";
import MainWindow from "../components/main/MainWindow.tsx";
import { IPageProps } from "../types.ts";
import DescriptionWindow from "../components/main/DescriptionWindow.tsx";
import TrustUsWindow from "../components/main/TrustUsWindow.tsx";

const Main: FC<IPageProps> = ({ id }) => {
    return (
        <div id={id}>
            <MainWindow />

            <DescriptionWindow />

            <TrustUsWindow />
        </div>
    );
}

export default Main;