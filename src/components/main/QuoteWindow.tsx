import { FC } from "react";
import Window from "../general/Window.tsx";
import Constants from "../../constants.ts";
import styles from "../../styles/MainPage.module.css"

const QuoteWindow: FC = () => {

    

    return (
        <Window id={Constants.QUOTE_WINDOW_MAIN_PAGE_ID} sticky className={styles.quoteWindow}>
            <div>

            </div>
        </Window>
    );
}

export default QuoteWindow;