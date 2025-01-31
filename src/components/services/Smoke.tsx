import { FC, useEffect, useMemo, useState } from "react";
import { SmokeScene } from "react-smoke";
import styles from "../../styles/Services.module.css";
import * as THREE from "three";

const Smoke: FC = () => {

    const [opacity, setOpacity] = useState<number>(0);

    const smokeColor = useMemo(() => new THREE.Color("rgb(255, 255, 255)"), []);
    const transparentColor = useMemo(() => new THREE.Color("rgb(0, 0, 0)"), []);

    useEffect(() => { setTimeout(() => setOpacity(0.5), 250) }, []);

    return (
        <div 
            className={styles.smokeContainer}
            style={{ opacity: opacity }}>
            <SmokeScene
                scene={{
                    background: transparentColor
                }}
                smoke={{
                    color: smokeColor,
                    density: 25,
                    enableRotation: true,
                    opacity: 1
                }} />
        </div>
    );
};

export default Smoke;