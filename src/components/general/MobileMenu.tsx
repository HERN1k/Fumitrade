import { FC } from "react";
import "../../styles/MobileMenu.css";
import { BurgerButton } from "./Svgs.tsx";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import { toggleMobileMenu, transitionToTop } from "../../scripts/appWrapperScripts.ts";

const MobileMenu: FC = () => {

    const { t } = useTranslation();

    return (
        <div className="mobileMenuContainer">
            <BurgerButton toggleMenu={toggleMobileMenu} />

            <div id="menuContainer" className="menu-main-container">
                <ul className="links">
                    <Link to="/services" viewTransition onClick={transitionToTop}>
                        <li className="link-item" onClick={toggleMobileMenu}>
                            {t("appWrapper.menu.services")}
                        </li>
                    </Link>
                    <Link to="/about-us" viewTransition onClick={transitionToTop}>
                        <li className="link-item" onClick={toggleMobileMenu}>
                            {t("appWrapper.menu.about_us")}
                        </li>
                    </Link>
                    <Link to="/knowledge-base" viewTransition onClick={transitionToTop}>
                        <li className="link-item" onClick={toggleMobileMenu}>
                            {t("appWrapper.menu.knowledge_base")}
                        </li>
                    </Link>
                    <Link to="/contacts" viewTransition onClick={transitionToTop}>
                        <li className="link-item" onClick={toggleMobileMenu}>
                            {t("appWrapper.menu.contacts")}
                        </li>
                    </Link> 
                </ul>
            </div>
        </div>
    );
};

export default MobileMenu;