import { FC, useEffect, useState } from "react";
import styles from "../styles/Window.module.css";
import { IWindowProps } from "../Types.ts";

const Window: FC<IWindowProps> = ({ id, children }) => {
    const [height, setHeight] = useState<number>(() => {
        const innerHeight = window.innerHeight;

        return innerHeight <= 0 ? 300 : innerHeight;
    });

    useEffect(() => {
        window.addEventListener("resize", () => setHeight(window.innerHeight));

        return () => {
            window.removeEventListener("resize", () => setHeight(window.innerHeight));
        };
    }, []);

    return (
        <div id={id} className={styles.window} style={{ minHeight: height }}>
            {children}
        </div>
    );
};

export default Window;