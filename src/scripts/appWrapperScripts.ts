import { IAppWrapperOnResizeArgs, IAppWrapperOnScrollArgs } from "../types.ts";
import styles from "../styles/AppWrapper.module.css";
import PCMenu from "../components/general/PCMenu.tsx";
import MobileMenu from "../components/general/MobileMenu.tsx";
import Constants from "../constants.ts";

export const onResize = (args: IAppWrapperOnResizeArgs) => {
    if (window.innerWidth > 768) {
        args.setMenu(() => PCMenu);
        args.headerRef.current?.classList.remove(styles.headerMobile);
    } else {
        args.setMenu(() => MobileMenu);
        args.headerRef.current?.classList.add(styles.headerMobile);
    }
}

export const onScroll = (args: IAppWrapperOnScrollArgs) => {
    const currentScrollPosition = args.containerRef.current?.scrollTop || 0;

    if (currentScrollPosition == 0 || args.scrollPositionRef.current == 0) {
        args.headerRef.current?.classList.remove(styles.headerVisible);

        args.headerRef.current?.classList.add(styles.headerVisibleWithTransparent);
    } else if (currentScrollPosition > args.scrollPositionRef.current) {
        args.headerRef.current?.classList.remove(styles.headerVisible);

        args.headerRef.current?.classList.remove(styles.headerVisibleWithTransparent);
    } else if (currentScrollPosition < args.scrollPositionRef.current) {
        args.headerRef.current?.classList.remove(styles.headerVisibleWithTransparent);

        args.headerRef.current?.classList.add(styles.headerVisible);
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