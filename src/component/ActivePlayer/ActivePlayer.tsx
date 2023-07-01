import logo from "../../assets/images/badge.jpg";
import styles from "./styles.module.css";
type ActivePlayerProps = {
    inTurn?: boolean;
    name: string;
    turns: number;
    money: number;
};
export const ActivePlayer = ({ inTurn, name, turns, money }: ActivePlayerProps) => {
    return (
        <section className={`${styles.container} ${inTurn ? styles.active : ""}`}>
            <img src={logo} className={styles.logo} alt="logo" />
            <aside className={styles.textContainer}>
                <span className={styles.field}>
                    <b className={styles.tittle}>Nombre de usuario :</b>
                    <p>@{name}</p>
                </span>
                <span className={styles.field}>
                    <b className={styles.tittle}>Giros:</b>
                    <p>{turns}</p>
                </span>
                <span className={styles.field}>
                    <b className={styles.tittle}>Dinero:</b>
                    <p>{money.toLocaleString('es-CO', {
                        style: 'currency',
                        currency: 'COP',
                    })}</p>
                </span>
                {inTurn && <i>En turno</i>}
            </aside>
        </section>
    );
}