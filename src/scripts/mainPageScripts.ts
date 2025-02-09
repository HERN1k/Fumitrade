import Typed from "typed.js";
import styles from "../styles/MainPage.module.css";
import { IChangeServicesWindowScrollProps, IChartData, ICreateTyped, ISlidesTrustUs } from "../types.tsx";
import Constants from "../constants.ts";
import { Dispatch, SetStateAction } from "react";
import { getAttributeState, getHeaderActiveState } from "./appWrapperScripts.ts";

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

export const chartData: IChartData[] = [
    {
        x: 2400,
        y: 2400,
    },
    {
        x: 1398,
        y: 2210,
    },
    {
        x: 5800,
        y: 2290,
    },
    {
        x: 3908,
        y: 2000,
    },
    {
        x: 4800,
        y: 2181,
    },
    {
        x: 3800,
        y: 2500,
    },
    {
        x: 2300,
        y: 4300,
    }
];

export const trustUsSlides: ISlidesTrustUs = {
    data: [
        {
            imgSrc: getStaticFile(Constants.COMPANY_AGROCO_LOGO_IMAGE),
            url: "https://www.agroco.com.ua/",
            alt: "Агроко"
        },
        {
            imgSrc: getStaticFile(Constants.COMPANY_MAIS_LOGO_IMAGE),
            url: "https://mais.ua/",
            alt: "Mais"
        },
        {
            imgSrc: getStaticFile(Constants.COMPANY_NEWELEVATOR_LOGO_IMAGE),
            url: "https://new-elevator.com.ua/",
            alt: "НОВИЙ ЕЛЕВАТОР ЛЛД"
        },
        {
            imgSrc: getStaticFile(Constants.COMPANY_AGRODAR_LOGO_IMAGE),
            url: "https://elevatorist.com/kompanii/264-agrodar-ltd/",
            alt: "АГРОДАР ЛТД"
        },
        {
            imgSrc: getStaticFile(Constants.COMPANY_HORS_LOGO_IMAGE),
            url: "https://latifundist.com/kompanii/245-hors/",
            alt: "Зернова компанія Хорс"
        },
        {
            imgSrc: getStaticFile(Constants.COMPANY_NIBULON_LOGO_IMAGE),
            url: "https://www.nibulon.com/",
            alt: "НІБУЛОН"
        },
        {
            imgSrc: getStaticFile(Constants.COMPANY_ALTERAAZTECA_LOGO_IMAGE),
            url: "https://alteragruma.com/",
            alt: "АЛЬТЕРА АЦТЕКА МІЛИНГ УКРАЇНА"
        },
        {
            imgSrc: getStaticFile(Constants.COMPANY_DUNAGRARIAN_LOGO_IMAGE),
            url: "https://dunagrarian.com/",
            alt: "ДУНАЙСЬКИЙ АГРАРІЙ"
        },
        {
            imgSrc: getStaticFile(Constants.COMPANY_PRODEXIM_LOGO_IMAGE),
            url: "https://prodexim.com.ua/",
            alt: "ПРОДЕКСІМ"
        },
        {
            imgSrc: getStaticFile(Constants.COMPANY_KIVSHOVATA_LOGO_IMAGE),
            url: "https://kivshovata-agro.com.ua/",
            alt: "КІВШОВАТА АГРО"
        },
        {
            imgSrc: getStaticFile(Constants.COMPANY_AGROTRADE_LOGO_IMAGE),
            url: "https://at2000.com.ua/",
            alt: "Агротрейд-2000"
        },
        {
            imgSrc: getStaticFile(Constants.COMPANY_RAMBURS_LOGO_IMAGE),
            url: "https://www.ramburs.com/", 
            alt: "Рамбурс"
        }
    ]
};

export const lockServicesWindowScroll = ({ root, swiper }: IChangeServicesWindowScrollProps) => {
    if (window.innerWidth < 768) return;

    if (getAttributeState(Constants.SCROLL_TO_TOP_ACTIVE_ATTRIBUTE)) return;
    
    if (root.current && swiper.current) {
        root.current.style.overflow = "hidden";

        swiper.current.swiper.enable(); 
    }
}

export const unlockServicesWindowScroll = ({ root, swiper }: IChangeServicesWindowScrollProps) => {
    if (window.innerWidth < 768) return;
    
    if (root.current && swiper.current) {
        swiper.current.swiper.disable();

        root.current.style.overflow = "";
    }
}