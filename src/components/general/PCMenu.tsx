import { FC } from "react";
import styles from "../../styles/AppWrapper.module.css";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";

const PCMenu: FC = () => {

    const { t } = useTranslation();

    const X = () => {

    }

    return (
        <ul className={styles.menu}>
            <li className={styles.menuItem}>
                <Link to="/">
                    <h2 className={styles.menuText}>{t("appWrapper.menu.services")}</h2>
                    <div className={styles.underline} />
                </Link>

                <div className={styles.menuItemDropDownContainer}>
                    <Link to="/">
                        <div className={styles.menuItemDropDownItem}>{t("appWrapper.menu.dropDown.complex_processing")}</div>
                    </Link>
                    <Link to="/">
                        <div className={styles.menuItemDropDownItem}>{t("appWrapper.menu.dropDown.aerosol_disinfestation")}</div>
                    </Link>
                    <Link to="/">
                        <div className={styles.menuItemDropDownItem}>{t("appWrapper.menu.dropDown.fumigation_of_mills")}</div>
                    </Link>
                    <Link to="/">
                        <div className={styles.menuItemDropDownItem}>{t("appWrapper.menu.dropDown.fumigation_of_silos")}</div>
                    </Link>
                    <Link to="/">
                        <div className={styles.menuItemDropDownItem}>{t("appWrapper.menu.dropDown.fumigation_of_wagons")}</div>
                    </Link>
                    <Link to="/">
                        <div className={styles.menuItemDropDownItem}>{t("appWrapper.menu.dropDown.fumigation_in_containers")}</div>
                    </Link>
                    <Link to="/">
                        <div className={styles.menuItemDropDownItem}>{t("appWrapper.menu.dropDown.ship_fumigation")}</div>
                    </Link>
                </div>
            </li>
            <li className={styles.menuItem}>
                <Link to="/">
                    <h2 className={styles.menuText}>{t("appWrapper.menu.about_us")}</h2>
                    <div className={styles.underline} />
                </Link>
            </li>
            <li className={styles.menuItem}>
                <Link to="/">
                    <h2 className={styles.menuText}>{t("appWrapper.menu.knowledge_base")}</h2>
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