import { IAppWrapperOnResizeArgs, IElementBase } from "../types.ts";
import styles from "../styles/AppWrapper.module.css";
import PCMenu from "../components/general/PCMenu.tsx";
import MobileMenu from "../components/general/MobileMenu.tsx";
import Constants from "../constants.ts";
import { Dispatch, SetStateAction } from "react";
import Header from "./header.ts";
import Swal, { SweetAlertOptions } from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const onResize = (args: IAppWrapperOnResizeArgs) => {
    const headerElement = document.getElementById(Constants.HEADER_ID);

    if (!headerElement) return;

    if (window.innerWidth > 768) {
        args.setMenu(() => PCMenu);

        if (headerElement.classList.contains(styles.headerMobile)) {
            headerElement.classList.remove(styles.headerMobile);
        }
    } else {
        args.setMenu(() => MobileMenu);

        if (!headerElement.classList.contains(styles.headerMobile)) {
            headerElement.classList.add(styles.headerMobile);
        }
    }
}

export const removeNewLineIfMobile = (text: string): string => {
    if (window.innerWidth > 768) return text;

    return text.replace(/\n/g, " ");
}

export const getStaticFile = (photoName: string): string => {
    return Constants.STATIC_FILES_PATH + photoName;
}

export const getPrivacyPolicyUrl = (): string => {
    return Constants.BASE_URL + Constants.BASE_URL_UNDER_PATH + Constants.PRIVACY_POLICY;
}

export const getPhotoUriForHelmet = (photoName: string): string => {
    return Constants.BASE_URL + Constants.STATIC_FILES_PATH + photoName;
}

export const getCanonicalUrlForHelmet = (path: string): string => {
    return Constants.BASE_URL + Constants.BASE_URL_UNDER_PATH + path;
}

export const getFormattedPhoneNumberForHelmet = (phoneNumber: string): string => {
    return phoneNumber.replace(/[\s()-]/g, "");
}

export const getBaseUrlForHelmet = (): string => {
    return Constants.BASE_URL + Constants.BASE_URL_UNDER_PATH;
}

export const getKeywordsForHelmet = (keywords: string): string => {
    return (
        Constants.BASE_KEYWORDS_HELMET + 
        Constants.KEYWORDS_HELMET_UA + 
        Constants.KEYWORDS_HELMET_RU + 
        Constants.KEYWORDS_HELMET_EN +
        keywords
    );
}

export const formattingPhoneNumber: (phoneNumber: string) => string = (phoneNumber: string) => {
    return "tel:" + phoneNumber.replace(/[\s()-]/g, "");
}

export const preventDefault: (event: Event) => void = (event: Event) => event.preventDefault();

export const toggleMobileMenu: () => void = () => {
    const menu: HTMLElement | null = document.getElementById("BurgerMenuButton");
    
    if (menu) {
        menu.classList.toggle("opened");
        menu.setAttribute("aria-expanded", menu.classList.contains("opened").toString());
    
        const menuContainer = document.getElementById("menuContainer");
    
        menuContainer?.classList.toggle("menu-main-opened");
    
        if (menu.classList.contains("opened")) {
            document.body.style.overflow = "hidden";
            window.addEventListener("scroll", preventDefault);
            window.addEventListener("wheel", preventDefault, { passive: false });
            window.addEventListener("touchmove", preventDefault, { passive: false });
        } else {
            document.body.style.overflow = "";
            window.removeEventListener("scroll", preventDefault);
            window.removeEventListener("wheel", preventDefault);
            window.removeEventListener("touchmove", preventDefault);
        }
    }
}

export const onResizeFooter = (setHyphen: Dispatch<SetStateAction<string>>) => window.innerWidth > 1440 ? setHyphen("一一") : setHyphen("\n");

const scrollToElement = (element: HTMLElement | null): Promise<void> => {
    return new Promise((resolve, reject) => {
        try {
            const rootElement = document.getElementById(Constants.ROOT_CONTAINER_ID);

            if (!element || !rootElement) {
                resolve();
                return;
            }

            const elementPosition = element.getBoundingClientRect().top + rootElement.scrollTop;
            const targetPosition = elementPosition;

            const observer = new ResizeObserver(() => {
                element.scrollIntoView({ behavior: "smooth", block: "center" });

                let iterations = 0;

                const interval = setInterval(() => {
                    iterations++;

                    if (iterations == 20) {
                        clearInterval(interval);
                        resolve();
                    }

                    const currentScrollPosition = rootElement.scrollTop;
                    
                    if (Math.abs(currentScrollPosition - targetPosition) < 1) {
                        clearInterval(interval);
                        resolve();
                    }
                }, 50);
            
                observer.disconnect();
            });
            
            observer.observe(element);
        } catch (e) {
            reject(e);
        }
    });
}

export const transitionToElement = (element: HTMLElement | null) => {
    if (!element) return;

    setTimeout(async () => {
        Header.setNoVisible();

        Header.block();

        await scrollToElement(element)
            .catch((error) => console.error(error))
            .finally(() => Header.unBlock());
    }, 250);
}

export const transitionTo = (id: string) => {
    setTimeout(async () => {
        Header.setNoVisible();

        Header.block();

        var element = document.getElementById(id);

        await scrollToElement(element)
            .catch((error) => console.error(error))
            .finally(() => Header.unBlock());
    }, 250);
}

export const transitionToTop = () => {
    setTimeout(() => {
        try {
            Header.setVisibleWithTransparent();

            Header.block();

            var root = document.getElementById(Constants.ROOT_CONTAINER_ID);

            if (root) {
                root.scrollTop = 0;
            }
        } finally {
            Header.unBlock();
        }
    }, 50);
}

export function transitionToHash<T extends IElementBase>(
    hash: string, 
    itemCollection: T[], 
    key: keyof T 
): HTMLElement | null {
    if (!hash) return null;
    if (!itemCollection || itemCollection.length === 0) return null;
    if (!key) return null;

    var query = decodeURIComponent(window.location.hash.substring(1));

    var index = Number(query);

    var id: string | null = null;

    Number.isNaN(index)
        ? id = itemCollection.find((item) => item[key] === query)?.id || null
        : id = itemCollection[index - 1]?.id || null;

    if (!id) return null;

    var element = document.getElementById(id);

    if (!element) return null;
    
    transitionToElement(element);

    return element;
}

export const copyToClipboard = async (hash :string, successMessage: SweetAlertOptions, errorMessage: SweetAlertOptions): Promise<void> => {

    var lines = window.location.href.split("#");

    if (lines.length < 1) return;

    var url: string = lines[0] + `#${encodeURIComponent(hash)}`;

    if (!url) return;

    try {
        await navigator.clipboard.writeText(url);
    } catch (e) {
        copyToClipboardOld(url, successMessage, errorMessage);

        return;
    }

    withReactContent(Swal).fire(successMessage);
}

const copyToClipboardOld = (text: string, successMessage: SweetAlertOptions, errorMessage: SweetAlertOptions): void => {
    try {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
    } catch (e) {
        withReactContent(Swal).fire(errorMessage);
    }

    withReactContent(Swal).fire(successMessage);
}

export class TranslateOnAxis {

    static readonly ZERO_X: TranslateOnAxis = new TranslateOnAxis(0, "px", "X");
    static readonly ZERO_Y: TranslateOnAxis = new TranslateOnAxis(0, "px", "Y");
    static readonly BASE: string = "translate(0, 0)";
    static readonly BASE_WITH_SEMICOLON: string = "translate(0, 0);";

    _position: number = 0;
    _units: "px" | "%" | "em" | "rem" | "dvw" | "dvh" | "vw" | "vh" = "px";
    _axis: "X" | "Y" = "X";

    constructor(
        position: number = 0, 
        units: "px" | "%" | "em" | "rem" | "dvw" | "dvh" | "vw" | "vh" = "px",
        axis: "X" | "Y" = "X"
    ) {
        this._position = position;
        this._units = units;
        this._axis = axis;
    }

    set(
        position: number = 0, 
        units: "px" | "%" | "em" | "rem" | "dvw" | "dvh" | "vw" | "vh" = "px",
        axis: "X" | "Y" = "X"
    ): void {
        this._position = position;
        this._units = units;
        this._axis = axis;
    }

    setPosition(position: number = 0): void {
        this._position = position;
    }

    setUnits(units: "px" | "%" | "em" | "rem" | "dvw" | "dvh" | "vw" | "vh" = "px"): void {
        this._units = units;
    }

    setAxis(axis: "X" | "Y" = "X"): void {
        this._axis = axis;
    }

    get(): { 
        position: number, 
        units: "px" | "%" | "em" | "rem" | "dvw" | "dvh" | "vw" | "vh",
        axis: "X" | "Y"
    } {
        return { 
            position: this._position,
            units: this._units,
            axis: this._axis
        };
    }

    getPosition(): number {
        return this._position;
    }

    getUnits(): "px" | "%" | "em" | "rem" | "dvw" | "dvh" | "vw" | "vh" {
        return this._units;
    }

    getAxis(): "X" | "Y" {
        return this._axis;
    }

    getZero(semicolon: boolean = false): string {
        return `translate${this._axis}(0${this._units})${semicolon ? ";" : ""}`;
    }

    clone(): TranslateOnAxis {
        return new TranslateOnAxis(this._position, this._units, this._axis);
    }

    equals(obj: TranslateOnAxis): boolean {
        return this._position === obj.getPosition() && this._units === obj.getUnits() && this._axis === obj.getAxis();
    }

    toString(semicolon: boolean = false) {
        return `translate${this._axis}(${this._position}${this._units})${semicolon ? ";" : ""}`;
    }
}