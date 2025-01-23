import { FC, useEffect, useRef } from "react";
import { ISlideTrustUsData } from "../../types.tsx";
import { useInView } from "react-intersection-observer";
import styles from "../../styles/MainPage.module.css";

const SlideTrustUsElement: FC<ISlideTrustUsData> = ({ url, imgSrc, alt }) => {

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

export default SlideTrustUsElement;