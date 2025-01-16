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