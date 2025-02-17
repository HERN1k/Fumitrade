import { Dispatch, FC, JSX, MutableRefObject, ReactNode, SetStateAction } from "react";
import { SwiperRef } from "swiper/react";
import Typed from "typed.js";
import { TranslateOnAxis } from "./scripts/appWrapperScripts.ts";

export interface IWindowProps {
    id: string;
    children: React.ReactNode;
    sticky?: boolean;
    className?: string;
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

export interface IElementBase {
    id: string
}

export interface IServiceProps extends IElementBase {
    imgSrc: string;
    title: string;
    description: string;
    modalOpen: boolean;
    closeModal: () => void,
    previousModalOpen: (() => void) | null;
    thisModalOpen: () => void;
    nextModalOpen: (() => void) | null;
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
    previousModalOpen: (() => void) | null;
    nextModalOpen: (() => void) | null;
}

export interface ICounterProps {
    min: number;
    max: number;
    textAfter?: string; 
    timeout?: number;
    className: string;
}

export interface IAnimationInViewProps {
    children: ReactNode; 
    delay: number; 
    style: any;
    threshold?: number;
    duration?: number;
}

export interface IChartData {
    x: number;
    y: number;
}

export interface IUseScrollTrackerProps {
    scrollContainerId?: string;
}

export interface IUseScrollTrackerResult {
    scrollDir: "up" | "down" | null;
    scrollProgress: number | null;
}

export interface IChangeServicesWindowScrollProps {
    root: MutableRefObject<HTMLDivElement | null>;
    swiper: MutableRefObject<SwiperRef | null>;
}

export interface IServiceInMainPageProps {
    id: string;
    imgSrc: string;
    title: string;
    description: string;
}

export interface IAppearanceAnimationProps {
    children: ReactNode;
    initialPosition: TranslateOnAxis;
    threshold?: number;
    delay?: number;
    duration?: number;
    style?: any;
}

export interface IMicroMarkupProps {
    json: string;
}

export interface IServiceModalBackdropProps {
    children: JSX.Element; 
    onClick: () => void;
}

export interface IPopupBackdropProps {
    children: JSX.Element; 
    onClick: () => void;
}

export interface IContactsWindowProps {
    sticky?: boolean;
}

export interface IEmailInputs {
    firstName: string;
    lastName: string;
    company: string;
    email: string;
    message: string;
}