import { FC, useEffect } from "react";
import { IPageProps } from "../types.ts";
import Window from "../components/general/Window.tsx";
import { Link } from "react-router";
import styles from "../styles/NotFound.module.css";
import { ensureHeaderVisible, getStaticFile } from "../scripts/appWrapperScripts.ts";
import Constants from "../constants.ts";
import { useTranslation } from "react-i18next";

const NotFound: FC<IPageProps> = ({ id }) => {

    const { t } = useTranslation();

    useEffect(() => { 
        ensureHeaderVisible();

        document.title = t("appWrapper.documentTitles.page_not_found");

        document.getElementById(Constants.ROOT_CONTAINER_ID)?.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    return (
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
    );
};

export default NotFound;