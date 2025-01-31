import { Dispatch, SetStateAction } from "react";
import Constants from "../constants.ts";
import styles from "../styles/Services.module.css";
import { IParseServiceDescriptionProps, IServiceModalProps } from "../types.ts";

export const getStaticFile = (name: string) => Constants.STATIC_FILES_PATH + name;

export const addLineBreaks = (str: string) => {
    var result = str.replace(/ /g, "\n");

    return result.length > 0 ? result.replace(/\t/g, " ") : "Null";
};

export const trimWithDots = (str: string, maxLength: number) => {
    var result = str.length > maxLength ? str.slice(0, maxLength - 3) + "..." : str;

    return result.length > 0 ? result : "Null";
};

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
            var serviceButton: HTMLDivElement | null = null;

            if (child instanceof HTMLDivElement && child.classList.contains(styles.serviceFogging)) {
                child.classList.toggle(styles.serviceFoggingHover);
            }

            if (child instanceof HTMLDivElement && child.classList.contains(styles.serviceButton)) {
                child.classList.toggle(styles.serviceButtonHover);
                serviceButton = child;
            }

            serviceButton?.childNodes.forEach((buttonChild) => {
                if (buttonChild instanceof SVGSVGElement && buttonChild.classList.contains(styles.serviceButtonArrowSvg)) {
                    buttonChild.classList.toggle(styles.serviceButtonArrowSvgHover);
                }
            });
        });
    }
}

export const parseServiceDescription = (args: IParseServiceDescriptionProps) => {
    if (!args.description || args.description.length == 0) return;

    const lines = args.description
        .split("\t")
        .map(item => item.trim())
        .filter(item => item.length > 0);

    args.setMainDescription(lines[0] || "Null");

    if (lines.length > 1) {
        args.setDescriptionItems(new Array<string>(...lines.slice(1)));
    }
}

export const onResizeModal = (setDisplayPropery: Dispatch<SetStateAction<string>>) => {
    if (window.innerWidth > 768) {
        setDisplayPropery("flex");
    } else {
        setDisplayPropery("none");
    }
}

export const onPreviousModalClick = (args: IServiceModalProps) => {
    args.handleClose();

    setTimeout(() => {
        args.previousServiceModalSetter ? args.previousServiceModalSetter(true) : null;
    }, 250)
};

export const onNextModalClick = (args: IServiceModalProps) => {
    args.handleClose();

    setTimeout(() => {
        args.nextServiceModalSetter ? args.nextServiceModalSetter(true) : null;
    }, 250)
};