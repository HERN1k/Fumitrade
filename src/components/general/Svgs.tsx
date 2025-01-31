import { FC, MutableRefObject } from "react";
import { IBurgerButton } from "../../types.tsx";

export const BurgerButton : FC<IBurgerButton> = ({ toggleMenu }) => {
    return (
        <button className="menu" id="BurgerMenuButton" onClick={toggleMenu} aria-label="Main Menu">
            <svg width="3rem" height="3rem" viewBox="0 0 100 100">
                <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                <path className="line line2" d="M 20,50 H 80" />
                <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
            </svg>
        </button>
    );
}

export const Zipper : FC<{className: string}> = ({ className }) => {
    return (
        <svg className={className} width="22" height="47" viewBox="0 0 22 47" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.82217 -0.0020752L0.743164 23.4608H9.12185V46.6271L21.2579 15.4843H13.1797L19.2163 -0.0020752H5.82217Z" fill="#DCB426"></path>
        </svg>
    );
}

export const Facebook: FC<{className: string}> = ({ className }) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
        </svg>
    );
}

export const Arrow: FC<{ className: string }> = ({ className }) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" width="12" height="18" viewBox="0 0 12 18" fill="none">
            <path d="M0.22998 2.67019L6.80301 8.99978L0.22998 15.3294L2.71988 17.7271L11.7828 8.99978L2.71988 0.272505L0.22998 2.67019Z"></path>
        </svg>
    );
}

export const Close: FC<{className: string, onClick: () => void}> = ({ className, onClick }) => {
    return (
        <svg className={className} onClick={onClick} width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M19.207 6.207a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 1 0 1.414 1.414L12 13.414l5.793 5.793a1 1 0 0 0 1.414-1.414L13.414 12l5.793-5.793z" />
        </svg>
    );
}