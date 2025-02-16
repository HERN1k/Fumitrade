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
const ContactsWindow = lazy(() => import("../components/general/ContactsWindow.tsx"));

const Contacts: FC<IPageProps> = ({ id }) => {

    const { t } = useTranslation();

    useEffect(() => { 
        Header.ensureVisible();
    }, []);

    return (
        <>  
            <Helmet key={window.location.pathname}>
                <title>{t("pages_helmet.contacts.title")}</title>
                <link rel="canonical" href={getCanonicalUrlForHelmet(t("pages_helmet.contacts.canonicalPath"))} />
                <meta name="description" content={t("pages_helmet.contacts.description")} />
                <meta name="keywords" content={getKeywordsForHelmet(t("pages_helmet.contacts.keywords"))} />
                <meta name="robots" content={Constants.ROBOTS_INDEX} />
                <meta property="og:type" content={t("pages_helmet.contacts.openGraphType")} />
                <meta property="og:url" content={getCanonicalUrlForHelmet(t("pages_helmet.contacts.canonicalPath"))} />
                <meta property="og:site_name" content={Constants.COMPANY_NAME} />
                <meta property="og:title" content={t("pages_helmet.contacts.title")} />
                <meta property="og:description" content={t("pages_helmet.contacts.description")} />
                <meta property="og:image" content={getPhotoUriForHelmet(Constants.LOGO_IMAGE)} />
            </Helmet>

            <MicroMarkup json={
                JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "ContactPage",
                    "mainEntity": {
                        "@type": "Organization",
                        "name": Constants.COMPANY_NAME,
                        "url": getBaseUrlForHelmet(),
                        "contactPoint": [
                            {
                                "@type": "ContactPoint",
                                "telephone": getFormattedPhoneNumberForHelmet(Constants.COMPANY_FIRST_PHONE_NUMBER),
                                "contactType": "customer service",
                                "areaServed": Constants.COUNTRY_CODE,
                                "availableLanguage": ["Ukrainian", "Russian", "English"]
                            },
                            {
                                "@type": "ContactPoint",
                                "email": Constants.COMPANY_EMAIL,
                                "contactType": "support",
                                "availableLanguage": ["Ukrainian", "Russian", "English"]
                            }
                        ],
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": Constants.DISTRICT_LOCATION,
                            "addressLocality": Constants.CITY_LOCATION,
                            "addressCountry": Constants.COUNTRY_CODE
                        }
                    }
                })} />

            <div id={id}>
                <ScrollIndicator />
                
                <ContactsWindow sticky={false} />
            </div>
        </>
    );
}

export default Contacts;