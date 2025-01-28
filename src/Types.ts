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
}

export interface IAppWrapperOnScrollArgs { 
    scrollPositionRef: React.MutableRefObject<number>;
}

export interface ICreateTyped {
    typed: React.MutableRefObject<Typed | null>; 
    typedRef: React.MutableRefObject<HTMLDivElement | null>;
    strings: string[];
}