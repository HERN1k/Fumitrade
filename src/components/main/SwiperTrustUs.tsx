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
                    <SlideTrustUsElement imgSrc={item.imgSrc} url={item.url} alt={item.alt} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default SwiperTrustUs;