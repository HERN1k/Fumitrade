import { FC, useEffect } from "react";
import Constants from "../../constants.ts";
import styles from "../../styles/Loading.module.css";

const Loading: FC = () => { 

    useEffect(() => {
        var root = document.getElementById(Constants.ROOT_CONTAINER_ID);

        if (root) {
            root.style.overflow = "hidden";
        }
        
        return () => {
            var root = document.getElementById(Constants.ROOT_CONTAINER_ID);

            if (root) {
                root.style.overflow = "";
            }
        }
    }, []);

    return (
        <div className={styles.loaderContainer + " " + styles.loaderConteinerInView}>
            <div className={styles.loader}>
                <h1 className={styles.title} />
            </div>
        </div>
    );
}

export default Loading;