import { useEffect, useState, forwardRef } from "react";
import styles from "../../styles/Window.module.css";
import { IWindowProps } from "../../types.ts";

const Window = forwardRef<HTMLDivElement, IWindowProps>(({ id, children, sticky = false, className = "" }, ref) => {
    
    const [height, setHeight] = useState<number>(() => {
        const innerHeight = window.innerHeight;
        return innerHeight <= 0 ? 300 : innerHeight;
    });
  
    useEffect(() => {
        window.addEventListener("resize", handleResize);
    
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleResize = () => {
        setHeight(window.innerHeight);
    };

    return (
        <div ref={ref} id={id} className={`${styles.window} ${className}`} style={{ minHeight: height }}>
            {children}
        </div>
    );
});
  
export default Window;