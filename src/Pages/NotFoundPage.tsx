import { FC } from "react";
import { PageProps } from "../Types";
import Window from "../components/Window";
import { Link } from "react-router";
import styles from "../styles/NotFound.module.css";

const NotFoundPage: FC<PageProps> = ({ id }) => {
    return (
        <Window id={id}>
            <div className={styles.container}>
                <img src="/not-found.svg" alt="Not Found" className={styles.image} />
                <p className={styles.message}>Ой! Сторінку не знайдено</p>
                <p className={styles.description}>
                    Можливо, ви ввели неправильну адресу <br />або сторінку було переміщено.
                </p>
                <Link to="/" className={styles.homeButton}>
                    На головну
                </Link>
            </div>
        </Window>
    );
};

export default NotFoundPage;