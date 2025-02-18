import { FC, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useSpring, animated, easings } from "@react-spring/web";
import { ICounterProps } from "../../types.ts";

const Counter: FC<ICounterProps> = ({ min, max, textAfter, timeout = 250, className }) => {

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const [props, api] = useSpring(() => ({ 
        number: 0,
        from: { number: 0 }, 
        config: { duration: 2500, easing: easings.easeInOutExpo }
    }), []);

    useEffect(() => {
        if (inView) {
            setTimeout(() => api.start({ number: max, from: { number: min } }), timeout);
        }
    }, [inView]);

    return (
        <animated.div ref={ref} className={className}>
            { props.number.to(n => n.toFixed(0) + (textAfter ? textAfter : new String())) }
        </animated.div>
    );
}

export default Counter;