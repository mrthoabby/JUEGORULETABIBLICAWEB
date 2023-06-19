import styles from "./styles.module.css"
type BackgroundProps = {
    children?: React.ReactNode;
};

export const Background = ({ children }: BackgroundProps) => {
    return (
        <main className={styles.container}>
            {children}
        </main>
    );
}