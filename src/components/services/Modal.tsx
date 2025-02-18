import { AnimatePresence, motion } from "framer-motion";
import Backdrop from "./Backdrop.tsx";
import { FC, useEffect, useState } from "react";
import styles from "../../styles/Services.module.css";
import { getStaticFile } from "../../scripts/mainPageScripts.ts";
import { Arrow, Close } from "../general/Svgs.tsx";
import { 
    addLineBreaks, 
    onNextModalClick, 
    onPreviousModalClick, 
    onResizeModal, 
    parseServiceDescription 
} from "../../scripts/servicesScripts.ts";
import { IServiceModalProps } from "../../types.ts";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import Constants from "../../constants.ts";
import { copyToClipboard, transitionToTop } from "../../scripts/appWrapperScripts.ts";

const dropIn = { 
    hidden: {
        y: "-100vh",
    },
    visible: {
        y: "0",
        transition: {
            duration: 0.1,
            type: "spring",
            damping: 25,
            stiffness: 500,
        },
    },
    exit: {
        y: "100vh",
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
        
        return () => window.removeEventListener("resize", () => onResizeModal(setModalButtonDisplayPropery));
    }, []);

    const copyUrl = () => {
        copyToClipboard( 
            args.title,
            {
                title: <p className={styles.swalTitle}>{t("servicesWindow.modal.swalSuccessTitle")}</p>,
                icon: "success",
                background: "var(--color-modal-bg)",
                timer: 1250,
                showConfirmButton: false
            },
            {
                title: <p className={styles.swalTitle}>{t("servicesWindow.modal.swalErrorTitle")}</p>,
                icon: "error",
                background: "var(--color-modal-bg)",
                timer: 1250,
                showConfirmButton: false
            }
        );
    }

    return (
        <AnimatePresence
            initial={false}
            onExitComplete={() => null}>
            {args.modalOpen && 
                <Backdrop onClick={args.handleClose}>
                    <>
                      <div 
                          className={styles.nextModalButton}
                          style={{ 
                              display: args.previousModalOpen ? modalButtonDisplayPropery : "none",
                              left: "5%",
                              transform: "rotate(180deg) translateX(50%)"
                          }}
                          onClick={(e) => { e.stopPropagation(); onPreviousModalClick(args); }}>
                          <Arrow className={styles.nextModalArrowSvg} />
                      </div>

                      <div 
                        className={styles.nextModalButton}
                          style={{ 
                              display: args.nextModalOpen ? modalButtonDisplayPropery : "none",
                              right: "5%"
                          }}
                          onClick={(e) => { e.stopPropagation(); onNextModalClick(args); }}>
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
                                <h2 className={styles.modalCompanyName}>
                                    {Constants.COMPANY_NAME}
                                </h2>
                                <h3 className={styles.modalTitle}>
                                    {addLineBreaks(args.title?.length > 0 ? args.title.trim() : "Null")}
                                </h3>
                                <div className={styles.modalLine} />
                                <p className={styles.modalDescription}>
                                    {mainDescription}
                                </p>
                                <ul className={styles.modalDescriptionItemsContainer}>
                                    {descriptionItems.map((item, index) => 
                                        <li key={index} className={styles.modalDescriptionItem}>
                                            <div 
                                                className={styles.modalDescriptionItemSvg}
                                                style={{ backgroundImage: `url(${getStaticFile(Constants.SERVICES_PAGE_STAR_SVG)})` }} />
                                                
                                            {item}
                                        </li>)}
                                </ul>

                                <div className={styles.modalLinkContainer}>
                                    <div
                                        className={styles.modalShareSvg}
                                        onClick={copyUrl}
                                        style={{ backgroundImage: `url(${getStaticFile(Constants.SHARE_IMAGE)})` }} />

                                    <Link 
                                        to="/contacts" 
                                        className={styles.modalContactLink}
                                        onClick={() => transitionToTop()}>
                                        <div className={styles.modalContactContainer}>
                                            <div className={styles.modalContactButtonLine}>
                                                <div className={styles.modalContactButton}>
                                                    <Arrow className={styles.modalContactButtonArrowSvg} />
                                                </div>
                                            </div>
                                            <h2 className={styles.modalContactText}>{t("servicesWindow.modal.order")}</h2>
                                        </div> 
                                    </Link>
                                </div>

                                
                          </div>

                          <div className={styles.modalContainerShadow} />
                      </motion.div>
                    </>
                </Backdrop>}
        </AnimatePresence>
    );
};

export default Modal;