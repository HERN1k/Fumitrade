import { AnimatePresence, motion } from "framer-motion";
import Backdrop from "./Backdrop.tsx";
import { FC, useEffect, useState } from "react";
import styles from "../../styles/Services.module.css";
import { getStaticFile } from "../../scripts/mainPageScripts.ts";
import { Arrow, Close } from "../general/Svgs.tsx";
import Smoke from "./Smoke.tsx";
import { addLineBreaks, onNextModalClick, onPreviousModalClick, onResizeModal, parseServiceDescription } from "../../scripts/servicesScripts.ts";
import { IServiceModalProps } from "../../types.ts";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";

const dropIn = {
    hidden: {
        y: "-100vh",
        opacity: 0,
    },
    visible: {
        y: "0",
        opacity: 1,
        transition: {
            duration: 0.1,
            type: "spring",
            damping: 25,
            stiffness: 500,
        },
    },
    exit: {
        y: "100vh",
        opacity: 0,
    },
};

const Modal: FC<IServiceModalProps> = (args) => {

    const [mainDescription, setMainDescription] = useState<string>("Null");
    const [descriptionItems, setDescriptionItems] = useState<string[]>(new Array<string>("Null"));
    const [modalButtonDisplayPropery, setModalButtonDisplayPropery] = useState<string>("flex");

    const { t } = useTranslation();
    
    useEffect(() => { 
        var description = args.description;

        parseServiceDescription({ 
            description, 
            setMainDescription, 
            setDescriptionItems 
        });

        onResizeModal(setModalButtonDisplayPropery);

        window.addEventListener("resize", () => onResizeModal(setModalButtonDisplayPropery));
        
        return () => {
            window.removeEventListener("resize", () => onResizeModal(setModalButtonDisplayPropery));
        }; 
    }, []);

    return (
        <AnimatePresence
            initial={false}
            onExitComplete={() => null}>
            {args.modalOpen && 
                <Backdrop onClick={args.handleClose}>
                    <>
                      <Smoke />

                      <div 
                          className={styles.nextModalButton}
                          style={{ 
                              display: args.previousServiceModalSetter ? modalButtonDisplayPropery : "none",
                              left: "5%",
                              transform: "rotate(180deg) translateX(50%)"
                          }}
                          onClick={() => onPreviousModalClick(args)}>
                          <Arrow className={styles.nextModalArrowSvg} />
                      </div>

                      <div 
                        className={styles.nextModalButton}
                          style={{ 
                              display: args.nextServiceModalSetter ? modalButtonDisplayPropery : "none",
                              right: "5%"
                          }}
                          onClick={() => onNextModalClick(args)}>
                          <Arrow className={styles.nextModalArrowSvg} />
                      </div>

                      <motion.div
                          onClick={(e) => e.stopPropagation()}
                          className={styles.modalContainer}
                          variants={dropIn}
                          initial="hidden"
                          animate="visible"
                          exit="exit">
                          <Close onClick={args.handleClose} className={styles.modalCloseSvg} />

                          <div 
                              className={styles.modalImage}
                              style={{ backgroundImage: `url(${getStaticFile(args.imgSrc)})` }} />

                          <div className={styles.modalContent}>
                              <h1 className={styles.modalTitle}>
                                  {addLineBreaks(args.title?.length > 0 ? args.title.trim() : "Null")}
                              </h1>
                              <p className={styles.modalDescription}>
                                  {mainDescription}
                              </p>
                              <ul className={styles.modalDescriptionItemsContainer}>
                                  {descriptionItems.map((item, index) => 
                                      <li key={index} className={styles.modalDescriptionItem}>{item}</li>)}
                              </ul>

                              <Link to="/">
                                  <div className={styles.modalContactContainer}>
                                      <h2 className={styles.modalContactText}>{t("servicesWindow.modal.order")}</h2>
                                      <div className={styles.modalContactButton}>
                                          <Arrow className={styles.modalContactButtonArrowSvg} />
                                      </div>
                                  </div>
                              </Link>
                          </div>
                      </motion.div>
                    </>
                </Backdrop>}
        </AnimatePresence>
    );
};

export default Modal;