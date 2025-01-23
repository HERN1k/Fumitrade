import { FC } from "react";
import Typed from "typed.js";

export interface IWindowProps {
    id: string;
    children: React.ReactNode;
}

export interface IPageProps {
    id: string;
}

export interface IBurgerButton {
    toggleMenu: () => void;
}

export interface ISlideTrustUsData {
    url: string;
    imgSrc: string;
    alt: string;
}

export interface ISlidesTrustUs {
    data: ISlideTrustUsData[]; 
}

export interface IAppWrapperOnResizeArgs {
    setMenu: React.Dispatch<React.SetStateAction<FC>>;
    headerRef: React.MutableRefObject<HTMLDivElement | null>;
}

export interface IAppWrapperOnScrollArgs {
    containerRef: React.MutableRefObject<HTMLDivElement | null>;
    scrollPositionRef: React.MutableRefObject<number>;
    headerRef: React.MutableRefObject<HTMLDivElement | null>;
}

export interface ICreateTyped {
    typed: React.MutableRefObject<Typed | null>; 
    typedRef: React.MutableRefObject<HTMLDivElement | null>;
    strings: string[];
}