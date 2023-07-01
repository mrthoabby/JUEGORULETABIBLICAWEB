import styles from "./styles.module.css";
type InfoProps = {
    infoAction: string;
    description?: string;
    date: string;
    player?: string;
};

export const Info = ({ infoAction, description, date, player }: InfoProps) => {
    return (
        <section className={styles.container}>
            <span className={styles.date}>{date}</span>
            <span className={styles.info}>
                <b>
                    {infoAction}:
                </b>
                <i>{description}</i>
                {player && <small>{`[@${player}]`}</small>}
            </span>
        </section>
    );
}