import { useEffect, useState, forwardRef, useImperativeHandle, useRef } from "react";
import styles from "../../styles/Window.module.css";
import { IWindowProps } from "../../types.ts";
import { useInView } from "react-intersection-observer";
import { transitionTo } from "../../scripts/appWrapperScripts.ts";

const Window = forwardRef<HTMLDivElement, IWindowProps>(({ id, children, sticky = false, className = "" }, ref) => {
    
    const [height, setHeight] = useState<number>(() => {
        const innerHeight = window.innerHeight;
        return innerHeight <= 0 ? 300 : innerHeight;
    });
  
    const { ref: inViewRef, inView } = useInView({
        triggerOnce: false,
        threshold: 0.25,
    });
  
    const localRef = useRef<HTMLDivElement | null>(null);
  
    useImperativeHandle(ref, () => localRef.current!);
  
    useEffect(() => {
        window.addEventListener("resize", handleResize);
    
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => { 
        if (sticky) {
            if (inView) {
                if (window.innerWidth > 768) {
                    transitionTo(id);
                } 
            }
        }
    }, [inView]);

    const handleResize = () => {
        setHeight(window.innerHeight);
    };

    const combineRefs = (node: HTMLDivElement | null) => {
        inViewRef(node);
        localRef.current = node;
        if (ref && typeof ref === "function") {
            ref(node);
        }
    }
  
    return (
        <div ref={combineRefs} id={id} className={`${styles.window} ${className}`} style={{ minHeight: height }}>
            {children}
        </div>
    );
});
  
export default Window;