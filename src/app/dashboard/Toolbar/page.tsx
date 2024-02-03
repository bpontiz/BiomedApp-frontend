import styles from './page.module.css';

export default function Toolbar() {
    return (
        <section className={styles.toolbar}>
            <div>
                <p>Searchbox</p>
            </div>
            <ul className={styles.ul}>
                <li>Bell</li>
                <li>Lang</li>
                <li>Mess</li>
                <li>Prof</li>
            </ul>
        </section>
    )
}