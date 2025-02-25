import { FC, lazy, useEffect } from "react";
import { IPageProps } from "../types.ts";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { 
    getBaseUrlForHelmet,
    getCanonicalUrlForHelmet, 
    getFormattedPhoneNumberForHelmet, 
    getKeywordsForHelmet, 
    getPhotoUriForHelmet, 
    TranslateOnAxis
} from "../scripts/appWrapperScripts.ts";
import Constants from "../constants.ts";
import Header from "../scripts/header.ts";
import MicroMarkup from "../components/general/MicroMarkup.tsx";
import Window from "../components/general/Window.tsx";
import styles from "../styles/AboutUs.module.css";
import { getStaticFile } from "../scripts/servicesScripts.ts";
import AppearanceAnimation from "../components/general/AppearanceAnimation.tsx";
import { Quotes } from "../components/general/Svgs.tsx";
const ScrollIndicator = lazy(() => import("../components/general/ScrollIndicator.tsx"));

const AboutUs: FC<IPageProps> = ({ id }) => {

    const { t } = useTranslation();

    useEffect(() => { 
        Header.ensureVisible();
    }, []);

    return (
        <div id={id}>  
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

            <ScrollIndicator />

            <Window id={Constants.ABOUT_US_PAGE_MAIN_ID} className={styles.window}>
                <div 
                    className={styles.mainBG} 
                    style={{backgroundImage: `url(${getStaticFile(Constants.ABOUT_US_PAGE_BG_IMAGE)})`}} />

                <div className={styles.mainContainer}>
                    <div className={styles.textContainer}>
                        <AppearanceAnimation
                            initialPosition={Constants.BASE_APPEARANCE_ANIMATION.clone()}
                            delay={500}>
                                <h2 className={styles.title} dangerouslySetInnerHTML={{ __html: t("about-us.title")}} />
                        </AppearanceAnimation>

                        <AppearanceAnimation
                            initialPosition={new TranslateOnAxis(-3, "rem", "X")}
                            duration={0.5}
                            delay={750}>
                            <p className={styles.text} dangerouslySetInnerHTML={{ __html: t("about-us.text")}} />
                        </AppearanceAnimation>
                    </div>

                    <div className={styles.certificatesContainer}>
                        <AppearanceAnimation
                            initialPosition={new TranslateOnAxis(-3, "rem", "Y")}
                            duration={0.5}
                            delay={1000}>
                            <img 
                                src={getStaticFile(Constants.ABOUT_US_PAGE_HACCP_IMAGE)} 
                                alt="HACCP"
                                className={styles.certificate} />

                            <img 
                                src={getStaticFile(Constants.ABOUT_US_PAGE_ISO_IMAGE)} 
                                alt="ISO"
                                className={styles.certificate} />

                            <img 
                                src={getStaticFile(Constants.ABOUT_US_PAGE_DSTU_IMAGE)} 
                                alt="DSTU"
                                className={styles.certificate} />
                        </AppearanceAnimation>
                    </div>
                </div>
            </Window>

            <Window id={Constants.ABOUT_US_PAGE_SECOND_ID} className={styles.founderWindow}>
                <AppearanceAnimation
                    initialPosition={Constants.BASE_APPEARANCE_ANIMATION.clone()}
                    delay={500}>
                    <div 
                        className={styles.founderPortrait} 
                        style={{backgroundImage: `url(${getStaticFile(Constants.ABOUT_US_PAGE_PORTRAIT_IMAGE)})`}} />
                </AppearanceAnimation>

                <AppearanceAnimation
                    initialPosition={new TranslateOnAxis(-3, "rem", "X")}
                    duration={0.5}
                    delay={750}>
                    <p className={styles.founderName}>
                        {t("about-us.founderName")}
                    </p>
                </AppearanceAnimation>
                
                <AppearanceAnimation
                    initialPosition={new TranslateOnAxis(-3, "rem", "X")}
                    duration={0.5}
                    delay={750}>
                    <p className={styles.founderTitle}>
                        {t("about-us.founderTitle")}
                    </p>
                </AppearanceAnimation>
                
                <AppearanceAnimation
                    initialPosition={new TranslateOnAxis(3, "rem", "X")}
                    duration={0.5}
                    delay={1000}
                    className={styles.quoteContainer}>
                    <Quotes className={styles.quotes} />
                    
                    <p className={styles.quoteText}  dangerouslySetInnerHTML={{ __html: t("about-us.quote")}} />
                </AppearanceAnimation>
            </Window>
        </div>
    );
}

export default AboutUs;