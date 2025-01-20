import { FC, useEffect, useRef, useState } from "react";
import Window from "./Window.tsx";
import styles from "../styles/MainPage.module.css"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "../index.css"
import { useInView } from "react-intersection-observer";
import { ISlideTrustUsData, ISlidesTrustUs } from "../Types.ts";

const Slide: FC<ISlideTrustUsData> = ({ url, imgSrc, alt }) => {

    const slideRef = useRef<HTMLAnchorElement | null>(null);

    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    const combinedRef = (node: HTMLAnchorElement | null) => {
        slideRef.current = node;
        ref(node);
    };

    useEffect(() => {
        if (inView) {
            slideRef.current?.classList.add(styles.textVisible);
        } else {
            slideRef.current?.classList.remove(styles.textVisible);
        } 
    }, [inView]);

    return (
        <a ref={combinedRef} className={styles.swiperItem} target="_blank" href={url}>
            <img src={imgSrc} alt={alt} className={styles.swiperImg} />
        </a>
    );
}

const SwiperElement: FC = () => {

    const [slidesPerView, setSlidesPerView] = useState<number>(1);

    useEffect(() => {
        onResize();

        window.addEventListener("resize", onResize);

        return () => window.removeEventListener("resize", onResize);
    }, []);

    const onResize = () => {
        if (window.innerWidth > 768) {
            setSlidesPerView(4);
        } else {
            setSlidesPerView(2);
        }
    }
    
    const slides: ISlidesTrustUs = {
        data: [
            {
                imgSrc: "https://www.agroco.com.ua/img/logo-whiteA2.png",
                url: "https://www.agroco.com.ua/",
                alt: "Агроко"
            },
            {
                imgSrc: "https://lidea-seeds.com.ua/img/logo/logo_lidea_baseline.svg",
                url: "https://lidea-seeds.com.ua/",
                alt: "Lidea"
            },
            {
                imgSrc: "https://mais.ua/wp-content/themes/mais/images/logo.svg",
                url: "https://mais.ua/",
                alt: "Mais"
            },
            {
                imgSrc: "https://www.lnz.com.ua/img/logo.png",
                url: "https://www.lnz.com.ua/",
                alt: "Lnz"
            },
            {
                imgSrc: "https://www.eridon.ua/i/cat/-2/logo.svg",
                url: "https://www.eridon.ua/",
                alt: "Eridon"
            },
        ]
    };

    return (
        <Swiper
            slidesPerView={slidesPerView}
            centeredSlides={false}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className={styles.swiper}>
            {slides.data.map((item, index) => (
                <SwiperSlide key={index}>
                    <Slide imgSrc={item.imgSrc} url={item.url} alt={item.alt} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

const TrustUsMainPage: FC = () => {

    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    useEffect(() => onChangeView(), [inView]);

    const onChangeView = () => {
        setTimeout(() => {
            var titleElements = document.getElementsByClassName(styles.trustUsTitle);

            if (inView) {
                if (titleElements.length > 0) {
                    (titleElements[0] as HTMLDivElement)?.classList.add(styles.textVisible);
                }
            } else {
                if (titleElements.length > 0) {
                    (titleElements[0] as HTMLDivElement)?.classList.remove(styles.textVisible);
                }
            } 
        }, 500);
    }

    return (
        <Window id="TrustUsMainPageID">
            <div className={styles.trustUsContainer}>
                <div className={styles.trustUsImg} />

                <h1 ref={ref} className={styles.trustUsTitle}>Нам довіряють</h1>

                <SwiperElement />
            </div>
        </Window>
    );
}

export default TrustUsMainPage;