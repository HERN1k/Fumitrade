import { FC } from "react";
import { IPageProps } from "../../types.ts";
import styles from "../../styles/Services.module.css";

const Service: FC<IPageProps> = ({ id }) => {
    return (
        <div className={styles.serviceContainer} id={id}>
            <h1>{id}</h1>
        </div>
    );
}

export default Service;