import { FC } from "react";
import styles from "../../styles/MainPage.module.css";
import { Zipper } from "../general/Svgs.tsx";
import AboutMainElement from "./AboutMainElement.tsx";
import { useTranslation } from "react-i18next";
import { removeLineBreak } from "../../scripts/mainPageScripts.ts";
import AnimationInView from "./AnimationInView.tsx";

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
                <AnimationInView delay={500} style={style}>
                    <h1 className={styles.aboutTextTitle}>
                        { window.innerWidth > 768 
                            ? t("mainWindow.about.professional_fumigation")
                            : removeLineBreak(t("mainWindow.about.professional_fumigation")) }
                    </h1>
                </AnimationInView>
            </div>

            <Zipper className={styles.zipper} />

            <AboutMainElement />
        </div>
    );
}

export default AboutMain;