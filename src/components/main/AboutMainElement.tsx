import { FC, useEffect } from "react";
import styles from "../../styles/MainPage.module.css";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import { onChangeViewInAboutMainElement, removeLineBreak } from "../../scripts/mainPageScripts";

const AboutMainElement: FC = () => {

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const { t } = useTranslation();

    useEffect(() => { onChangeViewInAboutMainElement(inView); }, [inView]);

    return (
        <div ref={ref} className={styles.aboutTextItemsContainer}>
            <div className={styles.aboutTextItemText}>
                { window.innerWidth > 768 
                ? t("mainWindow.about.disinfection_of_granaries")
                : removeLineBreak(t("mainWindow.about.disinfection_of_granaries")) }
                <div className={styles.underlineAboutText} />
            </div>

            <div className={styles.aboutTextItemText}>
                { window.innerWidth > 768 
                ? t("mainWindow.about.pest_control")
                : removeLineBreak(t("mainWindow.about.pest_control")) }
                <div className={styles.underlineAboutText} />
            </div>

            <div className={styles.aboutTextItemText}>
                { window.innerWidth > 768 
                ? t("mainWindow.about.export_cargo_processing")
                : removeLineBreak(t("mainWindow.about.export_cargo_processing")) }
                <div className={styles.underlineAboutText} />
            </div>
        </div>
    );
}

export default AboutMainElement;