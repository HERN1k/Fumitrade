import { FC } from "react";
import styles from "../../styles/Services.module.css";
import { getStaticFile } from "../../scripts/servicesScripts.ts";
import Constants from "../../constants.ts";

const ServicesHeader: FC = () => {
    return (
        <div className={styles.headerContainer} style={{ backgroundImage: `url(${getStaticFile(Constants.SERVICES_HEADER_IMAGE)})` }} />
    );
}

export default ServicesHeader;