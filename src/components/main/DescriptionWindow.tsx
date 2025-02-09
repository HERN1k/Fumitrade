import { FC } from "react";
import Window from "../general/Window.tsx";
import styles from "../../styles/MainPage.module.css";
import { Link } from "react-router";
import Constants from "../../constants.ts";
import { getStaticFile } from "../../scripts/mainPageScripts.ts";
import { useTranslation } from "react-i18next";
import { Arrow } from "../general/Svgs.tsx";
import AnimationInView from "./AnimationInView.tsx";

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
                    <AnimationInView delay={500} style={style}>
                        <h1 className={styles.descriptionTitle}>{t("descriptionWindow.title")}</h1>
                    </AnimationInView> 

                    <AnimationInView delay={500} style={style}>
                        <p className={styles.descriptionText}>{t("descriptionWindow.text")}</p>
                    </AnimationInView>
                </div>

                <AnimationInView delay={500} style={style}>
                    <Link to="/about">
                        <div className={styles.learnMoreContainer}>
                            <div className={styles.learnMoreButton}>
                                <Arrow className={styles.learnMoreButtonArrowSvg} />
                            </div>
                            <h2 className={styles.learnMoreText}>{t("descriptionWindow.button")}</h2>
                        </div>
                    </Link>
                </AnimationInView>
            </div>
        </Window>
    );
}

export default DescriptionWindow;