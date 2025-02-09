import { FC, useEffect, useRef, useState } from "react";
import { IServiceProps } from "../../types.ts";
import styles from "../../styles/Services.module.css";
import { addLineBreaks, getStaticFile, onServiceHover, trimWithDots } from "../../scripts/servicesScripts.ts";
import { Arrow } from "../general/Svgs.tsx";
import { useInView } from "react-intersection-observer";
import Modal from "./Modal.tsx";
import { useSpring, animated, config } from "@react-spring/web";

const Service: FC<IServiceProps> = (args) => {

    const [isMobile, setIsMobile] = useState<boolean>(() => window.innerWidth > 768 ? false : true);

    const containerRef = useRef<HTMLDivElement | null>(null);

    const { ref, inView } = useInView({ 
        triggerOnce: true, 
        threshold: 0.2 
    });

    const fadeInAnimation = useSpring({
        opacity: inView ? 1 : 0.5,
        transform: inView ? "scale(1)" : "scale(0.8)",
        config: { tension: 220, friction: 20 },
        delay: inView ? 250 : 0,
        duration: 500
    });

    const [{ xys }, api] = useSpring(() => ({ xys: [0, 0, 1], config }), [config])

    const handleMouseLeave = () => api.start({ xys: [0, 0, 1] })

    const handleMouseMove = (e: any) => {
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();

            api.start({
                xys: calc(e.clientX, e.clientY, rect),
            })
        }
    }

    const calc = (x: number, y: number, rect: DOMRect) => [
        -(y - rect.top - rect.height / 2) / 75,
        (x - rect.left - rect.width / 2) / 75,
        1,
    ];
      
    const trans = (x: number, y: number, s: number) => 
        `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

    const onResize = () => setIsMobile(window.innerWidth > 768 ? false : true);

    useEffect(() => {
        window.addEventListener("resize", onResize);

        return () => {
            window.removeEventListener("resize", onResize);
        }; 
    }, []);

    return (
        <>
            <Modal 
                handleClose={args.closeModal}
                modalOpen={args.modalOpen}
                imgSrc={args.imgSrc}
                title={args.title}
                description={args.description}
                previousModalOpen={args.previousModalOpen}
                nextModalOpen={args.nextModalOpen} /> 

            <animated.div 
                ref={ref} 
                style={{ 
                    ...fadeInAnimation, 
                    transform: isMobile ? "" : xys.to(trans),
                    willChange: isMobile ? "" : "transform",
                }}
                onMouseLeave={handleMouseLeave}
                onMouseMove={handleMouseMove}>
                <div 
                    id={args.id}
                    ref={containerRef}
                    className={styles.serviceContainer}  
                    style={{ backgroundImage: `url(${getStaticFile(args.imgSrc)})` }}
                    onMouseEnter={() => onServiceHover(containerRef.current)}
                    onMouseLeave={() => onServiceHover(containerRef.current)}
                    onClick={args.thisModalOpen}>
                    <div className={styles.serviceFogging} />
                    <p className={styles.serviceText}>
                        {trimWithDots(args.description, 25)}
                    </p>
                    <h1 className={styles.serviceTitle}>
                        {addLineBreaks(args.title)}
                    </h1> 
                    <div className={styles.serviceButton}>
                        <Arrow className={styles.serviceButtonArrowSvg} />
                    </div>
                </div>
            </animated.div>
        </>
    );
}

export default Service;