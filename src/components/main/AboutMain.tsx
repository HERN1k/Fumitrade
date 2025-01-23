import { FC, useEffect } from "react";
import styles from "../../styles/MainPage.module.css";
import { useInView } from "react-intersection-observer";
import { Zipper } from "../general/Svgs.tsx";
import AboutMainElement from "./AboutMainElement.tsx";
import { useTranslation } from "react-i18next";
import { onChangeViewInAboutMain } from "../../scripts/mainPageScripts.ts";

const AboutMain: FC = () => {

    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    const { t } = useTranslation();

    useEffect(() => onChangeViewInAboutMain(inView), [inView]);

    return (
        <div className={styles.aboutTextContainer}>
            <div ref={ref} className={styles.aboutTextTitleContainer}>
                <h1 className={styles.aboutTextTitle}>
                    {t("mainWindow.about.professional_fumigation_and_pest_control")}
                </h1>
            </div>

            <Zipper className={styles.zipper} />

            <AboutMainElement />
        </div>
    );
}

export default AboutMain;