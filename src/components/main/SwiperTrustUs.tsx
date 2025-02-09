import { FC, useEffect, useState } from "react";
import styles from "../../styles/MainPage.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { trustUsSlides, onResizeForTrustUsWindow } from "../../scripts/mainPageScripts.ts";
import "swiper/swiper-bundle.css";
import "../../index.css";

const SwiperTrustUs: FC = () => {

    const [spaceBetween, setSpaceBetween] = useState<number>(75);
    const [slideWidth, setSlideWidth] = useState<string>("15rem");

    useEffect(() => {
        onResize();

        window.addEventListener("resize", onResize);

        return () => window.removeEventListener("resize", onResize);
    }, []);

    const onResize = () => onResizeForTrustUsWindow(setSpaceBetween, setSlideWidth);

    return (
        <Swiper
            slidesPerView={"auto"}
            spaceBetween={spaceBetween}
            centeredSlides={false}
            loop={true}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className={styles.swiper}>
            {trustUsSlides.data.map((item, index) => (
                <SwiperSlide key={index} style={{ width: slideWidth }}>
                    <a className={styles.swiperItem} target="_blank" href={item.url}>
                        <img src={item.imgSrc} alt={item.alt} className={styles.swiperImg} />
                    </a>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default SwiperTrustUs;