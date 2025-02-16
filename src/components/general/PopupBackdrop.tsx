import { FC } from "react";
import { motion } from "framer-motion";
import { IPopupBackdropProps } from "../../types";
import styles from "../../styles/Popup.module.css";

const PopupBackdrop: FC<IPopupBackdropProps> = ({ children, onClick }) => {
    return (
        <motion.div
            onClick={onClick}
            className={styles.backdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            {children}
        </motion.div>
    );
}

export default PopupBackdrop; 