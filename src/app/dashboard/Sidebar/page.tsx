import styles from './page.module.css';

export default function Sidebar() {
    return (
        <main className={styles.main}>
            <div className={styles.top}>
                <div className={styles.title}>
                    <img src="" alt="icon" />
                    <p>BIOMAPP</p>
                </div>
                <img src="" alt="burguer" />
            </div>
            <div className={styles.mid}>
                <img src="" alt="profile" />
                <p>Juan Pedro</p>
                <p>Technician</p>
            </div>
            <div className={styles.bottom}>
                <ul className={styles.ul}>
                    <p>GENERAL</p>
                    <li className={styles.li}>Dashboard</li>
                    <li className={styles.li}>Statistics</li>
                </ul>
                <ul className={styles.ul}>
                    <p>MANAGEMENT</p>
                    <li className={styles.li}>Worksheets</li>
                    <li className={styles.li}>Orders</li>
                    <li className={styles.li}>Inventory</li>
                    <li className={styles.li}>Maintenance</li>
                    <li className={styles.li}>Comodato</li>
                    <li className={styles.li}>Polyduct</li>
                </ul>
                <ul className={styles.ul}>
                    <p>FOUNDATION</p>
                    <li className={styles.li}>Overview</li>
                    <li className={styles.li}>Documentation</li>
                </ul>
            </div>
        </main>
    )
}