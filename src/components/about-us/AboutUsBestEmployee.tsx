import { FC } from "react";
import Window from "../general/Window.tsx";
import Constants from "../../constants.ts";
import styles from "../../styles/AboutUs.module.css";
import AppearanceAnimation from "../general/AppearanceAnimation";
import { getStaticFile } from "../../scripts/servicesScripts.ts";
import { TranslateOnAxis } from "../../scripts/appWrapperScripts.ts";
import { Quotes } from "../general/Svgs.tsx";
import { useTranslation } from "react-i18next";

const AboutUsBestEmployee: FC = () => {

    const { t } = useTranslation();

    return (
        <Window id={Constants.ABOUT_US_PAGE_BEST_EMPLOYEE_ID} className={styles.founderWindow}>
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
    );
}

export default AboutUsBestEmployee;