import { FC, useEffect, useMemo, useState } from "react";
import { SmokeScene } from "react-smoke";
import styles from "../../styles/Services.module.css";
import * as THREE from "three";

const Smoke: FC<{ inView: boolean }> = ({ inView }) => {

    const [opacity, setOpacity] = useState<number>(0);
    const [zIndex, setZIndex] = useState<number>(-1000);

    const smokeColor = useMemo(() => new THREE.Color("rgb(255, 255, 255)"), []);
    const transparentColor = useMemo(() => new THREE.Color("rgb(15, 24, 34)"), []);

    useEffect(() => { inView ? on() : off() }, [inView]);

    const on = () => {
        setZIndex(1000);
        setTimeout(() => setOpacity(0.75), 50);
    }

    const off = () => {
        setOpacity(0);
        setTimeout(() => setZIndex(-1000), 50);
    }

    return (
        <div 
            className={styles.smokeContainer}
            style={{ opacity: opacity, zIndex: zIndex }}>
            <SmokeScene
                scene={{
                    background: transparentColor
                }}
                smoke={{
                    color: smokeColor,
                    density: 50,
                    enableRotation: true,
                    enableTurbulence: true,
                    opacity: 1
                }} />
        </div>
    );
};

export default Smoke;