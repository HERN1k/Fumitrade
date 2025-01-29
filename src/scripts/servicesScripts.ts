import { MutableRefObject } from "react";
import Constants from "../constants.ts";
import styles from "../styles/Services.module.css";

export const getStaticFile = (name: string) => Constants.STATIC_FILES_PATH + name;

export const addLineBreaks = (str: string) => str.replace(/ /g, "\n");

export const trimWithDots = (str: string, maxLength: number) => str.length > maxLength ? str.slice(0, maxLength - 3) + "..." : str;

export const servicesWindowInView = (inView: boolean) => {
    setTimeout(() => {
        if (inView) {
            var title = document.getElementsByClassName(styles.navigationTitle)[0];
            var text = document.getElementsByClassName(styles.navigationText)[0];

            if (title && text) {
                title.classList.add(styles.textInView);
                text.classList.add(styles.textInView);
            }
        }
    }, 250);
}

export const serviceInView = (inView: boolean, container: HTMLDivElement | null) => {
    setTimeout(() => {
        if (inView && container) {
            container.classList.add(styles.serviceInView);
        }
    }, 100);
}

export const onServiceHover = (element: HTMLDivElement | null) => {
    if (element) {
        element.childNodes.forEach((child) => {
            var popupButton: HTMLDivElement | null = null;

            if (child instanceof HTMLDivElement && child.classList.contains(styles.serviceFogging)) {
                child.classList.toggle(styles.serviceFoggingHover);
            }

            if (child instanceof HTMLDivElement && child.classList.contains(styles.popupButton)) {
                child.classList.toggle(styles.popupButtonHover);
                popupButton = child;
            }

            popupButton?.childNodes.forEach((buttonChild) => {
                if (buttonChild instanceof SVGSVGElement && buttonChild.classList.contains(styles.popupButtonArrowSvg)) {
                    buttonChild.classList.toggle(styles.popupButtonArrowSvgHover);
                }
            });
        });
    }
}
