import { FC } from "react";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";
import { IAnimationInViewProps } from "../../types";

const AnimationInView: FC<IAnimationInViewProps> = ({ children, delay, style, threshold = 0.2, duration = 0.25 }) => {

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: threshold,
    });

    const fadeInAnimation = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(2rem)",
        config: { tension: 220, friction: 20, duration: duration * 1000 },
        delay: inView ? delay : 0
    });

    return (
        <animated.div ref={ref} style={{ ...style, ...fadeInAnimation }}>
            { children }
        </animated.div>
    );
}

export default AnimationInView;