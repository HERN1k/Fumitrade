import { FC, useRef, useEffect, useState, RefObject } from "react";
import styles from "../../styles/Services.module.css";
import { getStaticFile, onScrollServicesHeader, servicesWindowInView } from "../../scripts/servicesScripts.ts";
import Constants from "../../constants.ts";
import { useTranslation } from "react-i18next";
import { motion, useSpring, useScroll } from "motion/react";
import { useInView } from "react-intersection-observer";

const ServicesHeader: FC = () => {

    const rootElementRef = useRef<HTMLElement | null>(null);
    const [containerRef, setContainerRef] = useState<RefObject<HTMLElement | null> | null>(null);

    useEffect(() => {
        rootElementRef.current = document.getElementById(Constants.ROOT_CONTAINER_ID) as HTMLElement;

        setContainerRef({ current: rootElementRef.current });

        (document.getElementById(Constants.ROOT_CONTAINER_ID))?.addEventListener("scroll", onScrollServicesHeader);

        return () => {
            (document.getElementById(Constants.ROOT_CONTAINER_ID))?.removeEventListener("scroll", onScrollServicesHeader);
        }; 
    }, []);

    const { scrollYProgress } = useScroll(containerRef ? { container: containerRef } : {});

    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    const { t } = useTranslation();

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });
    
    useEffect(() => { servicesWindowInView(inView) }, [inView]);

    return (
        <>
            <motion.div
                id="scroll-indicator"
                style={{
                    scaleX,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: Constants.SCROLL_DISPLAY_BAR_HEIGHT,
                    originX: 0,
                    zIndex: 122,
                    backgroundColor: "var(--color-secondary)"
                }}
            />

            <div ref={ref} className={styles.headerContainer} style={{ backgroundImage: `url(${getStaticFile(Constants.SERVICES_HEADER_IMAGE)})` }}>
                <h1 className={styles.navigationTitle}>
                    {t("servicesWindow.reliable_solutions_for_your_business")}
                </h1>
                <p className={styles.navigationText}>
                    {t("servicesWindow.we_offer_comprehensive_pest_control_solutions")}
                </p>
            </div>
        </>
    );
}

export default ServicesHeader;