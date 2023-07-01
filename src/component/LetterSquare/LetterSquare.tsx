import styles from "./styles.module.css";
type LetterSquareProps = {
    letter?: string;
    contain?: boolean;
};
export const LetterSquare = ({ letter, contain }: LetterSquareProps) => {
    const style = letter || contain ? { background: "white" } : undefined;
    return (
        <div className={styles.container} style={style}>
            {letter}
        </div>
    );
}