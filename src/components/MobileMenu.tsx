import { FC } from "react";
import "../styles/MobileMenu.css";
import { BurgerButtonSvg } from "./Svgs";
import { Link } from "react-router";

const MobileMenu: FC = () => {

    const preventDefault: (event: Event) => void = (event: Event) => event.preventDefault();

    const toggleMenu: () => void = () => {
        const menu: HTMLElement | null = document.getElementById("BurgerMenuButton");
        
        if (menu) {
            menu.classList.toggle("opened");
            menu.setAttribute("aria-expanded", menu.classList.contains("opened").toString());
        
            const menuContainer = document.getElementById("menuContainer");
        
            menuContainer?.classList.toggle("menu-main-opened");
        
            if (menu.classList.contains("opened")) {
                document.body.style.overflow = "hidden";
                window.addEventListener("scroll", preventDefault);
                window.addEventListener("wheel", preventDefault, { passive: false });
                window.addEventListener("touchmove", preventDefault, { passive: false });
            } else {
                document.body.style.overflow = "";
                window.removeEventListener("scroll", preventDefault);
                window.removeEventListener("wheel", preventDefault);
                window.removeEventListener("touchmove", preventDefault);
            }
        }
    }

    return (
        <div className="mobileMenuContainer">
            <BurgerButtonSvg toggleMenu={toggleMenu} />

            <div id="menuContainer" className="menu-main-container">
                <ul className="links">
                    <Link to="/">
                        <li className="link-item" onClick={toggleMenu}>
                            Послуги
                        </li>
                    </Link>
                    <Link to="/">
                        <li className="link-item" onClick={toggleMenu}>
                            Про нас
                        </li>
                    </Link>
                    <Link to="/">
                        <li className="link-item" onClick={toggleMenu}>
                            Безпека
                        </li>
                    </Link>
                    <Link to="/">
                        <li className="link-item" onClick={toggleMenu}>
                            Контакти
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    );
};

export default MobileMenu;