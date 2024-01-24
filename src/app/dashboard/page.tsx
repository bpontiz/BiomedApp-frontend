import ItemListContainer from './itemListContainer/page';
import Sidebar from './sidebar/page';
import Toolbar from './toolbar/page';
import styles from './page.module.css';

export default function Dashboard() {
    return <>
        <main className={styles.main}>
            <div className={styles.sidebar}>
                <Sidebar />
            </div>

            <div className={styles.toolbar}>
                <Toolbar />
            </div>

            <div className={styles.itemlistcontainer}>
                <ItemListContainer />
            </div>
        </main>
    </>
}