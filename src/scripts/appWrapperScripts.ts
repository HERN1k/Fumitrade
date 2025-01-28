import { IAppWrapperOnResizeArgs, IAppWrapperOnScrollArgs } from "../types.ts";
import styles from "../styles/AppWrapper.module.css";
import PCMenu from "../components/general/PCMenu.tsx";
import MobileMenu from "../components/general/MobileMenu.tsx";
import Constants from "../constants.ts";
import { Dispatch, SetStateAction } from "react";

export const onResize = (args: IAppWrapperOnResizeArgs) => {
    const headerElement = document.getElementById(Constants.HEADER_ID);

    if (!headerElement) return;

    if (window.innerWidth > 768) {
        args.setMenu(() => PCMenu);
        headerElement.classList.remove(styles.headerMobile);
    } else {
        args.setMenu(() => MobileMenu);
        headerElement.classList.add(styles.headerMobile);
    }
}

export const onScroll = (args: IAppWrapperOnScrollArgs) => {

    let changeHeaderVisibility = sessionStorage.getItem(Constants.CHANGE_HEADER_VISIBILITY);

    if (!changeHeaderVisibility) {
        sessionStorage.setItem(Constants.CHANGE_HEADER_VISIBILITY, true.toString());
        changeHeaderVisibility = true.toString();
    }

    if (changeHeaderVisibility === false.toString()) return;

    const rootElement = document.getElementById(Constants.ROOT_CONTAINER_ID);
    const headerElement = document.getElementById(Constants.HEADER_ID);

    if (!headerElement || !rootElement) return;

    const currentScrollPosition = rootElement.scrollTop || 0;

    if (currentScrollPosition === 0 || args.scrollPositionRef.current === 0) {
        headerElement.classList.remove(styles.headerVisible);
        headerElement.classList.add(styles.headerVisibleWithTransparent);
    } else if (currentScrollPosition > args.scrollPositionRef.current) {
        headerElement.classList.remove(styles.headerVisible);
        headerElement.classList.remove(styles.headerVisibleWithTransparent);
    } else if (currentScrollPosition < args.scrollPositionRef.current) {
        headerElement.classList.remove(styles.headerVisibleWithTransparent);
        headerElement.classList.add(styles.headerVisible);
    }

    args.scrollPositionRef.current = currentScrollPosition;
};

export const getStaticFile: (name: string) => string = (name: string) => {
    return Constants.STATIC_FILES_PATH + name;
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

export const changeDocument = () => {
    document.title = Constants.DOCUMENT_TITLE;

    (document.querySelector('link[rel="icon"]') as HTMLLinkElement).href = getStaticFile(Constants.LOGO_ICON_IMAGE);
}

export const onResizeFooter = (setHyphen: Dispatch<SetStateAction<string>>) => window.innerWidth > 1440 ? setHyphen("一一") : setHyphen("\n");

export const scrollToElement = (element: HTMLElement | null): Promise<void> => {
    return new Promise((resolve) => {
        const rootElement = document.getElementById(Constants.ROOT_CONTAINER_ID);

        if (!element || !rootElement) {
            resolve();
            return;
        }

        const elementPosition = element.offsetTop;
        rootElement.scrollTo({
            top: elementPosition,
            behavior: "smooth",
        });

        const checkScroll = () => {
            const currentScrollPosition = rootElement.scrollTop;

            if (Math.abs(currentScrollPosition - elementPosition) < 1) {
                resolve();
            } else {
                requestAnimationFrame(checkScroll);
            }
        };

        requestAnimationFrame(checkScroll);
    });
}

export const transitionTo: (id: string) => void = (id: string) => {
    setTimeout(async () => {
        try {
            sessionStorage.setItem(Constants.CHANGE_HEADER_VISIBILITY, false.toString());

            const element = document.getElementById(id);

            const headerElement = document.getElementById(Constants.HEADER_ID);
    
            if (!headerElement) return;
    
            headerElement.classList.remove(styles.headerVisible);
            headerElement.classList.remove(styles.headerVisibleWithTransparent);

            await scrollToElement(element);
        } finally {
            sessionStorage.setItem(Constants.CHANGE_HEADER_VISIBILITY, true.toString());
        }
    }, 100);
}

export const transitionToTop = () => {
    setTimeout(() => {
        const rootElement = document.getElementById(Constants.ROOT_CONTAINER_ID);

        rootElement?.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
}