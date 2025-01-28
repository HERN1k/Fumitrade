import { FC } from "react";
import { IPageProps } from "../types.ts";
import ServicesHeader from "../components/services/ServicesHeader.tsx";
import Service from "../components/services/Service.tsx";
import Constants from "../constants.ts";

const Services: FC<IPageProps> = ({ id }) => {
    return (
        <div id={id}>
            <ServicesHeader />

            <Service id={Constants.SERVICES_PAGE_SERVICE_1_ID} />
            <Service id={Constants.SERVICES_PAGE_SERVICE_2_ID} />
            <Service id={Constants.SERVICES_PAGE_SERVICE_3_ID} />
            <Service id={Constants.SERVICES_PAGE_SERVICE_4_ID} />
            <Service id={Constants.SERVICES_PAGE_SERVICE_5_ID} />
            <Service id={Constants.SERVICES_PAGE_SERVICE_6_ID} />
            <Service id={Constants.SERVICES_PAGE_SERVICE_7_ID} />
            <Service id={Constants.SERVICES_PAGE_SERVICE_8_ID} />
        </div>
    );
}

export default Services;