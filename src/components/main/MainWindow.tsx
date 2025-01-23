import { FC, useEffect, useRef } from "react";
import Constants from "../../constants.ts";
import Window from "../general/Window.tsx";
import styles from "../../styles/MainPage.module.css";
import Typed from "typed.js";
import { useInView } from "react-intersection-observer";
import { createTyped, destroyTyped, getStaticFile } from "../../scripts/mainPageScripts.ts";
import AboutMain from "./AboutMain.tsx";
import { useTranslation } from "react-i18next";

const MainWindow: FC = () => {

    const typedRef = useRef<HTMLDivElement | null>(null);
    const typed = useRef<Typed | null>(null);
    
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    const { t } = useTranslation();

    useEffect(() => {
        if (inView) {
            createTyped({
                typed: typed,
                typedRef: typedRef,
                strings: [
                    t("mainWindow.typedStrings.fumigation_without_compromise"),
                    t("mainWindow.typedStrings.30 years_on_the_market"),
                    t("mainWindow.typedStrings.experience_reliability_efficiency"),
                ]
            });
        } else {
            destroyTyped(typed);
        } 

        return () => destroyTyped(typed);   
    }, [inView]);

    return (
        <Window id={Constants.MAIN_WINDOW_MAIN_PAGE_ID}> 
            <div className={styles.mainPageContainer} ref={ref}>
                <div className={styles.mainPageImage} style={{backgroundImage: `url(${getStaticFile(Constants.MAIN_PAGE_MAIN_IMAGE)})`}} />
                
                <div className={styles.sloganText}>
                    <span ref={typedRef} />
                </div> 

                <AboutMain />
            </div>
        </Window>
    );
}

export default MainWindow;