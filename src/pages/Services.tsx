import { FC, useEffect, useState, lazy } from "react";
import { IPageProps, IServiceProps } from "../types.ts";
import Service from "../components/services/Service.tsx";
import Constants from "../constants.ts";
import styles from "../styles/Services.module.css";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { 
    getBaseUrlForHelmet,
    getCanonicalUrlForHelmet, 
    getKeywordsForHelmet, 
    getPhotoUriForHelmet,
    transitionToHash
} from "../scripts/appWrapperScripts.ts";
import Header from "../scripts/header.ts";
import MicroMarkup from "../components/general/MicroMarkup.tsx";
const ScrollIndicator = lazy(() => import("../components/general/ScrollIndicator.tsx"));
const ServicesHeader = lazy(() => import("../components/services/ServicesHeader.tsx"));

const Services: FC<IPageProps> = ({ id }) => {

    const { t } = useTranslation();
 
    const [modals, setModals] = useState<Record<string, boolean>>({
        service_1: false,
        service_2: false,
        service_3: false,
        service_4: false,
        service_5: false,
        service_6: false,
        service_7: false,
        service_8: false,
    });

    useEffect(() => { Header.ensureVisible() }, []);

    useEffect(() => { 
        transitionToHash(window.location.hash, servicesCollection, "title")?.click();
    }, [window.location.hash]);

    const openModal = (serviceKey: string): void => {
        setModals(prev => Object.fromEntries(Object.keys(prev)
            .map(key => serviceKey === key ? [key, true] : [key, false])));
    };

    const closeModal = (): void => {
        setModals(prev => Object.fromEntries(Object.keys(prev).map(key => [key, false])));
    };

    const servicesCollection: IServiceProps[] = [
        {
            id: Constants.SERVICES_PAGE_SERVICE_1_ID,
            imgSrc: Constants.SERVICES_PAGE_SERVICE_1_IMAGE,
            title: t("servicesWindow.services.service_1.title"),
            description: t("servicesWindow.services.service_1.description"),
            modalOpen: modals.service_1,
            closeModal: closeModal,
            previousModalOpen: () => openModal("service_8"),
            thisModalOpen: () => openModal("service_1"), 
            nextModalOpen: () => openModal("service_2") 
        },
        {
            id: Constants.SERVICES_PAGE_SERVICE_2_ID,
            imgSrc: Constants.SERVICES_PAGE_SERVICE_2_IMAGE,
            title: t("servicesWindow.services.service_2.title"),
            description: t("servicesWindow.services.service_2.description"),
            modalOpen: modals.service_2,
            closeModal: closeModal,
            previousModalOpen: () => openModal("service_1"),
            thisModalOpen: () => openModal("service_2"), 
            nextModalOpen: () => openModal("service_3")
        },
        {
            id: Constants.SERVICES_PAGE_SERVICE_3_ID,
            imgSrc: Constants.SERVICES_PAGE_SERVICE_3_IMAGE,
            title: t("servicesWindow.services.service_3.title"),
            description: t("servicesWindow.services.service_3.description"),
            modalOpen: modals.service_3,
            closeModal: closeModal,
            previousModalOpen: () => openModal("service_2"),
            thisModalOpen: () => openModal("service_3"), 
            nextModalOpen: () => openModal("service_4")
        },
        {
            id: Constants.SERVICES_PAGE_SERVICE_4_ID,
            imgSrc: Constants.SERVICES_PAGE_SERVICE_4_IMAGE,
            title: t("servicesWindow.services.service_4.title"),
            description: t("servicesWindow.services.service_4.description"),
            modalOpen: modals.service_4,
            closeModal: closeModal,
            previousModalOpen: () => openModal("service_3"),
            thisModalOpen: () => openModal("service_4"), 
            nextModalOpen: () => openModal("service_5")
        },
        {
            id: Constants.SERVICES_PAGE_SERVICE_5_ID,
            imgSrc: Constants.SERVICES_PAGE_SERVICE_5_IMAGE,
            title: t("servicesWindow.services.service_5.title"),
            description: t("servicesWindow.services.service_5.description"),
            modalOpen: modals.service_5,
            closeModal: closeModal,
            previousModalOpen: () => openModal("service_4"),
            thisModalOpen: () => openModal("service_5"), 
            nextModalOpen: () => openModal("service_6")
        },
        {
            id: Constants.SERVICES_PAGE_SERVICE_6_ID,
            imgSrc: Constants.SERVICES_PAGE_SERVICE_6_IMAGE,
            title: t("servicesWindow.services.service_6.title"),
            description: t("servicesWindow.services.service_6.description"),
            modalOpen: modals.service_6,
            closeModal: closeModal,
            previousModalOpen: () => openModal("service_5"),
            thisModalOpen: () => openModal("service_6"), 
            nextModalOpen: () => openModal("service_7")
        },
        {
            id: Constants.SERVICES_PAGE_SERVICE_7_ID,
            imgSrc: Constants.SERVICES_PAGE_SERVICE_7_IMAGE,
            title: t("servicesWindow.services.service_7.title"),
            description: t("servicesWindow.services.service_7.description"),
            modalOpen: modals.service_7,
            closeModal: closeModal,
            previousModalOpen: () => openModal("service_6"),
            thisModalOpen: () => openModal("service_7"), 
            nextModalOpen: () => openModal("service_8")
        },
        {
            id: Constants.SERVICES_PAGE_SERVICE_8_ID,
            imgSrc: Constants.SERVICES_PAGE_SERVICE_8_IMAGE,
            title: t("servicesWindow.services.service_8.title"),
            description: t("servicesWindow.services.service_8.description"),
            modalOpen: modals.service_8,
            closeModal: closeModal,
            previousModalOpen: () => openModal("service_7"),
            thisModalOpen: () => openModal("service_8"), 
            nextModalOpen: () => openModal("service_1")
        }
    ];

    return (
        <>
            <Helmet key={window.location.pathname}>
                <title>{t("pages_helmet.services.title")}</title>
                <link rel="canonical" href={getCanonicalUrlForHelmet(t("pages_helmet.services.canonicalPath"))} />
                <meta name="description" content={t("pages_helmet.services.description")} />
                <meta name="keywords" content={getKeywordsForHelmet(t("pages_helmet.services.keywords"))} />
                <meta name="robots" content={Constants.ROBOTS_INDEX} />
                <meta property="og:type" content={t("pages_helmet.services.openGraphType")} />
                <meta property="og:url" content={getCanonicalUrlForHelmet(t("pages_helmet.services.canonicalPath"))} />
                <meta property="og:site_name" content={Constants.COMPANY_NAME} />
                <meta property="og:title" content={t("pages_helmet.services.title")} />
                <meta property="og:description" content={t("pages_helmet.services.description")} />
                <meta property="og:image" content={getPhotoUriForHelmet(Constants.LOGO_IMAGE)} />
            </Helmet>

            <MicroMarkup json={
                JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Service",
                    "name": t("pages_helmet.services.name"),
                    "url": getCanonicalUrlForHelmet(t("pages_helmet.services.canonicalPath")),
                    "logo": getPhotoUriForHelmet(Constants.LOGO_IMAGE),
                    "description": t("pages_helmet.services.description"),
                    "provider": {
                        "@type": "Organization",
                        "name": Constants.COMPANY_NAME,
                        "url": getBaseUrlForHelmet()
                    },
                    "areaServed": Constants.COUNTRY_CODE,
                    "serviceType": t("pages_helmet.services.keywords"),
                    "availableLanguage": ["Ukrainian", "Russian", "English"]
                })} />

            <div id={id}>
                <ScrollIndicator />
                 
                <ServicesHeader />  

                <div className={styles.servicesContent}>
                    <div className={styles.servicesContainer}>
                        {servicesCollection.map((item, index) => 
                            <Service 
                                key={index}
                                id={item.id}
                                imgSrc={item.imgSrc}
                                title={item.title}
                                description={item.description}
                                closeModal={item.closeModal}
                                modalOpen={item.modalOpen}
                                previousModalOpen={item.previousModalOpen}
                                thisModalOpen={item.thisModalOpen} 
                                nextModalOpen={item.nextModalOpen} />)}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Services;