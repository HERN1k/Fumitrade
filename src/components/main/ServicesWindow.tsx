import { FC, useEffect, useRef, useState } from "react";
import Window from "../general/Window";
import Constants from "../../constants";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import { useInView } from "react-intersection-observer";
import { getStaticFile, transitionTo, transitionToTop } from "../../scripts/appWrapperScripts.ts";
import { 
    lockServicesWindowScroll, 
    unlockServicesWindowScroll 
} from "../../scripts/mainPageScripts.ts";
import styles from "../../styles/MainPage.module.css";
import "swiper/swiper-bundle.css";
import "../../index.css";
import { useTranslation } from "react-i18next";
import { IServiceInMainPageProps } from "../../types.ts";
import { Link } from "react-router";
import AnimationInView from "./AnimationInView.tsx";
import { addLineBreaks, trimWithDots } from "../../scripts/servicesScripts.ts";
import { Arrow } from "../general/Svgs.tsx";

const ServicesWindow: FC = () => {

    const rootElementRef = useRef<HTMLDivElement | null>(null);
    const swiperElementRef = useRef<SwiperRef | null>(null);

    const [isFirstSlide, setIsFirstSlide] = useState<boolean>(true);
    const [isLastSlide, setIsLastSlide] = useState<boolean>(false);
    
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.75
    });

    const { t } = useTranslation();

    useEffect(() => {
        rootElementRef.current = document.getElementById(Constants.ROOT_CONTAINER_ID) as HTMLDivElement | null;
    }, []);

    useEffect(() => { 
        if (window.innerWidth > 768) {
            if (isFirstSlide || isLastSlide) {
                unlockServicesWindowScroll({
                    root: rootElementRef,
                    swiper: swiperElementRef
                });
            }
        }
    }, [isFirstSlide, isLastSlide, inView]);

    useEffect(() => { 
        if (inView) {
            if (window.innerWidth > 768) {
                lockServicesWindowScroll({
                    root: rootElementRef,
                    swiper: swiperElementRef
                });
            }
        }
    }, [inView]);

    useEffect(() => {
        onResize();

        window.addEventListener("resize", onResize);

        return () => window.removeEventListener("resize", onResize);
    }, []);

    const onResize = () => {
        
    }

    const navigateTo = (id?: string) => {
        unlockServicesWindowScroll({
            root: rootElementRef,
            swiper: swiperElementRef
        });

        if (id) {
            transitionTo(id);
        } else {
            transitionToTop();
        }
    }

    const servicesCollection: IServiceInMainPageProps[] = [
        {
            id: Constants.SERVICES_PAGE_SERVICE_1_ID,
            imgSrc: Constants.SERVICES_PAGE_SERVICE_1_IMAGE,
            title: t("servicesWindow.services.service_1.title"),
            description: t("servicesWindow.services.service_1.description")
        },
        {
            id: Constants.SERVICES_PAGE_SERVICE_2_ID,
            imgSrc: Constants.SERVICES_PAGE_SERVICE_2_IMAGE,
            title: t("servicesWindow.services.service_2.title"),
            description: t("servicesWindow.services.service_2.description")
        },
        {
            id: Constants.SERVICES_PAGE_SERVICE_3_ID,
            imgSrc: Constants.SERVICES_PAGE_SERVICE_3_IMAGE,
            title: t("servicesWindow.services.service_3.title"),
            description: t("servicesWindow.services.service_3.description")
        },
        {
            id: Constants.SERVICES_PAGE_SERVICE_4_ID,
            imgSrc: Constants.SERVICES_PAGE_SERVICE_4_IMAGE,
            title: t("servicesWindow.services.service_4.title"),
            description: t("servicesWindow.services.service_4.description")
        }
    ];
    
    return (
        <Window ref={ref} sticky id={Constants.SERVICES_WINDOW_MAIN_PAGE_ID} className={styles.servicesWindow}>
            <AnimationInView delay={500} style={{ width: "100%" }}>
                <h2 className={styles.servicesTitle}> 
                    {t("servicesWindowInMainPage.title")}
                </h2>
            </AnimationInView>
            
            <AnimationInView delay={750} duration={0.5} style={{ width: "100%" }}>
                <Swiper
                    ref={swiperElementRef}
                    direction={"horizontal"}
                    slidesPerView={"auto"}
                    spaceBetween={50}
                    mousewheel
                    centeredSlides
                    watchSlidesProgress
                    initialSlide={1}
                    modules={[Mousewheel]}
                    onSlideChange={(swiper) => {
                        setIsFirstSlide(swiper.isBeginning);
                        setIsLastSlide(swiper.isEnd);
                    }}
                    className={styles.servicesSwiper}>

                    { servicesCollection.map((item, index) => (
                        <SwiperSlide key={index} style={{ width: "25dvw" }}>
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
                    )) }

                    <SwiperSlide style={{ width: "25dvw" }}>
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
            </AnimationInView>
        </Window>
    );
}

export default ServicesWindow;