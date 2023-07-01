import { Game } from "../Game/Game";
import { PlayersBoard } from "../PlayersBoard/PlayersBoard";
import styles from "./styles.module.css";

export const MainGameContainer = () => {
    return (
        <main className={styles.container}>
            <PlayersBoard />
            <Game />
        </main>
    );
}