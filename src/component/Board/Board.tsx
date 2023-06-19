import styles from "./styles.module.css";
type BoardProps = {
    width?: string;
    height?: string;
    left?: string;
    top?: string;
    right?: string;
    bottom?: string;
    useHeader?: boolean;
    children?: React.ReactNode;
    headerText?: string;
    style?: React.CSSProperties;
};

export const Board = ({ top, width, right, left, height, bottom, useHeader, headerText, children, style }: BoardProps) => {
    return (
        <section className={styles.container} style={{ width, height, bottom, right, left, top }}>
            {useHeader && <aside className={styles.header}>
                <p className={styles.animation}>
                    {headerText}
                </p>
            </aside>}
            <section style={style}>
                {children}
            </section>

        </section>
    );
}