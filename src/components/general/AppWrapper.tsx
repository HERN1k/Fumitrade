import { FC, useEffect, useRef, useState } from "react";
import styles from "../../styles/AppWrapper.module.css";
import { Link, Outlet } from "react-router";
import { changeDocument, getStaticFile, onResize, onScroll, transitionToTop } from "../../scripts/appWrapperScripts.ts";
import Constants from "../../constants.ts";
import Footer from "./Footer.tsx";

const AppWrapper: FC = () => {
    
    const scrollPositionRef = useRef<number>(0);
    const containerRef = useRef<HTMLDivElement | null>(null);

    const [Menu, setMenu] = useState<FC>(() => () => <></>);

    useEffect(() => {
        changeDocument();

        onResize({ setMenu: setMenu });

        containerRef.current?.addEventListener("scroll", () => onScroll({ scrollPositionRef: scrollPositionRef }));
        window.addEventListener("resize", () => onResize({ setMenu: setMenu }));

        return () => {
            containerRef.current?.removeEventListener("scroll", () => onScroll({ scrollPositionRef: scrollPositionRef }));
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
            </main>
             
            <Footer />
        </div>
    );
};

export default AppWrapper;