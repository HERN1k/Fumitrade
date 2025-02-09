import { FC, RefObject, useEffect, useRef, useState } from "react";
import MainWindow from "../components/main/MainWindow.tsx";
import { IPageProps } from "../types.ts";
import DescriptionWindow from "../components/main/DescriptionWindow.tsx";
import Constants from "../constants.ts";
import { motion, useSpring, useScroll } from "motion/react";
import { useTranslation } from "react-i18next";
import CountersWindow from "../components/main/CountersWindow.tsx";
import TrustUsWindow from "../components/main/TrustUsWindow.tsx";
import ServicesWindow from "../components/main/ServicesWindow.tsx";

const Main: FC<IPageProps> = ({ id }) => {

    const rootElementRef = useRef<HTMLElement | null>(null);
    const [containerRef, setContainerRef] = useState<RefObject<HTMLElement | null> | null>(null);

    useEffect(() => {
        rootElementRef.current = document.getElementById(Constants.ROOT_CONTAINER_ID) as HTMLElement;

        setContainerRef({ current: rootElementRef.current });
    }, []);

    const { scrollYProgress } = useScroll(containerRef ? { container: containerRef } : {});

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    const { t } = useTranslation();

    useEffect(() => { 
        document.title = t("appWrapper.documentTitles.main");
    }, []);

    return (
        <div id={id}>
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
                    backgroundColor: "var(--color-secondary)",
                }} />

            <MainWindow />
 
            <DescriptionWindow />

            <ServicesWindow />

            <CountersWindow />

            <TrustUsWindow />
        </div>
    );
}

export default Main;