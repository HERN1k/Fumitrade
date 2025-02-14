import { FC, lazy, useEffect } from "react";
import { IPageProps } from "../types.ts";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { 
    getCanonicalUrlForHelmet, 
    getKeywordsForHelmet, 
    getPhotoUriForHelmet 
} from "../scripts/appWrapperScripts.ts";
import Constants from "../constants.ts";
import Header from "../scripts/header.ts";
const ScrollIndicator = lazy(() => import("../components/general/ScrollIndicator.tsx"));

const KnowledgeBase: FC<IPageProps> = ({ id }) => {

    const { t } = useTranslation();

    useEffect(() => { 
        Header.ensureVisible();
    }, []);

    return (
        <>  
            <Helmet>
                <title>{t("pages_helmet.knowledge_base.title")}</title>
                <link rel="canonical" href={getCanonicalUrlForHelmet(t("pages_helmet.knowledge_base.canonicalPath"))} />
                <meta name="description" content={t("pages_helmet.knowledge_base.description")} />
                <meta name="keywords" content={getKeywordsForHelmet(t("pages_helmet.knowledge_base.keywords"))} />
                <meta name="robots" content={Constants.ROBOTS_INDEX} />
                <meta property="og:type" content={t("pages_helmet.knowledge_base.openGraphType")} />
                <meta property="og:url" content={getCanonicalUrlForHelmet(t("pages_helmet.knowledge_base.canonicalPath"))} />
                <meta property="og:site_name" content={Constants.COMPANY_NAME} />
                <meta property="og:title" content={t("pages_helmet.knowledge_base.title")} />
                <meta property="og:description" content={t("pages_helmet.knowledge_base.description")} />
                <meta property="og:image" content={getPhotoUriForHelmet(Constants.LOGO_IMAGE)} />
            </Helmet>

            <div id={id}>
                <ScrollIndicator />

            </div>
        </>
    );
}

export default KnowledgeBase;