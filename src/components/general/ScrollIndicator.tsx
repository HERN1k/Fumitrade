import { FC, RefObject, useEffect, useRef, useState } from "react";
import Constants from "../../constants.ts";
import { motion, useSpring, useScroll } from "motion/react";

const ScrollIndicator: FC = () => {

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

    return (
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
    );
}

export default ScrollIndicator;