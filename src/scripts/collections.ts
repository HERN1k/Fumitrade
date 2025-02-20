import { TFunction } from "i18next";
import { IChartData, IServiceInMainPageProps, ISlidesTrustUs } from "../types.ts";
import { getStaticFile } from "./mainPageScripts.ts";
import Constants from "../constants.ts";

export const getServicesCollectionForMainPage = (t: TFunction<"translation", undefined>): IServiceInMainPageProps[] => {
    return [
        {
            id: Constants.SERVICES_PAGE_SERVICE_1_ID,
            imgSrc: Constants.SERVICES_PAGE_SERVICE_1_IMAGE,
            title: t("servicesWindow.services.service_1.title"),
            description: t("servicesWindow.services.service_1.description")
        },
        {
            id: Constants.SERVICES_PAGE_SERVICE_3_ID,
            imgSrc: Constants.SERVICES_PAGE_SERVICE_3_IMAGE,
            title: t("servicesWindow.services.service_3.title"),
            description: t("servicesWindow.services.service_3.description")
        },
        {
            id: Constants.SERVICES_PAGE_SERVICE_6_ID,
            imgSrc: Constants.SERVICES_PAGE_SERVICE_6_IMAGE,
            title: t("servicesWindow.services.service_6.title"),
            description: t("servicesWindow.services.service_6.description")
        },
        {
            id: Constants.SERVICES_PAGE_SERVICE_8_ID,
            imgSrc: Constants.SERVICES_PAGE_SERVICE_8_IMAGE,
            title: t("servicesWindow.services.service_8.title"),
            description: t("servicesWindow.services.service_8.description")
        }
    ];
}

export const trustUsSlides: ISlidesTrustUs = {
    data: [
        {
            imgSrc: getStaticFile(Constants.COMPANY_AGROCO_LOGO_IMAGE),
            url: "https://www.agroco.com.ua/",
            alt: "Агроко"
        },
        {
            imgSrc: getStaticFile(Constants.COMPANY_MAIS_LOGO_IMAGE),
            url: "https://mais.ua/",
            alt: "Mais"
        },
        {
            imgSrc: getStaticFile(Constants.COMPANY_NEWELEVATOR_LOGO_IMAGE),
            url: "https://new-elevator.com.ua/",
            alt: "НОВИЙ ЕЛЕВАТОР ЛЛД"
        },
        {
            imgSrc: getStaticFile(Constants.COMPANY_AGRODAR_LOGO_IMAGE),
            url: "https://elevatorist.com/kompanii/264-agrodar-ltd/",
            alt: "АГРОДАР ЛТД"
        },
        {
            imgSrc: getStaticFile(Constants.COMPANY_HORS_LOGO_IMAGE),
            url: "https://latifundist.com/kompanii/245-hors/",
            alt: "Зернова компанія Хорс"
        },
        {
            imgSrc: getStaticFile(Constants.COMPANY_NIBULON_LOGO_IMAGE),
            url: "https://www.nibulon.com/",
            alt: "НІБУЛОН"
        },
        {
            imgSrc: getStaticFile(Constants.COMPANY_ALTERAAZTECA_LOGO_IMAGE),
            url: "https://alteragruma.com/",
            alt: "АЛЬТЕРА АЦТЕКА МІЛИНГ УКРАЇНА"
        },
        {
            imgSrc: getStaticFile(Constants.COMPANY_DUNAGRARIAN_LOGO_IMAGE),
            url: "https://dunagrarian.com/",
            alt: "ДУНАЙСЬКИЙ АГРАРІЙ"
        },
        {
            imgSrc: getStaticFile(Constants.COMPANY_PRODEXIM_LOGO_IMAGE),
            url: "https://prodexim.com.ua/",
            alt: "ПРОДЕКСІМ"
        },
        {
            imgSrc: getStaticFile(Constants.COMPANY_KIVSHOVATA_LOGO_IMAGE),
            url: "https://kivshovata-agro.com.ua/",
            alt: "КІВШОВАТА АГРО"
        },
        {
            imgSrc: getStaticFile(Constants.COMPANY_AGROTRADE_LOGO_IMAGE),
            url: "https://at2000.com.ua/",
            alt: "Агротрейд-2000"
        },
        {
            imgSrc: getStaticFile(Constants.COMPANY_RAMBURS_LOGO_IMAGE),
            url: "https://www.ramburs.com/", 
            alt: "Рамбурс"
        }
    ]
};

export const chartData: IChartData[] = [
    {
        x: 2400,
        y: 2400,
    },
    {
        x: 1398,
        y: 2210,
    },
    {
        x: 5800,
        y: 2290,
    },
    {
        x: 3908,
        y: 2000,
    },
    {
        x: 4800,
        y: 2181,
    },
    {
        x: 3800,
        y: 2500,
    },
    {
        x: 2300,
        y: 4300,
    }
];