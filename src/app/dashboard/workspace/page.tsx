import ItemList from './itemList/itemList';
import styles from './page.module.css';
import { Product } from './schema/product';

async function getMachinery() {
    const url: string = process.env.API_GETMACHINERY || 'http://localhost/';
    try {
        const getData = await fetch(url);

        const machinery: Product[] | [] = await getData.json();

        return machinery;
    }
    catch {
        return [];
    };
};

export default async function Page() {
    const getData = await getMachinery();

    return <>
        <section className={styles.section}>
            <p className={styles.title}><strong>Workspace</strong></p>
            <div>
                <ItemList data={getData} />
            </div>
        </section>
    </>;
};