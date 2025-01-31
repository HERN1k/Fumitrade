import { FC, useEffect, useRef } from "react";
import { IServiceProps } from "../../types.ts";
import styles from "../../styles/Services.module.css";
import { addLineBreaks, getStaticFile, onServiceHover, serviceInView, trimWithDots } from "../../scripts/servicesScripts.ts";
import { Arrow } from "../general/Svgs.tsx";
import { useInView } from "react-intersection-observer";
import Modal from "./Modal.tsx";

const Service: FC<IServiceProps> = (args) => {
    const containerRef = useRef<HTMLDivElement | null>(null);

    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    useEffect(() => serviceInView(inView, containerRef.current), [inView]);

    const close = () => args.thisServiceModalSetter(false);
    const open = () => args.thisServiceModalSetter(true);

    return (
        <>
            <Modal 
                handleClose={close}
                modalOpen={args.modalOpen}
                imgSrc={args.imgSrc}
                title={args.title}
                description={args.description}
                previousServiceModalSetter={args.previousServiceModalSetter}
                nextServiceModalSetter={args.nextServiceModalSetter} />

            <div 
                id={args.id}
                ref={containerRef}
                className={styles.serviceContainer}  
                style={{ backgroundImage: `url(${getStaticFile(args.imgSrc)})` }}
                onMouseEnter={() => onServiceHover(containerRef.current)}
                onMouseLeave={() => onServiceHover(containerRef.current)}
                onClick={() => (args.modalOpen ? close() : open())}>
                <div ref={ref} className={styles.serviceFogging} />
                <h1 className={styles.serviceTitle}>
                    {addLineBreaks(args.title)}
                </h1>
                <p className={styles.serviceText}>
                    {trimWithDots(args.description, 50)}
                </p>
                <div className={styles.serviceButton}>
                    <Arrow className={styles.serviceButtonArrowSvg} />
                </div>
            </div>
        </>
    );
}

export default Service;