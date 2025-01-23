import { FC, useEffect } from "react";
import styles from "../../styles/MainPage.module.css";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import { onChangeViewInAboutMainElement } from "../../scripts/mainPageScripts";

const AboutMainElement: FC = () => {

    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    const { t } = useTranslation();

    useEffect(() => { onChangeViewInAboutMainElement(inView); }, [inView]);

    return (
        <div ref={ref} className={styles.aboutTextItemsContainer}>
            <h2 className={styles.aboutTextItemText}>
                {t("mainWindow.about.grain_and_warehouse_protection")}
                <div className={styles.underlineAboutText} />
            </h2>

            <h2 className={styles.aboutTextItemText}>
                {t("mainWindow.about.export_cargo_processing")}
                <div className={styles.underlineAboutText} />
            </h2>

            <h2 className={styles.aboutTextItemText}>
                {t("mainWindow.about.pest_control_and_crop_preservation")}
                <div className={styles.underlineAboutText} />
            </h2>
        </div>
    );
}

export default AboutMainElement;