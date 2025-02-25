import { FC, useState } from "react";
import styles from "../../styles/AppWrapper.module.css";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import { transitionTo, transitionToTop } from "../../scripts/appWrapperScripts.ts";
import Constants from "../../constants.ts";
import { trimWithDots } from "../../scripts/servicesScripts.ts";
import { IKnowledgeBaseItem } from "../../types.ts";
import { getKnowledgeItemsCollection } from "../../scripts/knowledgeBaseScripts.ts";

const PCMenu: FC = () => {

    const { t } = useTranslation();

    const [knowledgeItemsCollection] = useState<IKnowledgeBaseItem[]>(getKnowledgeItemsCollection());

    return (
        <ul className={styles.menu}>
            <li className={styles.menuItem}>
                <Link to="/services" viewTransition onClick={transitionToTop}>
                    <h2 className={styles.menuText}>{t("appWrapper.menu.services")}</h2>
                    <div className={styles.underline} />
                </Link>
  
                <div className={styles.menuItemDropDownContainer}>
                    <Link to="/services" viewTransition onClick={() => transitionTo(Constants.SERVICES_PAGE_SERVICE_1_ID)}>
                        <div className={styles.menuItemDropDownItem}>{trimWithDots(t("appWrapper.menu.dropDown.complex_processing"), 28)}</div>
                    </Link>
                    <Link to="/services" viewTransition onClick={() => transitionTo(Constants.SERVICES_PAGE_SERVICE_2_ID)}>
                        <div className={styles.menuItemDropDownItem}>{trimWithDots(t("appWrapper.menu.dropDown.aerosol_disinfestation"), 28)}</div>
                    </Link>
                    <Link to="/services" viewTransition onClick={() => transitionTo(Constants.SERVICES_PAGE_SERVICE_3_ID)}>
                        <div className={styles.menuItemDropDownItem}>{trimWithDots(t("appWrapper.menu.dropDown.disinfection_of_granaries"), 28)}</div>
                    </Link>
                    <Link to="/services" viewTransition onClick={() => transitionTo(Constants.SERVICES_PAGE_SERVICE_4_ID)}>
                        <div className={styles.menuItemDropDownItem}>{trimWithDots(t("appWrapper.menu.dropDown.fumigation_of_silos"), 28)}</div>
                    </Link>
                    <Link to="/services" viewTransition onClick={() => transitionTo(Constants.SERVICES_PAGE_SERVICE_5_ID)}>
                        <div className={styles.menuItemDropDownItem}>{trimWithDots(t("appWrapper.menu.dropDown.fumigation_of_wagons"), 28)}</div>
                    </Link>
                    <Link to="/services" viewTransition onClick={() => transitionTo(Constants.SERVICES_PAGE_SERVICE_6_ID)}>
                        <div className={styles.menuItemDropDownItem}>{trimWithDots(t("appWrapper.menu.dropDown.fumigation_in_containers"), 28)}</div>
                    </Link>
                    <Link to="/services" viewTransition onClick={() => transitionTo(Constants.SERVICES_PAGE_SERVICE_7_ID)}>
                        <div className={styles.menuItemDropDownItem}>{trimWithDots(t("appWrapper.menu.dropDown.ship_fumigation"), 28)}</div>
                    </Link>
                    <Link to="/services" viewTransition onClick={() => transitionTo(Constants.SERVICES_PAGE_SERVICE_8_ID)}>
                        <div className={styles.menuItemDropDownItem}>{trimWithDots(t("appWrapper.menu.dropDown.rodent_traps"), 28)}</div>
                    </Link> 
                </div>
            </li>
            <li className={styles.menuItem}>
                <Link to="/about-us" viewTransition onClick={transitionToTop}>
                    <h2 className={styles.menuText}>{t("appWrapper.menu.about_us")}</h2>
                    <div className={styles.underline} />
                </Link>
            </li>
            <li className={styles.menuItem}>
                <Link to="/knowledge-base" viewTransition onClick={transitionToTop}>
                    <h2 className={styles.menuText}>{t("appWrapper.menu.knowledge_base")}</h2>
                    <div className={styles.underline} />
                </Link>

                <div className={styles.menuItemDropDownContainer}>
                    {knowledgeItemsCollection.map((item) => 
                        <Link to={`/knowledge-base#section${item.id}`} key={item.id} viewTransition onClick={() => {
                            window.location.hash = `section${item.id}`;
                        }}>
                            <div className={styles.menuItemDropDownItem}>{trimWithDots(item.title, 28)}</div>
                        </Link>)}
                </div>
            </li>
            <li className={styles.menuItem}>
                <Link to="/contacts" viewTransition onClick={transitionToTop}>
                    <h2 className={styles.menuText}>{t("appWrapper.menu.contacts")}</h2>
                    <div className={styles.underline} />
                </Link>
            </li>
        </ul>
    );
};

export default PCMenu;