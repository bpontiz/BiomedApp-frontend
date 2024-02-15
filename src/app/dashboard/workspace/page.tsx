'use client'
import { useEffect, useState } from 'react';
import ItemList from './itemList/itemList';
import styles from './page.module.css';

const url = process.env.NEXT_PUBLIC_API_GETMACHINERY || 'https://localhost';

export default function Page() {
    const [machinery, setMachinery] = useState([]);
    
    useEffect(() => {
        fetch(url, { next: { revalidate: 1000}})
            .then(res => res.json())
            .then(data => setMachinery(data));

    },[machinery]);

    return <>
        <section className={styles.section}>
            <p className={styles.title}><strong>Workspace</strong></p>
            <div className={styles.itemContainer}>
                <ItemList data={machinery} />
            </div>
        </section>
    </>;
};