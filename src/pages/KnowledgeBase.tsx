import { FC, lazy, useEffect } from "react";
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
const ScrollIndicator = lazy(() => import("../components/general/ScrollIndicator.tsx"));

const KnowledgeBase: FC<IPageProps> = ({ id }) => {

    const { t } = useTranslation();

    useEffect(() => { 
        Header.ensureVisible();

        handleHashChange();
    }, []);

    const onClickLink = () => {
        handleHashChange();
    }

    const textsCollection: IKnowledgeBaseItem[] = [
        {
            id: 1,
            title: "Общие сведения",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
            id: 2,
            title: "Процедура фумигации",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        },
        {
            id: 3,
            title: "Контроль качества",
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
    ];

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
                
                    <AppearanceAnimation 
                        initialPosition={new TranslateOnAxis(-3, "rem", "X")}
                        delay={750} 
                        duration={0.5}
                        className={styles.navContainer}>
                        <ul className={styles.ul}>

                            {textsCollection.map((item) => (
                                <li className={styles.li}>
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
                    
                    <AppearanceAnimation 
                        initialPosition={new TranslateOnAxis(-2, "rem", "Y")}
                        delay={1000} 
                        duration={0.5}
                        className={styles.contentContainer}>
                        {textsCollection.map((item) => (
                            <div 
                                id={`#section${item.id}`} 
                                key={item.id}
                                style={{height: "50dvh"}}>
                                <h2>
                                    {item.title}
                                </h2>
                                <p>
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </AppearanceAnimation>
                </div>
            </Window>
        </>
    );
}

export default KnowledgeBase;