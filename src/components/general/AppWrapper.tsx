import { FC, useEffect, useRef, useState } from "react";
import styles from "../../styles/AppWrapper.module.css";
import { Link, Outlet } from "react-router";
import {  
    getStaticFile, 
    onResize, 
    transitionToTop 
} from "../../scripts/appWrapperScripts.ts";
import Constants from "../../constants.ts";
import Footer from "./Footer.tsx";
import Header from "../../scripts/header.ts";
import CookiePopup from "./CookiePopup.tsx";

const AppWrapper: FC = () => {
    
    const containerRef = useRef<HTMLDivElement | null>(null);
    
    const [Menu, setMenu] = useState<FC>(() => () => <></>);

    useEffect(() => { 
        Header.setElements(
            document.getElementById(Constants.ROOT_CONTAINER_ID), 
            document.getElementById(Constants.HEADER_ID));

        onResize({ setMenu: setMenu });

        containerRef.current?.addEventListener("scroll", Header.onScroll); 
        window.addEventListener("resize", () => onResize({ setMenu: setMenu }));

        return () => {
            containerRef.current?.removeEventListener("scroll", Header.onScroll);
            window.removeEventListener("resize", () => onResize({ setMenu: setMenu }));
        }; 
    }, []);
 
    return (
        <div ref={containerRef} className={styles.container} id={Constants.ROOT_CONTAINER_ID}>
            <header className={styles.header} id={Constants.HEADER_ID}>  
                <Link to="/" viewTransition onClick={transitionToTop}>
                    <img src={getStaticFile(Constants.LOGO_IMAGE)} alt={Constants.COMPANY_NAME} className={styles.logoImg} />
                </Link>
                
                <Menu />
            </header>
            
            <main className={styles.main}>
                <Outlet />

                <CookiePopup />
            </main>
             
            <Footer />
        </div>
    );
};

export default AppWrapper;