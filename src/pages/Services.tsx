import { FC, useEffect, useState } from "react";
import { IPageProps, IServiceProps } from "../types.ts";
import ServicesHeader from "../components/services/ServicesHeader.tsx";
import Service from "../components/services/Service.tsx";
import Constants from "../constants.ts";
import styles from "../styles/Services.module.css";
import { useTranslation } from "react-i18next";
import Smoke from "../components/services/Smoke.tsx";
import ScrollIndicator from "../components/general/ScrollIndicator.tsx";

const Services: FC<IPageProps> = ({ id }) => {

    const [modalInView, setModalInView] = useState<boolean>(false);
    
    const { t } = useTranslation();

    useEffect(() => { document.title = t("appWrapper.documentTitles.services") }, []);

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

    const openModal = (serviceKey: string, isNew: boolean = false) => {
        if (isNew) {
            setModalInView(true);
        }

        setModals(prev => Object.fromEntries(Object.keys(prev)
            .map(key => serviceKey === key ? [key, true] : [key, false])));
    };

    const closeModal = () => {
        setModalInView(false);

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
            thisModalOpen: () => openModal("service_1", true), 
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
            thisModalOpen: () => openModal("service_2", true), 
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
            thisModalOpen: () => openModal("service_3", true), 
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
            thisModalOpen: () => openModal("service_4", true), 
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
            thisModalOpen: () => openModal("service_5", true), 
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
            thisModalOpen: () => openModal("service_6", true), 
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
            thisModalOpen: () => openModal("service_7", true), 
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
            thisModalOpen: () => openModal("service_8", true), 
            nextModalOpen: () => openModal("service_1")
        }
    ];

    return (
        <div id={id}>
            { window.innerWidth > 768 ? <Smoke inView={modalInView} /> : null }

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
    );
}

export default Services;