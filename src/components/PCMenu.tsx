import { FC } from "react";
import styles from "../styles/AppWrapper.module.css";
import { Link } from "react-router";

const PCMenu: FC = () => {
    return (
        <ul className={styles.menu}>
            <li className={styles.menuItem}>
                <Link to="/">
                    <h2 className={styles.menuText}>Послуги</h2>
                    <div className={styles.underline} />
                </Link>
            </li>
            <li className={styles.menuItem}>
                <Link to="/">
                    <h2 className={styles.menuText}>Про нас</h2>
                    <div className={styles.underline} />
                </Link>
            </li>
            <li className={styles.menuItem}>
                <Link to="/">
                    <h2 className={styles.menuText}>Безпека</h2>
                    <div className={styles.underline} />
                </Link>
            </li>
            <li className={styles.menuItem}>
                <Link to="/">
                    <h2 className={styles.menuText}>Контакти</h2>
                    <div className={styles.underline} />
                </Link>
            </li>
        </ul>
    );
};

export default PCMenu;