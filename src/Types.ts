import { Dispatch, FC, SetStateAction } from "react";
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

export interface IServiceProps {
    id: string;
    imgSrc: string;
    title: string;
    description: string;
    modalOpen: boolean;
    previousServiceModalSetter: Dispatch<SetStateAction<boolean>> | null;
    thisServiceModalSetter: Dispatch<SetStateAction<boolean>>;
    nextServiceModalSetter: Dispatch<SetStateAction<boolean>> | null;
}

export interface IParseServiceDescriptionProps {
    description: string;
    setMainDescription: Dispatch<SetStateAction<string>>;
    setDescriptionItems: Dispatch<SetStateAction<string[]>>;
}

export interface IServiceModalProps {
    handleClose: () => void;
    modalOpen: boolean;
    imgSrc: string;
    title: string;
    description: string;
    previousServiceModalSetter: Dispatch<SetStateAction<boolean>> | null;
    nextServiceModalSetter: Dispatch<SetStateAction<boolean>> | null;
}