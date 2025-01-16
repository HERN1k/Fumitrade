import { FC, useEffect } from "react";
import Window from "./Window.tsx";
import styles from "../styles/MainPage.module.css";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router";

const DescriptionMainPage: FC = () => {

    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    useEffect(() => {
        const onChangeView = async () => {
            var textElements = document.getElementsByClassName(styles.descriptionText);
            var learnMoreButton = document.getElementsByClassName(styles.learnMoreButton)[0] as HTMLDivElement;

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

                    setTimeout(() => {
                        learnMoreButton?.classList.add(styles.textVisible);
                    }, 500);
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

                    setTimeout(() => {
                        learnMoreButton?.classList.remove(styles.textVisible);
                    }, 500);
                }
            } 
        }

        onChangeView();
    }, [inView]);

    return (
        <Window id="DescriptionMainPage" >
            <div className={styles.mainPageImageDescription} />
            
            <div ref={ref} className={styles.descriptionTextContainer}>
                <h2 className={styles.descriptionText} style={{textAlign: "center", transform: "translateX(100%)"}}>
                    <strong><span className={styles.span}>FUMITRADE</span> лідери у сфері фумігації</strong>
                </h2>
                <h2 className={styles.descriptionText} style={{transform: "translateX(-100%)"}}>
                    Працюємо на ринку понад <span className={styles.span}>30 років</span>, надаючи найкращі послуги з фумігації та обробки зернових і олійних культур.
                </h2>
                <h2 className={styles.descriptionText} style={{transform: "translateX(100%)"}}>
                    <span className={styles.span}>Безпека</span>, <span className={styles.span}>ефективність</span> та <span className={styles.span}>інновації</span> — це основа нашої діяльності.
                </h2>

                <Link to="/" className={styles.learnMoreButton}>
                    Дізнатися більше про нас
                </Link>
            </div>
        </Window>
    );
}

export default DescriptionMainPage;