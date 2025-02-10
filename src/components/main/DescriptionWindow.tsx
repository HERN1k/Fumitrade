import { FC } from "react";
import Window from "../general/Window.tsx";
import styles from "../../styles/MainPage.module.css";
import { Link } from "react-router";
import Constants from "../../constants.ts";
import { getStaticFile } from "../../scripts/mainPageScripts.ts";
import { useTranslation } from "react-i18next";
import { Arrow } from "../general/Svgs.tsx";
import AppearanceAnimation from "../general/AppearanceAnimation.tsx";

const DescriptionWindow: FC = () => {

    const { t } = useTranslation();

    const style = {
        width: "100%", 
        height: "100%", 
        display: "block", 
        position: "relative",
    };

    return (
        <Window id={Constants.DESCRIPTION_WINDOW_MAIN_PAGE_ID} sticky>
            <div 
                className={styles.mainPageImageDescription} 
                style={{backgroundImage: `url(${getStaticFile(Constants.MAIN_PAGE_DESCRIPTION_IMAGE)})`}} />
            
            <div className={styles.descriptionContainer}>
                <div className={styles.descriptionTextContainer}>
                    <AppearanceAnimation 
                        initialPosition={Constants.BASE_APPEARANCE_ANIMATION.clone()}
                        delay={500} 
                        style={style}>
                        <h1 className={styles.descriptionTitle}>{t("descriptionWindow.title")}</h1>
                    </AppearanceAnimation> 

                    <AppearanceAnimation 
                        initialPosition={Constants.BASE_APPEARANCE_ANIMATION.clone()}
                        delay={500} 
                        style={style}>
                        <p className={styles.descriptionText}>{t("descriptionWindow.text")}</p>
                    </AppearanceAnimation>
                </div>

                <AppearanceAnimation 
                    initialPosition={Constants.BASE_APPEARANCE_ANIMATION.clone()}
                    delay={500} 
                    style={style}>
                    <Link to="/about">
                        <div className={styles.learnMoreContainer}>
                            <div className={styles.learnMoreButton}>
                                <Arrow className={styles.learnMoreButtonArrowSvg} />
                            </div>
                            <h2 className={styles.learnMoreText}>{t("descriptionWindow.button")}</h2>
                        </div>
                    </Link>
                </AppearanceAnimation>
            </div>
        </Window>
    );
}

export default DescriptionWindow;