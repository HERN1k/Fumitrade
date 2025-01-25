import { FC, useEffect, useState } from "react";
import styles from "../../styles/MainPage.module.css";
import { ISlidesTrustUs } from "../../types.ts";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "../../index.css";
import SlideTrustUsElement from "./SlideTrustUsElement.tsx";

const SwiperTrustUs: FC = () => {

    const [slidesPerView, setSlidesPerView] = useState<number>(1);

    useEffect(() => {
        onResize();

        window.addEventListener("resize", onResize);

        return () => window.removeEventListener("resize", onResize);
    }, []);

    const onResize = () => {
        const width = window.innerWidth;
        if (width >= 1024) {
            setSlidesPerView(3);
        } else if (width <= 768 && width > 1023) {
            setSlidesPerView(2);
        } else if (width < 767) {
            setSlidesPerView(2);
        } else {
            setSlidesPerView(1);
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
                    <SlideTrustUsElement imgSrc={item.imgSrc} url={item.url} alt={item.alt} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default SwiperTrustUs;