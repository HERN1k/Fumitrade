import { FC, lazy, useEffect } from "react";
import { IPageProps } from "../types.ts";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { 
    getBaseUrlForHelmet,
    getCanonicalUrlForHelmet, 
    getFormattedPhoneNumberForHelmet, 
    getKeywordsForHelmet, 
    getPhotoUriForHelmet 
} from "../scripts/appWrapperScripts.ts";
import Constants from "../constants.ts";
import Header from "../scripts/header.ts";
import MicroMarkup from "../components/general/MicroMarkup.tsx";
const ScrollIndicator = lazy(() => import("../components/general/ScrollIndicator.tsx"));
const MainWindow = lazy(() => import("../components/main/MainWindow.tsx"));
const DescriptionWindow = lazy(() => import("../components/main/DescriptionWindow.tsx"));
const ServicesWindow = lazy(() => import("../components/main/ServicesWindow.tsx"));
const CountersWindow = lazy(() => import("../components/main/CountersWindow.tsx"));
const TrustUsWindow = lazy(() => import("../components/main/TrustUsWindow.tsx"));
const QuoteWindow = lazy(() => import("../components/general/ContactsWindow.tsx"));

const Main: FC<IPageProps> = ({ id }) => {

    const { t } = useTranslation();

    useEffect(() => { Header.ensureVisible() }, []);

    return ( 
        <>
            <Helmet key={window.location.pathname}>
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

            <MicroMarkup json={
                JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "name": t("pages_helmet.main.name"),
                    "url": getBaseUrlForHelmet(),
                    "logo": getPhotoUriForHelmet(Constants.LOGO_IMAGE),
                    "description": t("pages_helmet.main.description"),
                    "contactPoint": {
                        "@type": "ContactPoint",
                        "telephone": getFormattedPhoneNumberForHelmet(Constants.COMPANY_FIRST_PHONE_NUMBER),
                        "contactType": "customer service",
                        "areaServed": Constants.COUNTRY_CODE,
                        "availableLanguage": ["Ukrainian", "Russian", "English"]
                    },
                    "sameAs": [ Constants.COMPANY_FACEBOOK_URL ]
                })} />

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