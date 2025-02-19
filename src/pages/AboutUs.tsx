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

const AboutUs: FC<IPageProps> = ({ id }) => {

    const { t } = useTranslation();

    useEffect(() => { 
        Header.ensureVisible();
    }, []);

    return (
        <>  
            <Helmet key={window.location.pathname}>
                <title>{t("pages_helmet.about_us.title")}</title>
                <link rel="canonical" href={getCanonicalUrlForHelmet(t("pages_helmet.about_us.canonicalPath"))} />
                <meta name="description" content={t("pages_helmet.about_us.description")} />
                <meta name="keywords" content={getKeywordsForHelmet(t("pages_helmet.about_us.keywords"))} />
                <meta name="robots" content={Constants.ROBOTS_INDEX} />
                <meta property="og:type" content={t("pages_helmet.about_us.openGraphType")} />
                <meta property="og:url" content={getCanonicalUrlForHelmet(t("pages_helmet.about_us.canonicalPath"))} />
                <meta property="og:site_name" content={Constants.COMPANY_NAME} />
                <meta property="og:title" content={t("pages_helmet.about_us.title")} />
                <meta property="og:description" content={t("pages_helmet.about_us.description")} />
                <meta property="og:image" content={getPhotoUriForHelmet(Constants.ICON_IMAGE)} />
            </Helmet>

            <MicroMarkup json={
                JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "AboutPage",
                    "mainEntity": {
                        "@type": "Organization",
                        "name": Constants.COMPANY_NAME,
                        "url": getBaseUrlForHelmet(),
                        "logo": getPhotoUriForHelmet(Constants.ICON_IMAGE),
                        "description": t("pages_helmet.about_us.description"),
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "telephone": getFormattedPhoneNumberForHelmet(Constants.COMPANY_FIRST_PHONE_NUMBER),
                            "contactType": "customer service",
                            "availableLanguage": ["Ukrainian", "Russian", "English"]
                        }
                    }
                })} />

            <div id={id}>
                <ScrollIndicator />

            </div>
        </>
    );
}

export default AboutUs;