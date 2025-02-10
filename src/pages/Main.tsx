import { FC, useEffect } from "react";
import MainWindow from "../components/main/MainWindow.tsx";
import { IPageProps } from "../types.ts";
import DescriptionWindow from "../components/main/DescriptionWindow.tsx";
import { useTranslation } from "react-i18next";
import CountersWindow from "../components/main/CountersWindow.tsx";
import TrustUsWindow from "../components/main/TrustUsWindow.tsx";
import ServicesWindow from "../components/main/ServicesWindow.tsx";
import QuoteWindow from "../components/main/QuoteWindow.tsx";
import ScrollIndicator from "../components/general/ScrollIndicator.tsx";

const Main: FC<IPageProps> = ({ id }) => {

    const { t } = useTranslation();

    useEffect(() => { document.title = t("appWrapper.documentTitles.main") }, []);

    return ( 
        <div id={id}>
            <ScrollIndicator />

            <MainWindow />
 
            <DescriptionWindow />

            <ServicesWindow />

            <CountersWindow />

            <TrustUsWindow />

            <QuoteWindow />
        </div>
    );
}

export default Main;