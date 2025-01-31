import { FC, useState } from "react";
import { IPageProps, IServiceProps } from "../types.ts";
import ServicesHeader from "../components/services/ServicesHeader.tsx";
import Service from "../components/services/Service.tsx";
import Constants from "../constants.ts";
import styles from "../styles/Services.module.css";
import { useTranslation } from "react-i18next";

const Services: FC<IPageProps> = ({ id }) => {

    const [service_1_ModalOpen, setService_1_ModalOpen] = useState<boolean>(false);
    const [service_2_ModalOpen, setService_2_ModalOpen] = useState<boolean>(false);
    const [service_3_ModalOpen, setService_3_ModalOpen] = useState<boolean>(false);
    const [service_4_ModalOpen, setService_4_ModalOpen] = useState<boolean>(false);
    const [service_5_ModalOpen, setService_5_ModalOpen] = useState<boolean>(false);
    const [service_6_ModalOpen, setService_6_ModalOpen] = useState<boolean>(false);
    const [service_7_ModalOpen, setService_7_ModalOpen] = useState<boolean>(false);
    const [service_8_ModalOpen, setService_8_ModalOpen] = useState<boolean>(false);

    const { t } = useTranslation();

    const servicesCollection: IServiceProps[] = [
        {
            id: Constants.SERVICES_PAGE_SERVICE_1_ID,
            imgSrc: Constants.SERVICES_PAGE_SERVICE_1_IMAGE,
            title: t("servicesWindow.services.service_1.title"),
            description: t("servicesWindow.services.service_1.description"),
            modalOpen: service_1_ModalOpen,
            previousServiceModalSetter: null,
            thisServiceModalSetter: setService_1_ModalOpen,
            nextServiceModalSetter: setService_2_ModalOpen
        },
        {
            id: Constants.SERVICES_PAGE_SERVICE_2_ID,
            imgSrc: Constants.SERVICES_PAGE_SERVICE_2_IMAGE,
            title: t("servicesWindow.services.service_2.title"),
            description: t("servicesWindow.services.service_2.description"),
            modalOpen: service_2_ModalOpen,
            previousServiceModalSetter: setService_1_ModalOpen,
            thisServiceModalSetter: setService_2_ModalOpen,
            nextServiceModalSetter: setService_3_ModalOpen
        },
        {
            id: Constants.SERVICES_PAGE_SERVICE_3_ID,
            imgSrc: Constants.SERVICES_PAGE_SERVICE_3_IMAGE,
            title: t("servicesWindow.services.service_3.title"),
            description: t("servicesWindow.services.service_3.description"),
            modalOpen: service_3_ModalOpen,
            previousServiceModalSetter: setService_2_ModalOpen,
            thisServiceModalSetter: setService_3_ModalOpen,
            nextServiceModalSetter: setService_4_ModalOpen
        },
        {
            id: Constants.SERVICES_PAGE_SERVICE_4_ID,
            imgSrc: Constants.SERVICES_PAGE_SERVICE_4_IMAGE,
            title: t("servicesWindow.services.service_4.title"),
            description: t("servicesWindow.services.service_4.description"),
            modalOpen: service_4_ModalOpen,
            previousServiceModalSetter: setService_3_ModalOpen,
            thisServiceModalSetter: setService_4_ModalOpen,
            nextServiceModalSetter: setService_5_ModalOpen
        },
        {
            id: Constants.SERVICES_PAGE_SERVICE_5_ID,
            imgSrc: Constants.SERVICES_PAGE_SERVICE_5_IMAGE,
            title: t("servicesWindow.services.service_5.title"),
            description: t("servicesWindow.services.service_5.description"),
            modalOpen: service_5_ModalOpen,
            previousServiceModalSetter: setService_4_ModalOpen,
            thisServiceModalSetter: setService_5_ModalOpen,
            nextServiceModalSetter: setService_6_ModalOpen
        },
        {
            id: Constants.SERVICES_PAGE_SERVICE_6_ID,
            imgSrc: Constants.SERVICES_PAGE_SERVICE_6_IMAGE,
            title: t("servicesWindow.services.service_6.title"),
            description: t("servicesWindow.services.service_6.description"),
            modalOpen: service_6_ModalOpen,
            previousServiceModalSetter: setService_5_ModalOpen,
            thisServiceModalSetter: setService_6_ModalOpen,
            nextServiceModalSetter: setService_7_ModalOpen
        },
        {
            id: Constants.SERVICES_PAGE_SERVICE_7_ID,
            imgSrc: Constants.SERVICES_PAGE_SERVICE_7_IMAGE,
            title: t("servicesWindow.services.service_7.title"),
            description: t("servicesWindow.services.service_7.description"),
            modalOpen: service_7_ModalOpen,
            previousServiceModalSetter: setService_6_ModalOpen,
            thisServiceModalSetter: setService_7_ModalOpen,
            nextServiceModalSetter: setService_8_ModalOpen
        },
        {
            id: Constants.SERVICES_PAGE_SERVICE_8_ID,
            imgSrc: Constants.SERVICES_PAGE_SERVICE_8_IMAGE,
            title: t("servicesWindow.services.service_8.title"),
            description: t("servicesWindow.services.service_8.description"),
            modalOpen: service_8_ModalOpen,
            previousServiceModalSetter: setService_7_ModalOpen,
            thisServiceModalSetter: setService_8_ModalOpen,
            nextServiceModalSetter: null
        }
    ];

    return (
        <div id={id}>
            <ServicesHeader />

            <div className={styles.servicesContainer}>
                {servicesCollection.map((item, index) => 
                    <Service 
                        key={index}
                        id={item.id}
                        imgSrc={item.imgSrc}
                        title={item.title}
                        description={item.description}
                        modalOpen={item.modalOpen}
                        previousServiceModalSetter={item.previousServiceModalSetter}
                        thisServiceModalSetter={item.thisServiceModalSetter}
                        nextServiceModalSetter={item.nextServiceModalSetter} />)}
            </div>
        </div>
    );
}

export default Services;