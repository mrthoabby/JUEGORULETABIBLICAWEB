import { useDispatch, useSelector } from "react-redux";
import badge from "../../assets/images/badge.jpg";
import { EnumGameType, SoundHandler } from "../../domain";
import { getGameType, setGameType } from "../../store/slices/currentGame";
import styles from "./styles.module.css";
type ButtonCardProps = {
    title: string;
    description: string;
    gameType: EnumGameType;
};

export const ButtonCard = ({ title, gameType, description }: ButtonCardProps) => {
    const currentGameType = useSelector(getGameType);
    const dispatch = useDispatch();

    const defineTypeOfGame = () => {
        if (currentGameType !== gameType) {
            SoundHandler.getInstance().onButtonCardClick();
            dispatch(setGameType(gameType))
        }
    }
    return (
        <section
            className={`
            ${styles.gameType} 
            ${currentGameType == gameType ? styles.active : ""}`}
            onClick={defineTypeOfGame}>
            <aside className={styles.gameInfo}>
                <img className={styles.badge} src={badge}></img>
                <span className={styles.gameName}>{title}</span>
            </aside>
            <blockquote className={styles.gameDescription}>
                {description}
            </blockquote>
        </section>
    );
}