import { FC, useEffect } from "react";
import Window from "../general/Window.tsx";
import Constants from "../../constants.ts";
import styles from "../../styles/AboutUs.module.css";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
// @ts-ignore
import fjGallery from "flickr-justified-gallery";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

const AboutUsGallery: FC = () => {

    useEffect(() => {
        fjGallery(document.querySelectorAll(".gallery"), {
            itemSelector: ".gallery__item",
            rowHeight: 180,
            lastRow: "center",
            gutter: 5,
            rowHeightTolerance: 0.5,
            calculateItemsHeight: false,
          });
    }, []);

    interface IGalleryItem {
        id: number;
        src: string;
        alt: string;
        size: string;
    }

    const imgs: IGalleryItem[] = [
        { id: 1, src: "https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1600&q=80", alt: "1", size: "1600-2400" },
        { id: 2, src: "https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1600&q=80", alt: "1", size: "1600-2400" },
        { id: 3, src: "https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1600&q=80", alt: "1", size: "1600-2400" },
        { id: 4, src: "https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1600&q=80", alt: "1", size: "1600-2400" },
        { id: 5, src: "https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1600&q=80", alt: "1", size: "1600-2400" },
        { id: 6, src: "https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1600&q=80", alt: "1", size: "1600-2400" },
        { id: 7, src: "https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1600&q=80", alt: "1", size: "1600-2400" },
        { id: 8, src: "https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1600&q=80", alt: "1", size: "1600-2400" },
        { id: 9, src: "https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1600&q=80", alt: "1", size: "1600-2400" },
        { id: 10, src: "https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1600&q=80", alt: "1", size: "1600-2400" },
        { id: 11, src: "https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1600&q=80", alt: "1", size: "1600-2400" },
        { id: 12, src: "https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1600&q=80", alt: "1", size: "1600-2400" }
    ];

    // В названии фотки добавить вконце размер и одтуда получить данные

    return (
        <Window id={Constants.ABOUT_US_PAGE_GALLERY_ID} className={styles.galleryWindow}>
            <LightGallery
                speed={500}
                mode="lg-fade"
                pager={false}
                thumbnail={true}
                download={false}
                plugins={[lgThumbnail, lgZoom]}
                elementClassNames={"gallery"}
                mobileSettings={{
                    controls: false,
                    showCloseIcon: false,
                    download: false,
                    rotate: false,
                }}>
                {imgs.map((item) => 
                    <a 
                        className="gallery__item" 
                        data-src={item.src} 
                        data-lg-size={item.size} 
                        key={item.id}
                        data-pinterest-text=" "
                        data-tweet-text=" "
                        data-sub-html=" ">
                        <img className="img-responsive gallery__img" src={item.src} alt={item.alt} loading="lazy" />
                    </a>)}
            </LightGallery>
        </Window>
    );
}

export default AboutUsGallery;  