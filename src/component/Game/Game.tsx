import { LetterBoard } from "../LetterBoard/LetterBoard";
import { MysteryBoard } from "../MysteryBoard/MysteryBoard";
import { Roulette } from "../Roulette/Roulette";
import styles from "./styles.module.css";

export const Game = () => {
    return (
        <main className={styles.container}>
            <MysteryBoard />
            <LetterBoard />
            <Roulette />
        </main >
    );
}