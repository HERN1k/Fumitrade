import { FC, useEffect } from "react";
import { IPageProps } from "../types.ts";
import Window from "../components/general/Window.tsx";
import { Link } from "react-router";
import styles from "../styles/NotFound.module.css";
import { getStaticFile, transitionToTop } from "../scripts/appWrapperScripts.ts";
import Constants from "../constants.ts";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { 
    getCanonicalUrlForHelmet, 
    getKeywordsForHelmet, 
    getPhotoUriForHelmet 
} from "../scripts/appWrapperScripts.ts";
import Header from "../scripts/header.ts";

const NotFound: FC<IPageProps> = ({ id }) => {

    const { t } = useTranslation();

    useEffect(() => { 
        transitionToTop();

        Header.ensureVisible();
    }, []);

    return (
        <>
            <Helmet key={window.location.pathname}>
                <title>{t("pages_helmet.page_not_found.title")}</title>
                <meta name="description" content={t("pages_helmet.page_not_found.description")} />
                <meta name="keywords" content={getKeywordsForHelmet(t("pages_helmet.page_not_found.keywords"))} />
                <meta name="robots" content={Constants.ROBOTS_NOINDEX} />
                <meta property="og:type" content={t("pages_helmet.page_not_found.openGraphType")} />
                <meta property="og:url" content={getCanonicalUrlForHelmet(t("pages_helmet.page_not_found.canonicalPath"))} />
                <meta property="og:site_name" content={Constants.COMPANY_NAME} />
                <meta property="og:title" content={t("pages_helmet.page_not_found.title")} />
                <meta property="og:description" content={t("pages_helmet.page_not_found.description")} />
                <meta property="og:image" content={getPhotoUriForHelmet(Constants.ICON_IMAGE)} />
            </Helmet>

            <Window id={id}>
                <div className={styles.container}>
                    <img src={getStaticFile(Constants.NOT_FOUND_IMAGE)} alt="Not Found" className={styles.image} />
                    <p className={styles.message}>{t("notFoundWindow.page_not_found")}</p>
                    <p className={styles.description}>
                        {t("notFoundWindow.you_may_have_entered_the_wrong_address") + " "}<br />
                        {t("notFoundWindow.or_the_page_has_been_moved")}
                    </p>
                    <Link to="/" className={styles.homeButton}>
                        {t("notFoundWindow.to_the_main_page")}
                    </Link>
                </div>
            </Window>
        </>
    );
};

export default NotFound;