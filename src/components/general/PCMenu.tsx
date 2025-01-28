import { FC } from "react";
import styles from "../../styles/AppWrapper.module.css";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import { transitionTo } from "../../scripts/appWrapperScripts.ts";
import Constants from "../../constants.ts";

const PCMenu: FC = () => {

    const { t } = useTranslation();

    return (
        <ul className={styles.menu}>
            <li className={styles.menuItem}>
                <Link to="/services" viewTransition>
                    <h2 className={styles.menuText}>{t("appWrapper.menu.services")}</h2>
                    <div className={styles.underline} />
                </Link>

                <div className={styles.menuItemDropDownContainer}>
                    <Link to="/services" viewTransition onClick={() => transitionTo(Constants.SERVICES_PAGE_SERVICE_1_ID)}>
                        <div className={styles.menuItemDropDownItem}>{t("appWrapper.menu.dropDown.complex_processing")}</div>
                    </Link>
                    <Link to="/services" viewTransition onClick={() => transitionTo(Constants.SERVICES_PAGE_SERVICE_2_ID)}>
                        <div className={styles.menuItemDropDownItem}>{t("appWrapper.menu.dropDown.aerosol_disinfestation")}</div>
                    </Link>
                    <Link to="/services" viewTransition onClick={() => transitionTo(Constants.SERVICES_PAGE_SERVICE_3_ID)}>
                        <div className={styles.menuItemDropDownItem}>{t("appWrapper.menu.dropDown.disinfection_of_granaries")}</div>
                    </Link>
                    <Link to="/services" viewTransition onClick={() => transitionTo(Constants.SERVICES_PAGE_SERVICE_4_ID)}>
                        <div className={styles.menuItemDropDownItem}>{t("appWrapper.menu.dropDown.fumigation_of_mills")}</div>
                    </Link>
                    <Link to="/services" viewTransition onClick={() => transitionTo(Constants.SERVICES_PAGE_SERVICE_5_ID)}>
                        <div className={styles.menuItemDropDownItem}>{t("appWrapper.menu.dropDown.fumigation_of_silos")}</div>
                    </Link>
                    <Link to="/services" viewTransition onClick={() => transitionTo(Constants.SERVICES_PAGE_SERVICE_6_ID)}>
                        <div className={styles.menuItemDropDownItem}>{t("appWrapper.menu.dropDown.fumigation_of_wagons")}</div>
                    </Link>
                    <Link to="/services" viewTransition onClick={() => transitionTo(Constants.SERVICES_PAGE_SERVICE_7_ID)}>
                        <div className={styles.menuItemDropDownItem}>{t("appWrapper.menu.dropDown.fumigation_in_containers")}</div>
                    </Link>
                    <Link to="/services" viewTransition onClick={() => transitionTo(Constants.SERVICES_PAGE_SERVICE_8_ID)}>
                        <div className={styles.menuItemDropDownItem}>{t("appWrapper.menu.dropDown.ship_fumigation")}</div>
                    </Link>
                </div>
            </li>
            <li className={styles.menuItem}>
                <Link to="/" viewTransition>
                    <h2 className={styles.menuText}>{t("appWrapper.menu.about_us")}</h2>
                    <div className={styles.underline} />
                </Link>
            </li>
            <li className={styles.menuItem}>
                <Link to="/" viewTransition>
                    <h2 className={styles.menuText}>{t("appWrapper.menu.knowledge_base")}</h2>
                    <div className={styles.underline} />
                </Link>
            </li>
            <li className={styles.menuItem}>
                <Link to="/" viewTransition>
                    <h2 className={styles.menuText}>{t("appWrapper.menu.contacts")}</h2>
                    <div className={styles.underline} />
                </Link>
            </li>
        </ul>
    );
};

export default PCMenu;