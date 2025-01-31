import { FC, useEffect, useRef } from "react";
import MainWindow from "../components/main/MainWindow.tsx";
import { IPageProps } from "../types.ts";
import DescriptionWindow from "../components/main/DescriptionWindow.tsx";
import TrustUsWindow from "../components/main/TrustUsWindow.tsx";
import Constants from "../constants.ts";
import { motion, useSpring, useScroll } from "motion/react";

const Main: FC<IPageProps> = ({ id }) => {

    const rootElementRef = useRef<HTMLDivElement | null>(null);

    const { scrollYProgress } = useScroll({container: rootElementRef});

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    useEffect(() => {
        rootElementRef.current = document.getElementById(Constants.ROOT_CONTAINER_ID) as HTMLDivElement;
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

            {/* <TrustUsWindow /> */}
        </div>
    );
}

export default Main;