import { SoundHandler } from "../../domain";
import styles from "./styles.module.css";
type ButtonLetterProps = {
    letter: string;
};
export const ButtonLetter = ({ letter }: ButtonLetterProps) => {
    return (
        <button onMouseEnter={() => {
            SoundHandler.getInstance().onHoverLetter();
        }} className={styles.button}>{letter}</button>
    );
}