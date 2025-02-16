import { FC } from "react";
import { motion } from "framer-motion";
import styles from "../../styles/Services.module.css";
import { IServiceModalBackdropProps } from "../../types.ts";

const Backdrop: FC<IServiceModalBackdropProps> = ({ children, onClick }) => {
    return (
        <motion.div
            onClick={onClick}
            className={styles.modalBackdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            {children}
        </motion.div>
    );
};

export default Backdrop;