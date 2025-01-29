import { FC, useEffect, useRef, useState } from "react";
import { IServiceProps } from "../../types.ts";
import styles from "../../styles/Services.module.css";
import { addLineBreaks, getStaticFile, onServiceHover, serviceInView, trimWithDots } from "../../scripts/servicesScripts.ts";
import { Arrow } from "../general/Svgs.tsx";
import { useInView } from "react-intersection-observer"
import { AnimatePresence } from "framer-motion";
import Modal from "./Modal.tsx";

const Service: FC<IServiceProps> = ({ id, imgSrc, title, description }) => {

    const [descriptionMaxLength, setDescriptionMaxLength] = useState<number>(28);

    const [modalOpen, setModalOpen] = useState<boolean>(false);

    const containerRef = useRef<HTMLDivElement | null>(null);

    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    useEffect(() => serviceInView(inView, containerRef.current), [inView]);

    const close = () => setModalOpen(false);
    const open = () => setModalOpen(true);

    return (
        <>
            <AnimatePresence
                initial={false}
                onExitComplete={() => null}>
                {modalOpen && 
                    <Modal handleClose={close} children={
                        <div>
                            <img src={getStaticFile(imgSrc)} style={{height: "5rem"}} />
                            <h1>{title}</h1>
                            <p>{description}</p>
                            <button onClick={close}>X</button>
                        </div>
                    }/>}
            </AnimatePresence>

            <div 
                id={id}
                ref={containerRef}
                className={styles.serviceContainer}  
                style={{ backgroundImage: `url(${getStaticFile(imgSrc)})` }}
                onMouseEnter={() => onServiceHover(containerRef.current)}
                onMouseLeave={() => onServiceHover(containerRef.current)}
                onClick={() => (modalOpen ? close() : open())}>
                <div ref={ref} className={styles.serviceFogging} />
                <h1 className={styles.popupTitle}>
                    {addLineBreaks(title)}
                </h1>
                <p className={styles.popupText}>
                    {trimWithDots(description, descriptionMaxLength)}
                </p>
                <div className={styles.popupButton}>
                    <Arrow className={styles.popupButtonArrowSvg} />
                </div>
            </div>
        </>
    );
}

export default Service;