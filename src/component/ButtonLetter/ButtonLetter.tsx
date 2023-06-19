import styles from "./styles.module.css"
type ButtonLetterProps = {
    letter: string;
};
export const ButtonLetter = ({ letter }: ButtonLetterProps) => {
    return (
        <button className={styles.button}>{letter}</button>
    );
}