import { FC } from "react";
import styles from "../../styles/AppWrapper.module.css";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";

const PCMenu: FC = () => {

    const { t } = useTranslation();

    return (
        <ul className={styles.menu}>
            <li className={styles.menuItem}>
                <Link to="/">
                    <h2 className={styles.menuText}>{t("appWrapper.menu.services")}</h2>
                    <div className={styles.underline} />
                </Link>
            </li>
            <li className={styles.menuItem}>
                <Link to="/">
                    <h2 className={styles.menuText}>{t("appWrapper.menu.about_us")}</h2>
                    <div className={styles.underline} />
                </Link>
            </li>
            <li className={styles.menuItem}>
                <Link to="/">
                    <h2 className={styles.menuText}>{t("appWrapper.menu.security")}</h2>
                    <div className={styles.underline} />
                </Link>
            </li>
            <li className={styles.menuItem}>
                <Link to="/">
                    <h2 className={styles.menuText}>{t("appWrapper.menu.contacts")}</h2>
                    <div className={styles.underline} />
                </Link>
            </li>
        </ul>
    );
};

export default PCMenu;