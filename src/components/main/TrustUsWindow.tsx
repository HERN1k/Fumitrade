import { FC, useEffect } from "react";
import Window from "../general/Window.tsx";
import styles from "../../styles/MainPage.module.css";
import { useInView } from "react-intersection-observer";
import Constants from "../../constants.ts";
import SwiperTrustUs from "./SwiperTrustUs.tsx";
import { getStaticFile, onChangeViewInTrustUsWindow } from "../../scripts/mainPageScripts.ts";
import { useTranslation } from "react-i18next";

const TrustUsWindow: FC = () => {

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const { t } = useTranslation();

    useEffect(() => onChangeViewInTrustUsWindow(inView), [inView]);

    return (
        <Window id={Constants.TRUST_US_WINDOW_MAIN_PAGE_ID}>
            <div className={styles.trustUsContainer}>
                <div className={styles.trustUsImg} style={{backgroundImage: `url(${getStaticFile(Constants.MAIN_PAGE_TRUST_US_IMAGE)})`}} />

                <div className={styles.trustUsContentContainer}>
                    <SwiperTrustUs />
                    
                    <div>
                        <h2>Нам довіряють</h2>
                        <p ref={ref} className={styles.trustUsText}>{t("trustUsWindow.we_are_trusted_text")}</p>
                    </div>
                </div>
            </div>
        </Window>
    );
}

export default TrustUsWindow;