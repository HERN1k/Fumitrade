import { TranslateOnAxis } from "./scripts/appWrapperScripts.ts";

export default class Constants {

    /*     General     */ 
    static readonly COMPANY_NAME: string = "Fumitrade";
    static readonly COMPANY_EMAIL: string = "fumitrade.ua@gmail.com";
    static readonly COMPANY_FIRST_PHONE_NUMBER: string = "+38 (050) 606-26-15";
    static readonly COMPANY_SECOND_PHONE_NUMBER: string = "+38 (067) 911-13-17";
    static readonly COMPANY_GOOGLE_MAPS_URL: string = "https://maps.app.goo.gl/MZgPpn1tPbPgepwx8";
    static readonly COMPANY_FACEBOOK_URL: string = "https://www.facebook.com/people/Fumitrade-%D0%A4%D1%83%D0%BC%D1%96%D1%82%D1%80%D0%B5%D0%B9%D0%B4/61553873251298/";
    static readonly DEVELOPER_NAME: string = "HERN1k";
    static readonly DEVELOPER_CONNECTION_URL: string = "https://www.linkedin.com/in/vlad-hirnyk-84654b328";
    static readonly YEAR_OF_WEBSITE_CREATION: number = 2025;
    static readonly DOCUMENT_TITLE: string = "Fumitrade";
    static readonly STATIC_FILES_PATH: string = "/Fumitrade/Static/";
    static readonly ROOT_CONTAINER_ID: string = ":ROOT_CONTAINER_ID:";
    static readonly HEADER_ID: string = ":HEADER_ID:";
    static readonly CHANGE_HEADER_VISIBILITY: string = "CHANGE_HEADER_VISIBILITY";
    static readonly HEADER_ACTIVE_ATTRIBUTE: string = "header-active";
    static readonly SCROLL_TO_TOP_ACTIVE_ATTRIBUTE: string = "scroll-to-top";
    static readonly SCROLL_DISPLAY_BAR_HEIGHT: number = 4;
    static readonly BASE_APPEARANCE_ANIMATION: TranslateOnAxis = new TranslateOnAxis(2, "rem", "Y");

    /*     General images     */ 
    static readonly ICON_IMAGE: string = "General/ico.webp";
    static readonly LOGO_IMAGE: string = "General/logo.webp";
    static readonly NOT_FOUND_IMAGE: string = "General/not-found.svg";

    /*     Main page images     */
    static readonly MAIN_PAGE_MAIN_IMAGE: string = "MainPage/main_bg.webp";
    static readonly MAIN_PAGE_DESCRIPTION_IMAGE: string = "MainPage/description_bg.webp";
    static readonly MAIN_PAGE_TRUST_US_IMAGE: string = "MainPage/trust_us_bg.webp";
    static readonly COMPANY_AGROCO_LOGO_IMAGE: string = "MainPage/Companies/agroco.webp";
    static readonly COMPANY_AGRODAR_LOGO_IMAGE: string = "MainPage/Companies/agro-dar.webp";
    static readonly COMPANY_AGROTRADE_LOGO_IMAGE: string = "MainPage/Companies/agrotrade.webp";
    static readonly COMPANY_ALTERAAZTECA_LOGO_IMAGE: string = "MainPage/Companies/altera-azteca.webp";
    static readonly COMPANY_DUNAGRARIAN_LOGO_IMAGE: string = "MainPage/Companies/dunagrarian.webp";
    static readonly COMPANY_HORS_LOGO_IMAGE: string = "MainPage/Companies/hors.webp";
    static readonly COMPANY_KIVSHOVATA_LOGO_IMAGE: string = "MainPage/Companies/kivshovata.webp";
    static readonly COMPANY_MAIS_LOGO_IMAGE: string = "MainPage/Companies/mais.webp";
    static readonly COMPANY_NEWELEVATOR_LOGO_IMAGE: string = "MainPage/Companies/new-elevator.webp";
    static readonly COMPANY_NIBULON_LOGO_IMAGE: string = "MainPage/Companies/nibulon.webp";
    static readonly COMPANY_PRODEXIM_LOGO_IMAGE: string = "MainPage/Companies/prodexim.webp";
    static readonly COMPANY_RAMBURS_LOGO_IMAGE: string = "MainPage/Companies/ramburs.webp";

    /*     Services page images     */
    static readonly SERVICES_HEADER_IMAGE: string = "Services/services_bg.webp";
    static readonly SERVICES_PAGE_SERVICE_1_IMAGE: string = "Services/service_1.webp";
    static readonly SERVICES_PAGE_SERVICE_2_IMAGE: string = "Services/service_2.webp";
    static readonly SERVICES_PAGE_SERVICE_3_IMAGE: string = "Services/service_3.webp";
    static readonly SERVICES_PAGE_SERVICE_4_IMAGE: string = "Services/service_4.webp";
    static readonly SERVICES_PAGE_SERVICE_5_IMAGE: string = "Services/service_5.webp";
    static readonly SERVICES_PAGE_SERVICE_6_IMAGE: string = "Services/service_6.webp";
    static readonly SERVICES_PAGE_SERVICE_7_IMAGE: string = "Services/service_7.webp";
    static readonly SERVICES_PAGE_SERVICE_8_IMAGE: string = "Services/service_8.webp";

    /*     Pages     */ 
    static readonly MAIN_PAGE_ID: string = ":MAIN_PAGE_ID:";
    static readonly SERVICES_PAGE_ID: string = ":SERVICES_PAGE_ID:";
    static readonly NOT_FOUND_PAGE_ID: string = ":NOT_FOUND_PAGE_ID:";

    /*     Components     */
    static readonly MAIN_WINDOW_MAIN_PAGE_ID: string = ":MAIN_WINDOW_MAIN_PAGE_ID:";
    static readonly DESCRIPTION_WINDOW_MAIN_PAGE_ID: string = ":DESCRIPTION_WINDOW_MAIN_PAGE_ID:";
    static readonly SERVICES_WINDOW_MAIN_PAGE_ID: string = ":SERVICES_WINDOW_MAIN_PAGE_ID:";
    static readonly COUNTERS_WINDOW_MAIN_PAGE_ID: string = ":COUNTERS_WINDOW_MAIN_PAGE_ID:";
    static readonly TRUST_US_WINDOW_MAIN_PAGE_ID: string = ":TRUST_US_WINDOW_MAIN_PAGE_ID:";
    static readonly QUOTE_WINDOW_MAIN_PAGE_ID: string = ":QUOTE_WINDOW_MAIN_PAGE_ID:";
    static readonly SERVICES_PAGE_SERVICE_1_ID: string = ":SERVICES_PAGE_SERVICE_1_ID:";
    static readonly SERVICES_PAGE_SERVICE_2_ID: string = ":SERVICES_PAGE_SERVICE_2_ID:";
    static readonly SERVICES_PAGE_SERVICE_3_ID: string = ":SERVICES_PAGE_SERVICE_3_ID:";
    static readonly SERVICES_PAGE_SERVICE_4_ID: string = ":SERVICES_PAGE_SERVICE_4_ID:";
    static readonly SERVICES_PAGE_SERVICE_5_ID: string = ":SERVICES_PAGE_SERVICE_5_ID:";
    static readonly SERVICES_PAGE_SERVICE_6_ID: string = ":SERVICES_PAGE_SERVICE_6_ID:";
    static readonly SERVICES_PAGE_SERVICE_7_ID: string = ":SERVICES_PAGE_SERVICE_7_ID:";
    static readonly SERVICES_PAGE_SERVICE_8_ID: string = ":SERVICES_PAGE_SERVICE_8_ID:";
};