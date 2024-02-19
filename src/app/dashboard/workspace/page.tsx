'use client'
import { useEffect, useState } from 'react';
import ItemList from './itemList/itemList';
import styles from './page.module.css';
import FormDialog from './form';
import { Divider } from '@mui/material';
import { ibm } from '@/app/lib/fonts';

const url = process.env.NEXT_PUBLIC_API_GETMACHINERY || 'https://localhost';

export default function Page() {
    const [machinery, setMachinery] = useState([]);
    
    useEffect(() => {
        fetch(url, { next: { revalidate: 1000}})
            .then(res => res.json())
            .then(data => setMachinery(data));

    },[machinery]);

    return <>
        <div className={`${styles.header} ${ibm.className}`}>
            <p className={styles.title}><strong>Workspace</strong></p>
            <div className={styles.addEquipmentDiv}>
                <FormDialog />
            </div>
        </div>
        <Divider />
        <section className={`${styles.section} ${ibm.className}`}>
            <div className={styles.itemContainer}>
                <ItemList data={machinery} />
            </div>
        </section>
    </>;
};