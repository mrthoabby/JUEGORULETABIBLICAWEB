import logo from "../../assets/players/badge.jpg";
import styles from "./styles.module.css";
type ActivePlayerProps = {
    inTurn?: boolean;
};
export const ActivePlayer = ({ inTurn }: ActivePlayerProps) => {
    return (
        <section className={`${styles.container} ${inTurn ? styles.active : ""}`}>
            <img src={logo} className={styles.logo} alt="logo" />
            <aside className={styles.textContainer}>
                <span className={styles.field}>
                    <b className={styles.tittle}>Nombre:</b>
                    <p>Nombre jugador</p>
                </span>
                <span className={styles.field}>
                    <b className={styles.tittle}>Giros:</b>
                    <p>0</p>
                </span>
                <span className={styles.field}>
                    <b className={styles.tittle}>Dinero:</b>
                    <p>$ 0</p>
                </span>
                {inTurn && <i>En turno</i>}
            </aside>
        </section>
    );
}