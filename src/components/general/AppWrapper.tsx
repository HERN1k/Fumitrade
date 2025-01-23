import { FC, useEffect, useRef, useState } from "react";
import styles from "../../styles/AppWrapper.module.css";
import { Link, Outlet } from "react-router";
import Routes from "./Routes.tsx";
import { changeDocument, getStaticFile, onResize, onScroll } from "../../scripts/appWrapperScripts.ts";
import Constants from "../../constants.ts";
import Footer from "./Footer.tsx";

const AppWrapper: FC = () => {
    
    const scrollPositionRef = useRef<number>(0);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const headerRef = useRef<HTMLDivElement | null>(null);

    const [Menu, setMenu] = useState<FC>(() => () => <></>);

    useEffect(() => {
        changeDocument();

        headerRef.current?.classList.add(styles.headerVisibleWithTransparent);

        onResize({
            setMenu: setMenu,
            headerRef: headerRef
        });

        containerRef.current?.addEventListener("scroll", () => onScroll({
            containerRef: containerRef,
            headerRef: headerRef,
            scrollPositionRef: scrollPositionRef
        }));
        window.addEventListener("resize", () => onResize({
            setMenu: setMenu,
            headerRef: headerRef
        }));

        return () => {
            containerRef.current?.removeEventListener("scroll", () => onScroll({
                containerRef: containerRef,
                headerRef: headerRef,
                scrollPositionRef: scrollPositionRef
            }));
            window.removeEventListener("resize", () => onResize({
                setMenu: setMenu,
                headerRef: headerRef
            }));
        }; 
    }, []);

    return (
        <div ref={containerRef} className={styles.container}>
            <header ref={headerRef} className={styles.header}>
                <Link to="/">
                    <img src={getStaticFile(Constants.LOGO_IMAGE)} alt={Constants.COMPANY_NAME} className={styles.logoImg} />
                </Link>
                
                <Menu />
            </header>
            
            <main className={styles.main}>
                <Routes />

                <Outlet />
            </main>
            
            <Footer />
        </div>
    );
};

export default AppWrapper;