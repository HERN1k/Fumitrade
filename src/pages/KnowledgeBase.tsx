import { FC, lazy, useEffect, useState } from "react";
import { IKnowledgeBaseItem, IPageProps } from "../types.ts";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { 
    getCanonicalUrlForHelmet, 
    getKeywordsForHelmet, 
    getPhotoUriForHelmet,
    TranslateOnAxis
} from "../scripts/appWrapperScripts.ts";
import Constants from "../constants.ts";
import Header from "../scripts/header.ts";
import MicroMarkup from "../components/general/MicroMarkup.tsx";
import styles from "../styles/KnowledgeBase.module.css";
import { Link } from "react-router";
import Window from "../components/general/Window.tsx";
import { getStaticFile } from "../scripts/mainPageScripts.ts";
import { trimWithDots } from "../scripts/servicesScripts.ts";
import AppearanceAnimation from "../components/general/AppearanceAnimation.tsx";
import { handleHashChange } from "../scripts/knowledgeBaseScripts.ts";
import KnowledgeItem from "../components/knowledge-base/KnowledgeItem.tsx";
import { getKnowledgeItemsCollection } from "../scripts/knowledgeBaseScripts.ts";
const ScrollIndicator = lazy(() => import("../components/general/ScrollIndicator.tsx"));

const KnowledgeBase: FC<IPageProps> = ({ id }) => {

    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768);
    const [itemsCollection] = useState<IKnowledgeBaseItem[]>(getKnowledgeItemsCollection());

    const { t } = useTranslation();

    useEffect(() => { 
        Header.ensureVisible();

        handleHashChange();

        window.addEventListener("resize", onResize);
        window.addEventListener("hashchange", handleHashChange);
        
        return () => {
            window.removeEventListener("resize", onResize);
            window.removeEventListener("hashchange", handleHashChange);
        }
    }, []);

    const onClickLink = (): void => handleHashChange();
    const onResize = (): void => setIsMobile(window.innerWidth <= 768);

    return (
        <>  
            <Helmet key={window.location.pathname}>
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
                <meta property="og:image" content={getPhotoUriForHelmet(Constants.ICON_IMAGE)} />
            </Helmet>

            <MicroMarkup json={
                JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        {
                            "@type": "Question",
                            "name": "Що таке фумігація?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Фумігація — це процес знезараження сільськогосподарських культур за допомогою газових препаратів."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Як часто потрібно проводити дезінсекцію?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Рекомендовано проводити профілактичну дезінсекцію не рідше одного разу на півроку."
                            }
                        }
                    ]
                })} />

            <Window id={id} className={styles.window}>
                <ScrollIndicator />

                <div 
                    className={styles.mainBG} 
                    style={{backgroundImage: `url(${getStaticFile(Constants.KNOWLEDGE_BASE_PAGE_BG_IMAGE)})`}} />
                
                <AppearanceAnimation 
                    initialPosition={Constants.BASE_APPEARANCE_ANIMATION.clone()}
                    delay={500} 
                    className={styles.title}>
                    {t("knowledge_base_page.title")}
                </AppearanceAnimation>

                <div className={styles.mainContainer}>
                    {!isMobile 
                        ? <AppearanceAnimation 
                            initialPosition={new TranslateOnAxis(-3, "rem", "X")}
                            delay={750} 
                            duration={0.5}
                            className={styles.navContainer}>
                            <ul className={styles.ul}>
                                {itemsCollection.map((item) => (
                                    <li className={styles.li} key={item.id}>
                                        <Link 
                                            to={`#section${item.id}`}
                                            onClick={onClickLink}
                                            className={styles.link}>
                                            {trimWithDots(item.title, 32)}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </AppearanceAnimation>
                        : null }
                    
                    <AppearanceAnimation 
                        initialPosition={new TranslateOnAxis(-2, "rem", "Y")}
                        delay={1000} 
                        duration={0.5}
                        threshold={0.01}
                        className={styles.contentContainer}>
                        {itemsCollection.map((item) => <KnowledgeItem args={item} key={item.id} />)}
                    </AppearanceAnimation>
                </div>
            </Window>
        </>
    );
}

export default KnowledgeBase;