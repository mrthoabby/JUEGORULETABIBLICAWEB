import styles from "./styles.module.css"
type InfoProps = {
    infoAction: string;
};

export const Info = ({ infoAction }: InfoProps) => {
    return (
        <section className={styles.container}>
            <span className={styles.date}>{new Date().toLocaleDateString(undefined, { hour: '2-digit', minute: '2-digit', second: '2-digit' })}</span>
            <span className={styles.info}>  {infoAction}</span>
        </section>
    );
}