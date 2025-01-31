import Typed from "typed.js";
import styles from "../styles/MainPage.module.css";
import { ICreateTyped } from "../types.tsx";
import Constants from "../constants.ts";

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