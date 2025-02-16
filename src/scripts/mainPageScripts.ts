import Typed from "typed.js";
import styles from "../styles/MainPage.module.css";
import { IChangeServicesWindowScrollProps, ICreateTyped } from "../types.tsx";
import Constants from "../constants.ts";
import { Dispatch, SetStateAction } from "react";

export const getStaticFile: (name: string) => string = (name: string) => {
    return Constants.STATIC_FILES_PATH + name;
}

export const removeLineBreak: (text: string) => string = (text: string) => {
    return text.replace(/\n/g, " ");
}

export const createTyped = (args: ICreateTyped) => {
    setTimeout(() => {
        args.typed.current = new Typed(args.typedRef.current as Element, {
            strings: args.strings,
            typeSpeed: 75,
            backSpeed: 75,
            backDelay: 2000,
            loop: true,
            autoInsertCss: true,
            fadeOutDelay: 500,
            showCursor: false,
            fadeOut: true,
            cursorChar: '|',
        }); 
    }, 500);
}

export const destroyTyped = (typed: React.MutableRefObject<Typed | null>) => typed.current?.destroy();

export const onChangeViewInTrustUsWindow = (inView: boolean) => {
    setTimeout(() => {
        var textElements = document.getElementsByClassName(styles.trustUsText);
 
        if (inView) {
            if (textElements.length > 0) {
                (textElements[0] as HTMLDivElement)?.classList.add(styles.textVisible);
            }
        } else {
            if (textElements.length > 0) {
                (textElements[0] as HTMLDivElement)?.classList.remove(styles.textVisible);
            }
        } 
    }, 500);
}

export const onChangeViewInQuoteElement  = (inView: boolean) => {
    setTimeout(() => {
        var quoteElements = document.getElementsByClassName(styles.quoteContainer);
 
        if (inView) {
            if (quoteElements.length > 0) {
                (quoteElements[0] as HTMLDivElement)?.classList.add(styles.quoteVisible);
            }
        } else {
            if (quoteElements.length > 0) {
                (quoteElements[0] as HTMLDivElement)?.classList.remove(styles.quoteVisible);
            }
        } 
    }, 500);
}

export const onChangeViewInDescriptionWindow = async (inView: boolean) => {
    var textElements = document.getElementsByClassName(styles.descriptionText);
    var learnMoreButton = document.getElementsByClassName(styles.learnMoreContainer)[0] as HTMLDivElement;

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

export const onChangeViewInAboutMain = (inView: boolean) => {
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

export const onChangeViewInAboutMainElement = async (inView: boolean) => {
    var textElements = document.getElementsByClassName(styles.aboutTextItemText);

    setTimeout(async () => {
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
    }, window.innerWidth > 768 ? 500 : 0);
}

export const onResizeForTrustUsWindow = (
    setSpaceBetween: Dispatch<SetStateAction<number>>,
    setSlideWidth: Dispatch<SetStateAction<string>>
) => {
    const width = window.innerWidth;  
        
    if (width > 1440) {
        setSpaceBetween(75);
        setSlideWidth("15rem");
    } else if (width >= 768 && width <= 1440) {
        setSpaceBetween(50);
    } else if (width < 768) {
        setSpaceBetween(25);
        setSlideWidth("10rem");
    } else {
        setSpaceBetween(75);
        setSlideWidth("15rem");
    } 
};

export const halfArray = <T>(arr: T[]): T[] => arr.slice(0, Math.floor(arr.length / 2));

export const lockServicesWindowScroll = ({ root, swiper }: IChangeServicesWindowScrollProps) => {
    if (window.innerWidth < 900) return;
    
    setTimeout(() => {
        if (root.current && swiper.current) {
            root.current.style.overflow = "hidden";
    
            swiper.current.swiper.enable(); 
        }
    }, 200);

    var iteration = 0;

    var interval = setInterval(() => {
        iteration++;

        if (iteration > 100) {
            clearInterval(interval);

            unlockServicesWindowScroll({ root, swiper });
        }
    }, 100);
}

export const unlockServicesWindowScroll = ({ root, swiper }: IChangeServicesWindowScrollProps) => {
    if (window.innerWidth < 900) return;

    if (root.current && swiper.current) {
        swiper.current.swiper.disable();

        root.current.style.overflow = "";
    }
}