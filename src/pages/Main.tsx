import { FC, lazy, useEffect } from "react";
import { IPageProps } from "../types.ts";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { 
    getCanonicalUrlForHelmet, 
    getKeywordsForHelmet, 
    getPhotoUriForHelmet 
} from "../scripts/appWrapperScripts.ts";
import Constants from "../constants.ts";
import Header from "../scripts/header.ts";
const ScrollIndicator = lazy(() => import("../components/general/ScrollIndicator.tsx"));
const MainWindow = lazy(() => import("../components/main/MainWindow.tsx"));
const DescriptionWindow = lazy(() => import("../components/main/DescriptionWindow.tsx"));
const ServicesWindow = lazy(() => import("../components/main/ServicesWindow.tsx"));
const CountersWindow = lazy(() => import("../components/main/CountersWindow.tsx"));
const TrustUsWindow = lazy(() => import("../components/main/TrustUsWindow.tsx"));
const QuoteWindow = lazy(() => import("../components/main/QuoteWindow.tsx"));

const Main: FC<IPageProps> = ({ id }) => {

    const { t } = useTranslation();

    useEffect(() => { 
        Header.ensureVisible(); 
    }, []);

    return ( 
        <>
            <Helmet>
                <title>{t("pages_helmet.main.title")}</title>
                <link rel="canonical" href={getCanonicalUrlForHelmet(t("pages_helmet.main.canonicalPath"))} />
                <meta name="description" content={t("pages_helmet.main.description")} />
                <meta name="keywords" content={getKeywordsForHelmet(t("pages_helmet.main.keywords"))} />
                <meta name="robots" content={Constants.ROBOTS_INDEX} />
                <meta property="og:type" content={t("pages_helmet.main.openGraphType")} />
                <meta property="og:url" content={getCanonicalUrlForHelmet(t("pages_helmet.main.canonicalPath"))} />
                <meta property="og:site_name" content={Constants.COMPANY_NAME} />
                <meta property="og:title" content={t("pages_helmet.main.title")} />
                <meta property="og:description" content={t("pages_helmet.main.description")} />
                <meta property="og:image" content={getPhotoUriForHelmet(Constants.LOGO_IMAGE)} />
            </Helmet>

            <div id={id}>
                <ScrollIndicator />

                <MainWindow />
    
                <DescriptionWindow />

                <ServicesWindow />

                <CountersWindow />

                <TrustUsWindow />

                <QuoteWindow />
            </div>
        </>
    );
}

export default Main;