import { FC } from "react";
import styles from "../../styles/AppWrapper.module.css";
import { useTranslation } from "react-i18next";
import Constants from "../../constants";
import { formattingPhoneNumber, getStaticFile } from "../../scripts/appWrapperScripts";
import { Link } from "react-router";
import { Facebook } from "./Svgs";

const Footer: FC = () => {

    const { t } = useTranslation();

    return (
        <footer className={styles.footer}>
            <div className={styles.footerTop}>
                <div className={styles.footerWorkTogether}>
                    <h1 className={styles.footerTitle}>
                        {t("appWrapper.lets_work_together")}

                        <span className={styles.footerTitleSpan}>
                            { window.innerWidth > 1500 ? "一一" : " " }
                        </span>

                        <a href={`mailto:${Constants.COMPANY_EMAIL}`} className={styles.footerTitleAnchor}>{Constants.COMPANY_EMAIL}</a>
                    </h1>

                    <Link to="/">
                        <img src={getStaticFile(Constants.LOGO_IMAGE)} alt={Constants.COMPANY_NAME} className={styles.footerLogoImg} />
                    </Link>
                </div>

                <div className={styles.footerContacts}>
                    <div className={styles.footerContact}>
                        <h2 className={styles.footerContactText}>{t("appWrapper.our_location")}</h2>
                        <a className={styles.footerContactAnchor} target="_blank" href={Constants.COMPANY_GOOGLE_MAPS_URL}>
                            <h2 className={styles.footerContactText}>{t("appWrapper.location")}</h2>
                        </a>
                    </div>

                    <div className={styles.footerContact}>
                        <h2 className={styles.footerContactText}>{t("appWrapper.call_us")}</h2>
                        <div>
                            <a className={styles.footerContactAnchor} target="_blank" href={formattingPhoneNumber(Constants.COMPANY_FIRST_PHONE_NUMBER)}>
                                <h2 className={styles.footerContactText}>{Constants.COMPANY_FIRST_PHONE_NUMBER}</h2>
                            </a>
                            <a className={styles.footerContactAnchor} target="_blank" href={formattingPhoneNumber(Constants.COMPANY_SECOND_PHONE_NUMBER)}>
                                <h2 className={styles.footerContactText}>{Constants.COMPANY_SECOND_PHONE_NUMBER}</h2>
                            </a>
                        </div>
                    </div>

                    <div className={styles.footerContact}>
                        <h2 className={styles.footerContactText}>{t("appWrapper.connect")}</h2>
                        <a className={styles.footerFbButton} target="_blank" href={Constants.COMPANY_FACEBOOK_URL}>
                            <Facebook className={styles.footerFbSvg} />
                        </a>
                    </div>
                </div>
            </div>

            <div className={styles.footerBottom}>
                <p className={styles.footerText}>
                    <Link to="/">
                        <span className={styles.footerSpan}>{Constants.COMPANY_NAME + " "}</span> 
                    </Link>
                    &copy;{" " + Constants.YEAR_OF_WEBSITE_CREATION.toString()}
                </p>

                <div className={styles.footerBottomLine}/>

                <p className={styles.footerText}>
                    {t("appWrapper.created_with_love_by")}
                    <a className={styles.footerContactAnchor} target="_blank" href={Constants.DEVELOPER_CONNECTION_URL}> 
                        <span className={styles.footerSpan}>{" " + Constants.DEVELOPER_NAME}</span>
                    </a>
                </p>
            </div>
        </footer>
    );
}

export default Footer;