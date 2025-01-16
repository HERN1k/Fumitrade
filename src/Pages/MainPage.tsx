import { FC, useEffect, useRef } from "react";
import styles from "../styles/MainPage.module.css";
import Window from "../components/Window.tsx";
import { IPageProps } from "../Types.ts";
import Typed from "typed.js";
import { useInView } from "react-intersection-observer";
import DescriptionMainPage from "../components/DescriptionMainPage.tsx";
import TrustUsMainPage from "../components/TrustUsMainPage.tsx";
import { ZipperSvg } from "../components/Svgs.tsx";

const createTyped = (typed: React.MutableRefObject<Typed | null>, typedRef: React.MutableRefObject<HTMLDivElement | null>) => {
    setTimeout(() => {
        typed.current = new Typed(typedRef.current as Element, {
            strings: [
                "Фумігація без<br />компромісів",
                "30 років на ринку",
                "Досвід<br />Надійність<br />Ефективність",
            ],
            typeSpeed: 75,
            backSpeed: 75,
            backDelay: 1000,
            loop: true,
            autoInsertCss: true,
            fadeOutDelay: 500,
            showCursor: false,
            fadeOut: true,
            cursorChar: '|',
        });
    }, 500);
}

const destroyTyped = (typed: React.MutableRefObject<Typed | null>) => typed.current?.destroy();

const AboutTextElement: FC = () => {

    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    useEffect(() => {
        const onChangeView = async () => {
            var textElements = document.getElementsByClassName(styles.aboutTextItemText);
    
            if (inView) {
                if (textElements.length > 0) {
                    for (var i = 0; i < textElements.length; i++) {
                        const promise = new Promise((resolve) => {
                            setTimeout(() => {
                                (textElements[i] as HTMLDivElement)?.classList.add(styles.textVisible);
                                resolve(null);
                            }, 500);
                        });
    
                        await promise;
                    }
                }
            } else {
                if (textElements.length > 0) {
                    for (var i = 0; i < textElements.length; i++) {
                        const promise = new Promise((resolve) => {
                            setTimeout(() => {
                                (textElements[i] as HTMLDivElement)?.classList.remove(styles.textVisible);
                                resolve(null);
                            }, 500);
                        });
    
                        await promise;
                    }
                }
            }
        }

        onChangeView();
    }, [inView]);

    

    return (
        <div ref={ref} className={styles.aboutTextItemsContainer}>
            <h2 className={styles.aboutTextItemText}>
                Охорона зерна та складів
                <div className={styles.underlineAboutText} />
            </h2>

            <h2 className={styles.aboutTextItemText}>
                Обробка експортних вантажів
                <div className={styles.underlineAboutText} />
            </h2>

            <h2 className={styles.aboutTextItemText}>
                Контроль шкідників і збереження культур
                <div className={styles.underlineAboutText} />
            </h2>
        </div>
    );
}

const AboutText: FC = () => {

    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    useEffect(() => onChangeView(), [inView]);

    const onChangeView = () => {
        setTimeout(() => {
            var titleElements = document.getElementsByClassName(styles.aboutTextTitle);

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
        <div className={styles.aboutTextContainer}>
            <div ref={ref} className={styles.aboutTextTitleContainer}>
                <h1 className={styles.aboutTextTitle}>
                    Професійна фумігація та захист від шкідників
                </h1>
            </div>

            <ZipperSvg className={styles.zipper} />

            <AboutTextElement />
        </div>
    );
}

const MainPage: FC<IPageProps> = ({ id }) => {

    const typedRef = useRef<HTMLDivElement | null>(null);
    const typed = useRef<Typed | null>(null);
    
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    useEffect(() => {
        if (inView) {
            createTyped(typed, typedRef);
        } else {
            destroyTyped(typed);
        } 

        return () => destroyTyped(typed);   
    }, [inView]);

    return (
        <>
            <Window id={id}>
                <div className={styles.mainPageContainer} ref={ref}>
                    <div className={styles.mainPageImage} />
                    
                    <div className={styles.sloganText}>
                        <span ref={typedRef} />
                    </div>

                    <AboutText />
                </div>
            </Window>

            <DescriptionMainPage />

            <TrustUsMainPage />
        </>
    );
}

export default MainPage;