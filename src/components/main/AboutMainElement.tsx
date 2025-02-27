import { FC } from "react";
import styles from "../../styles/MainPage.module.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import { transitionTo } from "../../scripts/appWrapperScripts";
import Constants from "../../constants";
import { removeLineBreak } from "../../scripts/mainPageScripts";
import AppearanceAnimation from "../general/AppearanceAnimation";

const AboutMainElement: FC = () => {

    const { t } = useTranslation();

    const style = {
        width: "fit-content", 
        height: "fit-content", 
        display: "block", 
        position: "relative",
    };

    return (
        <div className={styles.aboutTextItemsContainer}>
            <AppearanceAnimation  
                initialPosition={Constants.BASE_APPEARANCE_ANIMATION.clone()}
                delay={window.innerWidth > 768 ? 1250 : 500} 
                style={style}>
                <Link 
                    to="/services" 
                    viewTransition 
                    onClick={() => transitionTo(Constants.SERVICES_PAGE_SERVICE_3_ID)}
                    className={styles.aboutTextItemText}>
                    { window.innerWidth > 768 
                        ? t("mainWindow.about.disinfection_of_granaries")
                        : removeLineBreak(t("mainWindow.about.disinfection_of_granaries")) }
                    <div className={styles.underlineAboutText} />
                </Link>
            </AppearanceAnimation>

            <AppearanceAnimation 
                initialPosition={Constants.BASE_APPEARANCE_ANIMATION.clone()}
                delay={window.innerWidth > 768 ? 1500 : 500} 
                style={style}>
                <Link 
                    to="/services"
                    viewTransition 
                    onClick={() => transitionTo(Constants.SERVICES_PAGE_SERVICE_8_ID)}
                    className={styles.aboutTextItemText}>
                    { window.innerWidth > 768 
                        ? t("mainWindow.about.pest_control")
                        : removeLineBreak(t("mainWindow.about.pest_control")) }
                    <div className={styles.underlineAboutText} />
                </Link>
            </AppearanceAnimation>

            <AppearanceAnimation 
                initialPosition={Constants.BASE_APPEARANCE_ANIMATION.clone()}
                delay={window.innerWidth > 768 ? 1750 : 500} 
                style={style}>
                <Link 
                    to="/services"
                    viewTransition 
                    onClick={() => transitionTo(Constants.SERVICES_PAGE_SERVICE_6_ID)}
                    className={styles.aboutTextItemText}>
                    { window.innerWidth > 768 
                        ? t("mainWindow.about.export_cargo_processing")
                        : removeLineBreak(t("mainWindow.about.export_cargo_processing")) }
                    <div className={styles.underlineAboutText} />
                </Link>
            </AppearanceAnimation>
        </div>
    );
}

export default AboutMainElement;