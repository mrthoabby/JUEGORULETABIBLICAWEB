import styles from "./styles.module.css"
type InfoProps = {
    infoAction: string;
    description?: string;
    date: Date;
    player?: string;
};

export const Info = ({ infoAction, description, date, player }: InfoProps) => {
    return (
        <section className={styles.container}>
            <span className={styles.date}>{date.toLocaleDateString(undefined, { hour: '2-digit', minute: '2-digit', second: '2-digit' })}</span>
            <span className={styles.info}>
                <b>
                    {infoAction}:
                </b>
                <i>{description}</i>
                <small>{`[@${player}]`}</small>
            </span>
        </section>
    );
}