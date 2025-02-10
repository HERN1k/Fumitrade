import { FC, ReactNode, useEffect, useState } from "react";
import Window from "../general/Window.tsx";
import Constants from "../../constants.ts";
import Counter from "./Counter.tsx";
import styles from "../../styles/MainPage.module.css"
import { useTranslation } from "react-i18next";
import { LineChart, ResponsiveContainer, Line, CartesianGrid } from "recharts";
import { useInView } from "react-intersection-observer";
import { chartData, halfArray } from "../../scripts/mainPageScripts.ts";
import AppearanceAnimation from "../general/AppearanceAnimation.tsx";

const CountersWindow: FC = () => {

    const [charts, setCharts] = useState<ReactNode | null>(null);

    const { t } = useTranslation();

    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.9 });

    useEffect(() => {
        onResizeOrInView();

        window.addEventListener("resize", onResizeOrInView);
        
        return () => {
            window.removeEventListener("resize", onResizeOrInView);
        };
    }, [inView]);

    const onResizeOrInView = () => {
        if (inView) {
            setCharts(
                <ResponsiveContainer width="100%" height={window.innerWidth > 768 ? "80%" : "100%"} className={styles.countersCharts}>
                    <LineChart data={window.innerWidth > 768 ? chartData : halfArray(chartData)}>
                        <Line type="monotone" dataKey="x" stroke="#dcb426" strokeWidth={1} />
                        <Line type="monotone" dataKey="y" stroke="#dcb426" strokeWidth={1} />
                        <CartesianGrid strokeDasharray="3 3" />
                    </LineChart>
                </ResponsiveContainer>
            );
        } else {
            setCharts(null);
        }
    }

    return (
        <Window id={Constants.COUNTERS_WINDOW_MAIN_PAGE_ID} sticky className={styles.countersWindow}>
            { charts }

            <AppearanceAnimation 
                initialPosition={Constants.BASE_APPEARANCE_ANIMATION.clone()}
                delay={500} 
                style={{ height: "fit-content" }}>
                <h2 className={styles.countersTitle}>
                    {t("countersWindow.we_are_in_numbers")}
                </h2>
            </AppearanceAnimation>

            <AppearanceAnimation 
                initialPosition={Constants.BASE_APPEARANCE_ANIMATION.clone()}
                delay={500} 
                style={{ height: "fit-content" }} 
                threshold={0.5}>
                <div className={styles.countersContent}>
                    <div className={styles.counterContainer}>
                        <p className={styles.counterTitle}>
                            {t("countersWindow.years_on_the_market")}
                        </p>

                        <Counter 
                            min={0} 
                            max={30} 
                            timeout={1250}
                            className={styles.counterNumbers} />
                    </div>


                    <div className={styles.counterContainer}>
                        <p className={styles.counterTitle}>
                            {t("countersWindow.we_have_processed")}
                        </p>

                        <Counter 
                            min={0} 
                            max={205400} 
                            timeout={1250}
                            textAfter=" т."
                            className={styles.counterNumbers} />
                    </div>

                    <div className={styles.counterContainer}>
                        <p className={styles.counterTitle}>
                            {t("countersWindow.regular_customers")}
                        </p>

                        <Counter 
                            min={0} 
                            max={40} 
                            timeout={1250}
                            textAfter="+"
                            className={styles.counterNumbers} />
                    </div>

                    <div ref={ref} className={styles.counterContainer}>
                        <p className={styles.counterTitle}>
                            {t("countersWindow.percentage_of_successful_treatments")}
                        </p>

                        <Counter 
                            min={0} 
                            max={98} 
                            timeout={1250}
                            textAfter="%"
                            className={styles.counterNumbers} />
                    </div>

                    <div className={styles.counterContainer}>
                        <p className={styles.counterTitle}>
                            {t("countersWindow.eco_friendly_solutions")}
                        </p>

                        <Counter 
                            min={0} 
                            max={20} 
                            timeout={1500}
                            textAfter="+"
                            className={styles.counterNumbers} />
                    </div>

                    <div className={styles.counterContainer}>
                        <p className={styles.counterTitle}>
                            {t("countersWindow.percentage_of_satisfied_customers")}
                        </p>

                        <Counter 
                            min={0} 
                            max={100} 
                            timeout={1250}
                            textAfter="%"
                            className={styles.counterNumbers} />
                    </div>
                </div>
            </AppearanceAnimation>
        </Window>
    );
}

export default CountersWindow;