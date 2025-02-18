import { FC, MouseEvent, useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import PopupBackdrop from "./PopupBackdrop";
import styles from "../../styles/Popup.module.css";
import { useTranslation } from "react-i18next";
import { getPrivacyPolicyUrl, removeNewLineIfMobile } from "../../scripts/appWrapperScripts.ts";
import Constants from "../../constants.ts";

const CookiePopup: FC = () => {

    const [popupOpen, setPopupOpen] = useState<boolean>(false);

    const { t } = useTranslation();

    const open = (): void => {
        setTimeout(() => { 
            if (!localStorage.getItem(Constants.COOKIES_ACCEPT_KEY)) {
                setPopupOpen(true);
            }
        }, 1000);
    }

    const reject = (): void => {
        localStorage.removeItem(Constants.COOKIES_ACCEPT_KEY);

        localStorage.setItem(Constants.COOKIES_ACCEPT_KEY, false.toString());

        setPopupOpen(false);
    }

    const accept = (): void => {
        localStorage.removeItem(Constants.COOKIES_ACCEPT_KEY);

        localStorage.setItem(Constants.COOKIES_ACCEPT_KEY, true.toString());

        setPopupOpen(false);
    }

    const stopPropagation = (e: MouseEvent) => e.stopPropagation();

    useEffect(() => { open() }, []);

    return (
        <AnimatePresence
            initial={false}
            onExitComplete={() => null}>
            {popupOpen && 
                <PopupBackdrop onClick={reject}>
                    <div className={styles.popupContainer} onClick={stopPropagation}>
                        <p className={styles.question}>
                            {t("appWrapper.popupCookie.question")}
                        </p>
 
                        <div className={styles.interesticContainer}>
                            <a className={styles.learnMore} href={getPrivacyPolicyUrl()} target="_blank">
                                <p className={styles.learnMoreText}>
                                    {removeNewLineIfMobile(t("appWrapper.popupCookie.learnMore"))}
                                </p>
                                
                                <span className={styles.learnMoreSpan}>
                                    &gt;
                                </span>
                            </a>

                            <div className={styles.buttonsContainer}>
                                <button className={styles.buttonReject} onClick={reject}>
                                    {t("appWrapper.popupCookie.reject")}
                                </button>

                                <button className={styles.buttonAccept} onClick={accept}>
                                    {t("appWrapper.popupCookie.accept")}
                                </button>
                            </div>
                        </div>
                    </div>
                </PopupBackdrop>}
        </AnimatePresence>
    );
}

export default CookiePopup;