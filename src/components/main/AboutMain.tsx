import { FC } from "react";
import styles from "../../styles/MainPage.module.css";
import { Zipper } from "../general/Svgs.tsx";
import AboutMainElement from "./AboutMainElement.tsx";
import { useTranslation } from "react-i18next";
import { removeLineBreak } from "../../scripts/mainPageScripts.ts";
import AppearanceAnimation from "../general/AppearanceAnimation.tsx";
import Constants from "../../constants.ts";

const AboutMain: FC = () => {

    const { t } = useTranslation();

    const style = {
        width: "fit-content", 
        height: "fit-content", 
        display: "block", 
        position: "relative",
    };

    return (
        <div className={styles.aboutTextContainer}>
            <div className={styles.aboutTextTitleContainer}>
                <AppearanceAnimation 
                    initialPosition={Constants.BASE_APPEARANCE_ANIMATION.clone()}
                    delay={500} 
                    style={style}>
                    <h1 className={styles.aboutTextTitle}>
                        { window.innerWidth > 768 
                            ? t("mainWindow.about.professional_fumigation")
                            : removeLineBreak(t("mainWindow.about.professional_fumigation")) }
                    </h1>
                </AppearanceAnimation>
            </div>

            <Zipper className={styles.zipper} />

            <AboutMainElement />
        </div>
    );
}

export default AboutMain;