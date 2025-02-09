import { RefObject, useEffect, useRef, useState } from "react";
import { useScroll } from "motion/react";
import { IUseScrollTrackerProps, IUseScrollTrackerResult } from "../../../types.ts";

const useScrollTracker = ({ scrollContainerId } : IUseScrollTrackerProps): IUseScrollTrackerResult => {

    const rootElementRef = useRef<HTMLElement | null>(null);
    const [containerRef, setContainerRef] = useState<RefObject<HTMLElement | null> | null>(null);
    const [scrollDir, setScrollDir] = useState<"up" | "down" | null>(null);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        if (scrollContainerId) {
            rootElementRef.current = document.getElementById(scrollContainerId) as HTMLElement | null;

            setContainerRef({ current: rootElementRef.current });
        }
    }, []);

    const { scrollY, scrollYProgress } = useScroll(containerRef ? { container: containerRef } : {});

    useEffect(() => {
        const handleScroll = () => {
            const currentY = scrollY.get();

            if (currentY > lastScrollY) {
                setScrollDir("down");
            } else if (currentY < lastScrollY) {
                setScrollDir("up");
            }

            setLastScrollY(currentY);
            setScrollProgress(scrollYProgress.get());
        };

        const interval = setInterval(handleScroll, 50);

        return () => clearInterval(interval);
    }, [scrollY, lastScrollY]);

    return { scrollDir, scrollProgress };
}

export default useScrollTracker;