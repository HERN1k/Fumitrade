import { FC } from "react";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";
import { IAppearanceAnimationProps } from "../../types.ts";

const AppearanceAnimation: FC<IAppearanceAnimationProps> = (args) => {
    
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: args.threshold ? args.threshold : 0.2,
    });

    const fadeInAnimation = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? args.initialPosition.getZero() : args.initialPosition.toString(),
        config: { tension: 220, friction: 20, duration: args.duration ? (args.duration * 1000) : 250 },
        delay: args.delay ? (inView ? args.delay : 0) : 0
    });

    return (
        <animated.div ref={ref} style={{ ...args.style, ...fadeInAnimation }}>
            { args.children }
        </animated.div>
    );
} 

export default AppearanceAnimation;