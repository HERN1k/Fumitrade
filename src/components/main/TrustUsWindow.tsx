import { FC } from "react";
import Window from "../general/Window.tsx";
import Constants from "../../constants.ts";
import styles from "../../styles/MainPage.module.css";
import SwiperTrustUs from "./SwiperTrustUs.tsx";
import { useTranslation } from "react-i18next";
import { getStaticFile } from "../../scripts/mainPageScripts.ts";
import AppearanceAnimation from "../general/AppearanceAnimation.tsx";

const TrustUsWindow: FC = () => {

    const { t } = useTranslation();

    return (
        <Window id={Constants.TRUST_US_WINDOW_MAIN_PAGE_ID} sticky className={styles.trustUsWindow}>
            <div 
                className={styles.trustUsBG}
                style={{backgroundImage: `url(${getStaticFile(Constants.MAIN_PAGE_TRUST_US_IMAGE)})`}} />

            <AppearanceAnimation 
                initialPosition={Constants.BASE_APPEARANCE_ANIMATION.clone()}
                delay={500} 
                style={{ 
                    height: "fit-content", 
                    marginTop: window.innerWidth > 767 ? "5rem" : "2rem"
                }}>
                <h2 className={styles.trustUsTitle}>
                    {t("trustUsWindow.we_are_trusted_title_1")}
                    <span className={styles.trustUsSpan}>
                        {t("trustUsWindow.we_are_trusted_title_2")}
                    </span>
                    {t("trustUsWindow.we_are_trusted_title_3")}
                </h2>
            </AppearanceAnimation> 

            <AppearanceAnimation 
                initialPosition={Constants.BASE_APPEARANCE_ANIMATION.clone()}
                delay={500} 
                style={{ 
                    height: "fit-content",
                    marginBottom: "3rem"
                }}>
                <SwiperTrustUs />
            </AppearanceAnimation>
        </Window>
    );
}

export default TrustUsWindow;