import { FC, useEffect } from "react";
import Window from "../general/Window.tsx";
import styles from "../../styles/MainPage.module.css";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router";
import Constants from "../../constants.ts";
import { getStaticFile, onChangeViewInDescriptionWindow } from "../../scripts/mainPageScripts.ts";
import { useTranslation } from "react-i18next";
import { Arrow } from "../general/Svgs.tsx";

const DescriptionWindow: FC = () => {

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const { t } = useTranslation();

    useEffect(() => { onChangeViewInDescriptionWindow(inView) }, [inView]);

    return (
        <Window id={Constants.DESCRIPTION_WINDOW_MAIN_PAGE_ID} >
            <div className={styles.mainPageImageDescription} style={{backgroundImage: `url(${getStaticFile(Constants.MAIN_PAGE_DESCRIPTION_IMAGE)})`}} />
            
            <div ref={ref} className={styles.descriptionTextContainer}>
                <h2 className={styles.descriptionText} style={{textAlign: "center", transform: "translateX(100%)"}}>
                    <strong>
                        <span className={styles.span}><strong>{t("descriptionWindow.fumitrade")}</strong></span>
                        {" " + t("descriptionWindow.leaders_in_fumigation")}
                    </strong>
                </h2>
                <h2 className={styles.descriptionText} style={{transform: "translateX(-100%)"}}>
                    {t("descriptionWindow.operate_in_the_market_for_over") + " "}
                    <span className={styles.span}>{t("descriptionWindow.30_years")}</span>
                    {t("descriptionWindow.providing_the_best_fumigation_services")}
                </h2>
                <h2 className={styles.descriptionText} style={{transform: "translateX(100%)"}}>
                    <span className={styles.span}>{t("descriptionWindow.security")}</span>
                    {", "}
                    <span className={styles.span}>{t("descriptionWindow.efficiency")}</span>
                    {" " + t("descriptionWindow.and") + " "}
                    <span className={styles.span}>{t("descriptionWindow.innovations")}</span>
                    {" " + t("descriptionWindow.this_is_the_basis_of_our_activities")}
                </h2>

                <Link to="/">
                    <div className={styles.learnMoreContainer}>
                        <h2 className={styles.learnMoreText}>{t("descriptionWindow.learn_more_about_us")}</h2>
                        <div className={styles.learnMoreButton}>
                            <Arrow className={styles.learnMoreButtonArrowSvg} />
                        </div>
                    </div>
                </Link>
            </div>
        </Window>
    );
}

export default DescriptionWindow;