import { FC, useEffect, useRef, useState } from "react";
import Window from "../general/Window";
import Constants from "../../constants";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import { useInView } from "react-intersection-observer";
import { 
    getStaticFile, 
    transitionTo, 
    transitionToTop, 
    TranslateOnAxis 
} from "../../scripts/appWrapperScripts.ts";
import { 
    lockServicesWindowScroll, 
    unlockServicesWindowScroll 
} from "../../scripts/mainPageScripts.ts";
import styles from "../../styles/MainPage.module.css";
import "swiper/swiper-bundle.css";
import "../../index.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";
import { addLineBreaks, trimWithDots } from "../../scripts/servicesScripts.ts";
import { Arrow } from "../general/Svgs.tsx";
import AppearanceAnimation from "../general/AppearanceAnimation.tsx";
import { getServicesCollectionForMainPage } from "../../scripts/collections.ts";

const ServicesWindow: FC = () => {

    const rootElementRef = useRef<HTMLDivElement | null>(null);
    const swiperElementRef = useRef<SwiperRef | null>(null);

    const [spaceBetween, setSpaceBetween] = useState<number>(50);
    const [swiperSlideWidth, setSwiperSlideWidth] = useState<string>("25dvw");
    
    const { t } = useTranslation();

    useEffect(() => {
        rootElementRef.current = document.getElementById(Constants.ROOT_CONTAINER_ID) as HTMLDivElement | null;
    }, []);

    useEffect(() => {
        const onResize = () => {
            if (window.innerWidth > 900) {
                setSpaceBetween(50);
                setSwiperSlideWidth("25dvw");
            } else {
                setSpaceBetween(100);
                setSwiperSlideWidth("90dvw");
            }
        }

        onResize();

        window.addEventListener("resize", onResize);

        return () => window.removeEventListener("resize", onResize);
    }, []);

    const navigateTo = (id?: string) => {
        if (id) {
            transitionTo(id);
        } else {
            transitionToTop();
        }
    }

    return (
        <Window sticky id={Constants.SERVICES_WINDOW_MAIN_PAGE_ID} className={styles.servicesWindow}>
            <AppearanceAnimation 
                initialPosition={Constants.BASE_APPEARANCE_ANIMATION.clone()}
                delay={500} 
                style={{ width: "100%" }}>
                <h2 className={styles.servicesTitle}> 
                    {t("servicesWindowInMainPage.title")}
                </h2>
            </AppearanceAnimation>
            
            <AppearanceAnimation  
                initialPosition={new TranslateOnAxis(5, "rem", "X")}
                delay={750} 
                duration={0.35} 
                style={{ width: "100%" }}>
                <Swiper
                    ref={swiperElementRef}
                    direction={"horizontal"}
                    slidesPerView={"auto"}
                    spaceBetween={spaceBetween}
                    centeredSlides
                    watchSlidesProgress
                    initialSlide={window.innerWidth > 768 ? 1 : 0}
                    className={styles.servicesSwiper}>

                    {getServicesCollectionForMainPage(t).map((item, index) => (
                        <SwiperSlide key={index} style={{ width: swiperSlideWidth }}>
                            <Link 
                                to="/services" 
                                viewTransition 
                                onClick={() => navigateTo(item.id)}
                                className={styles.servicesSwiperItem} 
                                style={{
                                    backgroundImage: `url(${getStaticFile(item.imgSrc)})`
                                }}>
                                <p className={styles.servicesSwiperItemDescription}>
                                    {trimWithDots(item.description, 25)}
                                </p>

                                <h3 className={styles.servicesSwiperItemTitle}>
                                    {addLineBreaks(item.title)}
                                </h3>

                                <div className={styles.serviceSwiperItemButton}>
                                    <Arrow className={styles.serviceSwiperItemButtonArrowSvg} />
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                    
                    <SwiperSlide style={{ width: swiperSlideWidth }}>
                        <Link 
                            to="/services" 
                            viewTransition 
                            onClick={() => navigateTo()} 
                            className={styles.servicesSwiperLastItem}>
                            
                            <p className={styles.servicesSwiperLastItemDescription}>
                                {t("servicesWindowInMainPage.swiperLastItemDescription")}
                            </p>

                            <h3 className={styles.servicesSwiperLastItemTitle}>
                                {t("servicesWindowInMainPage.swiperLastItemTitle")}
                            </h3>

                            <div className={styles.serviceSwiperLastItemButton}>
                                <Arrow className={styles.serviceSwiperLastItemButtonArrowSvg} />
                            </div>
                        </Link>
                    </SwiperSlide>
                </Swiper>
            </AppearanceAnimation>
        </Window>
    );
}

export default ServicesWindow;