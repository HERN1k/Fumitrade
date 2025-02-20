import { TranslateOnAxis } from "./scripts/appWrapperScripts.ts";

export default class Constants {

    /*     General     */ 
    static readonly BASE_URL: string = "http://dev.hern1k.xyz"
    static readonly BASE_URL_UNDER_PATH: string = "/Fumitrade/"
    static readonly COMPANY_NAME: string = "Fumitrade";
    static readonly COMPANY_EMAIL: string = "fumitrade.ua@gmail.com";
    static readonly COMPANY_FIRST_PHONE_NUMBER: string = "+38 (050) 606-26-15";
    static readonly COMPANY_SECOND_PHONE_NUMBER: string = "+38 (067) 911-13-17";
    static readonly COUNTRY_CODE: string = "UA";
    static readonly COUNTRY_LOCATION: string = "Україна";
    static readonly CITY_LOCATION: string = "Черкаси";
    static readonly DISTRICT_LOCATION: string = "бул. Шевченка 145";
    static readonly COMPANY_GOOGLE_MAPS_URL: string = "https://maps.app.goo.gl/MZgPpn1tPbPgepwx8";
    static readonly COMPANY_FACEBOOK_URL: string = "https://www.facebook.com/people/Fumitrade-%D0%A4%D1%83%D0%BC%D1%96%D1%82%D1%80%D0%B5%D0%B9%D0%B4/61553873251298/";
    static readonly DEVELOPER_NAME: string = "HERN1k";
    static readonly DEVELOPER_CONNECTION_URL: string = "https://www.linkedin.com/in/vlad-hirnyk-84654b328";
    static readonly YEAR_OF_WEBSITE_CREATION: number = 2025;
    static readonly DOCUMENT_TITLE: string = "Fumitrade";
    static readonly STATIC_FILES_PATH: string = "/Fumitrade/static/";
    static readonly ROOT_CONTAINER_ID: string = ":ROOT_CONTAINER_ID:";
    static readonly HEADER_ID: string = ":HEADER_ID:";
    static readonly CHANGE_HEADER_VISIBILITY: string = "CHANGE_HEADER_VISIBILITY";
    static readonly HEADER_ACTIVE_ATTRIBUTE: string = "header-active";
    static readonly SCROLL_TO_TOP_ACTIVE_ATTRIBUTE: string = "scroll-to-top";
    static readonly SCROLL_DISPLAY_BAR_HEIGHT: number = 4;
    static readonly BASE_APPEARANCE_ANIMATION: TranslateOnAxis = new TranslateOnAxis(2, "rem", "Y");
    static readonly ROBOTS_INDEX: string = "index, follow";
    static readonly ROBOTS_NOINDEX: string = "noindex, nofollow";
    static readonly BASE_KEYWORDS_HELMET: string = "Fumitrade, Фумітрейд, Фумитрейд, fumitrade.com.ua, fumitrade.ua, fumitrade.ua@gmail.com, ";
    static readonly KEYWORDS_HELMET_UA: string = "дезінсекція, фумігація, знищення шкідників, ";
    static readonly KEYWORDS_HELMET_RU: string = "дезинсекция, фумигация, уничтожение вредителей, ";
    static readonly KEYWORDS_HELMET_EN: string = "disinsection, fumigation, pest control, ";
    static readonly COOKIES_ACCEPT_KEY: string = ":COOKIES_ACCEPT_KEY:";
    static readonly PRIVACY_POLICY: string = "privacy-policy.html";

    /*     EmailJs     */ 
    static readonly EMAIL_SERVICE_ID: string = "service_qr99gvw";
    static readonly EMAIL_TEMPLATE_ID: string = "template_629qh1b";
    static readonly EMAIL_PUBLIC_KEY: string = "GVWhtF0nshDe6UB-Z";
    static readonly EMAIL_RECIPIENT: string = "h1rnykvlad@gmail.com";

    /*     General images     */ 
    static readonly ICON_IMAGE: string = "general/ico.webp";
    static readonly LOGO_IMAGE: string = "general/logo.webp";
    static readonly NOT_FOUND_IMAGE: string = "general/not-found.svg";
    static readonly SHARE_IMAGE: string = "general/share.svg";
    static readonly LINK_IMAGE: string = "general/link.svg";

    /*     Main page images     */
    static readonly MAIN_PAGE_MAIN_IMAGE: string = "main-page/main_bg.webp";
    static readonly MAIN_PAGE_MAIN_VIDEO: string = "main-page/main-bg.mp4";
    static readonly MAIN_PAGE_MAIN_VIDEO_POSTER: string = "main-page/main-bg-poster.webp";
    static readonly MAIN_PAGE_DESCRIPTION_IMAGE: string = "main-page/description_bg.webp";
    static readonly MAIN_PAGE_TRUST_US_IMAGE: string = "main-page/trust_us_bg.webp";
    static readonly COMPANY_AGROCO_LOGO_IMAGE: string = "main-page/companies/agroco.webp";
    static readonly COMPANY_AGRODAR_LOGO_IMAGE: string = "main-page/companies/agro-dar.webp";
    static readonly COMPANY_AGROTRADE_LOGO_IMAGE: string = "main-page/companies/agrotrade.webp";
    static readonly COMPANY_ALTERAAZTECA_LOGO_IMAGE: string = "main-page/companies/altera-azteca.webp";
    static readonly COMPANY_DUNAGRARIAN_LOGO_IMAGE: string = "main-page/companies/dunagrarian.webp";
    static readonly COMPANY_HORS_LOGO_IMAGE: string = "main-page/companies/hors.webp";
    static readonly COMPANY_KIVSHOVATA_LOGO_IMAGE: string = "main-page/companies/kivshovata.webp";
    static readonly COMPANY_MAIS_LOGO_IMAGE: string = "main-page/companies/mais.webp";
    static readonly COMPANY_NEWELEVATOR_LOGO_IMAGE: string = "main-page/companies/new-elevator.webp";
    static readonly COMPANY_NIBULON_LOGO_IMAGE: string = "main-page/companies/nibulon.webp";
    static readonly COMPANY_PRODEXIM_LOGO_IMAGE: string = "main-page/companies/prodexim.webp";
    static readonly COMPANY_RAMBURS_LOGO_IMAGE: string = "main-page/companies/ramburs.webp";

    /*     Services page images     */
    static readonly SERVICES_HEADER_IMAGE: string = "services/services_bg.webp";
    static readonly SERVICES_PAGE_STAR_SVG: string = "services/star.svg";
    static readonly SERVICES_PAGE_SERVICE_1_IMAGE: string = "services/service_1.webp";
    static readonly SERVICES_PAGE_SERVICE_2_IMAGE: string = "services/service_2.webp";
    static readonly SERVICES_PAGE_SERVICE_3_IMAGE: string = "services/service_3.webp";
    static readonly SERVICES_PAGE_SERVICE_4_IMAGE: string = "services/service_4.webp";
    static readonly SERVICES_PAGE_SERVICE_5_IMAGE: string = "services/service_5.webp";
    static readonly SERVICES_PAGE_SERVICE_6_IMAGE: string = "services/service_6.webp";
    static readonly SERVICES_PAGE_SERVICE_7_IMAGE: string = "services/service_7.webp";
    static readonly SERVICES_PAGE_SERVICE_8_IMAGE: string = "services/service_8.webp";

    /*     Knowledge base page images     */
    static readonly KNOWLEDGE_BASE_PAGE_BG_IMAGE: string = "knowledge-base/library.webp";
    static readonly KNOWLEDGE_BASE_PAGE_TRIANGLE_IMAGE: string = "knowledge-base/triangle.svg";

    /*     Pages     */ 
    static readonly MAIN_PAGE_ID: string = ":MAIN_PAGE_ID:";
    static readonly SERVICES_PAGE_ID: string = ":SERVICES_PAGE_ID:";
    static readonly NOT_FOUND_PAGE_ID: string = ":NOT_FOUND_PAGE_ID:";
    static readonly ABOUT_US_PAGE_ID: string = ":ABOUT_US_PAGE_ID:";
    static readonly KNOWLEDGE_BASE_PAGE_ID: string = ":KNOWLEDGE_BASE_PAGE_ID:";
    static readonly CONTACTS_PAGE_ID: string = ":CONTACTS_PAGE_ID:";

    /*     Components     */
    static readonly GENERAL_LOADING_ID: string = ":GENERAL_LOADING_ID:";
    static readonly MAIN_WINDOW_MAIN_PAGE_ID: string = ":MAIN_WINDOW_MAIN_PAGE_ID:";
    static readonly DESCRIPTION_WINDOW_MAIN_PAGE_ID: string = ":DESCRIPTION_WINDOW_MAIN_PAGE_ID:";
    static readonly SERVICES_WINDOW_MAIN_PAGE_ID: string = ":SERVICES_WINDOW_MAIN_PAGE_ID:";
    static readonly COUNTERS_WINDOW_MAIN_PAGE_ID: string = ":COUNTERS_WINDOW_MAIN_PAGE_ID:";
    static readonly TRUST_US_WINDOW_MAIN_PAGE_ID: string = ":TRUST_US_WINDOW_MAIN_PAGE_ID:";
    static readonly CONTACTS_WINDOW_MAIN_PAGE_ID: string = ":CONTACTS_WINDOW_MAIN_PAGE_ID:";
    static readonly SERVICES_PAGE_SERVICE_1_ID: string = ":SERVICES_PAGE_SERVICE_1_ID:";
    static readonly SERVICES_PAGE_SERVICE_2_ID: string = ":SERVICES_PAGE_SERVICE_2_ID:";
    static readonly SERVICES_PAGE_SERVICE_3_ID: string = ":SERVICES_PAGE_SERVICE_3_ID:";
    static readonly SERVICES_PAGE_SERVICE_4_ID: string = ":SERVICES_PAGE_SERVICE_4_ID:";
    static readonly SERVICES_PAGE_SERVICE_5_ID: string = ":SERVICES_PAGE_SERVICE_5_ID:";
    static readonly SERVICES_PAGE_SERVICE_6_ID: string = ":SERVICES_PAGE_SERVICE_6_ID:";
    static readonly SERVICES_PAGE_SERVICE_7_ID: string = ":SERVICES_PAGE_SERVICE_7_ID:";
    static readonly SERVICES_PAGE_SERVICE_8_ID: string = ":SERVICES_PAGE_SERVICE_8_ID:";
};