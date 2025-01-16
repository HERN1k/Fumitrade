import { FC, useEffect, useRef, useState } from "react";
import styles from "../styles/AppWrapper.module.css";
import { Link, Outlet } from "react-router";
import AppRoutes from "../Routes";
import PCMenu from "./PCMenu";
import MobileMenu from "./MobileMenu";
import { FacebookSvg } from "./Svgs";

const AppWrapper: FC = () => {

    const scrollPositionRef = useRef<number>(0);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const headerRef = useRef<HTMLDivElement | null>(null);

    const [menu, setMenu] = useState<JSX.Element>(<></>);

    useEffect(() => {
        headerRef.current?.classList.add(styles.headerVisibleWithTransparent);

        onResize();

        containerRef.current?.addEventListener("scroll", onScroll);
        window.addEventListener("resize", onResize);

        return () => {
            containerRef.current?.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onResize);
        }; 
    }, []);

    const onResize = () => {
        if (window.innerWidth > 768) {
            setMenu(<PCMenu />);
        } else {
            setMenu(<MobileMenu />);
        }
    }

    const onScroll = () => {
        const currentScrollPosition = containerRef.current?.scrollTop || 0;

        if (currentScrollPosition == 0 || scrollPositionRef.current == 0) {
            headerRef.current?.classList.remove(styles.headerVisible);

            headerRef.current?.classList.add(styles.headerVisibleWithTransparent);
        } else if (currentScrollPosition > scrollPositionRef.current) {
            headerRef.current?.classList.remove(styles.headerVisible);

            headerRef.current?.classList.remove(styles.headerVisibleWithTransparent);
        } else if (currentScrollPosition < scrollPositionRef.current) {
            headerRef.current?.classList.remove(styles.headerVisibleWithTransparent);

            headerRef.current?.classList.add(styles.headerVisible);
        }

        scrollPositionRef.current = currentScrollPosition;
    };

    return (
        <div ref={containerRef} className={styles.container}>
            <header ref={headerRef} className={styles.header}>
                <Link to="/">
                    <img src="/fumitrade.webp" alt="Fumitrade" className={styles.logoImg} />
                </Link>
                
                {menu}
            </header>
            
            <main className={styles.main}>
                <AppRoutes />

                <Outlet />
            </main>
            
            <footer className={styles.footer}>
                <div className={styles.footerTop}>
                    <div className={styles.footerWorkTogether}>
                        <h1 className={styles.footerTitle}>
                            Давайте працювати разом 

                            <span className={styles.footerTitleSpan}>
                                { window.innerWidth > 1500 ? "一一" : " " }
                            </span>

                            <a href="mailto:fumitrade.ua@gmail.com" className={styles.footerTitleAnchor}>fumitrade.ua@gmail.com</a>
                        </h1>

                        <Link to="/">
                            <img src="/fumitrade.webp" alt="Fumitrade" className={styles.footerLogoImg} />
                        </Link>
                    </div>

                    <div className={styles.footerContacts}>
                        <div className={styles.footerContact}>
                            <h2 className={styles.footerContactText}>Наше розташування</h2>
                            <a className={styles.footerContactAnchor} target="_blank" href="https://maps.app.goo.gl/VBNYzg2EuYsRpzb49">
                                <h2 className={styles.footerContactText}>м. Сміла, Черкаська область, 20700</h2>
                            </a>
                        </div>

                        <div className={styles.footerContact}>
                            <h2 className={styles.footerContactText}>Зателефонуйте нам</h2>
                            <div>
                                <a className={styles.footerContactAnchor} target="_blank" href="tel:+380506062615">
                                    <h2 className={styles.footerContactText}>+38 (050) 606-26-15</h2>
                                </a>
                                <a className={styles.footerContactAnchor} target="_blank" href="tel:+380679111317">
                                    <h2 className={styles.footerContactText}>+38 (067) 911-13-17</h2>
                                </a>
                            </div>
                        </div>

                        <div className={styles.footerContact}>
                            <h2 className={styles.footerContactText}>Підключіться</h2>
                            <a className={styles.footerFbButton} target="_blank" href="https://www.facebook.com/people/Fumitrade-%D0%A4%D1%83%D0%BC%D1%96%D1%82%D1%80%D0%B5%D0%B9%D0%B4/61553873251298/">
                                <FacebookSvg className={styles.footerFbSvg} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className={styles.footerBottom}>
                    <p className={styles.footerText}>
                        <Link to="/">
                            <span className={styles.footerSpan}>Fumitrade </span> 
                        </Link>
                        &copy; 2025
                    </p>

                    <div className={styles.footerBottomLine}/>

                    <p className={styles.footerText}>
                        Created with love by
                        <a className={styles.footerContactAnchor} target="_blank" href="https://www.linkedin.com/in/vlad-hirnyk-84654b328"> 
                            <span className={styles.footerSpan}> HERN1k</span>
                        </a>
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default AppWrapper;