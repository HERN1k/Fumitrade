import { FC } from "react";
import { IPageProps } from "../types.ts";
import ServicesHeader from "../components/services/ServicesHeader.tsx";
import Service from "../components/services/Service.tsx";
import Constants from "../constants.ts";
import styles from "../styles/Services.module.css";
import { useTranslation } from "react-i18next";

const Services: FC<IPageProps> = ({ id }) => {

    const { t } = useTranslation();

    return (
        <div id={id} className={styles.servicesContainer}>
            <ServicesHeader />
 
            <Service 
                id={Constants.SERVICES_PAGE_SERVICE_1_ID}
                imgSrc={Constants.SERVICES_PAGE_SERVICE_1_IMAGE}
                title={t("servicesWindow.services.complex_processing.title")}
                description={t("servicesWindow.services.complex_processing.description")} />
            <Service id={Constants.SERVICES_PAGE_SERVICE_2_ID}
                imgSrc={Constants.SERVICES_PAGE_SERVICE_2_IMAGE}
                title={t("servicesWindow.services..title")}
                description={t("servicesWindow.services..description")} />
            <Service id={Constants.SERVICES_PAGE_SERVICE_3_ID}
                imgSrc={Constants.SERVICES_PAGE_SERVICE_3_IMAGE}
                title={t("servicesWindow.services..title")}
                description={t("servicesWindow.services..description")} />
            <Service id={Constants.SERVICES_PAGE_SERVICE_4_ID}
                imgSrc={Constants.SERVICES_PAGE_SERVICE_4_IMAGE}
                title={t("servicesWindow.services..title")}
                description={t("servicesWindow.services..description")} />
            <Service id={Constants.SERVICES_PAGE_SERVICE_5_ID}
                imgSrc={Constants.SERVICES_PAGE_SERVICE_5_IMAGE}
                title={t("servicesWindow.services..title")}
                description={t("servicesWindow.services..description")} />
            <Service id={Constants.SERVICES_PAGE_SERVICE_6_ID}
                imgSrc={Constants.SERVICES_PAGE_SERVICE_6_IMAGE}
                title={t("servicesWindow.services..title")}
                description={t("servicesWindow.services..description")} />
            <Service id={Constants.SERVICES_PAGE_SERVICE_7_ID}
                imgSrc={Constants.SERVICES_PAGE_SERVICE_7_IMAGE}
                title={t("servicesWindow.services..title")}
                description={t("servicesWindow.services..description")} />
            <Service id={Constants.SERVICES_PAGE_SERVICE_8_ID}
                imgSrc={Constants.SERVICES_PAGE_SERVICE_8_IMAGE}
                title={t("servicesWindow.services..title")}
                description={t("servicesWindow.services..description")} />
        </div>
    );
}

export default Services;