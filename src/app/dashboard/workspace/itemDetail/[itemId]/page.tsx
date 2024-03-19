'use client';
import { useEffect, useState } from 'react';
import styles from './page.module.css';
import ProductDb from '../../schema/product';
import Image from 'next/image';

export default function ItemDetail( { params }: { params: { itemId: string }}) {
    const [equipment, setEquipment] = useState<ProductDb | null>();
    const urlEquipment = `${process.env.NEXT_PUBLIC_API_GETMACHINERY}/${params.itemId}` || 'http://localhost';

    useEffect(() => {
        fetch(urlEquipment, { next: { revalidate: 3600}})
            .then(res => res.json())
            .then(data => setEquipment(data));
    },[equipment]);

    if (equipment === null || equipment === undefined) {
        return (
            <section className={styles.header}>
                <div className={styles.esmainDiv}>
                    <p>There is nothing here. Try later.</p>
                </div>
            </section>
        )
    };

    return (
        <section className={styles.header}>
            <div className={styles.esmainDiv}>
                <p className={styles.title}><strong>Equipment detail</strong></p>
                <div className={styles.flexRow}>
                    <div className={styles.leftDiv}>
                        <Image src={`/${equipment.image}`} alt='equipment image' width={600} height={350} />
                    </div>
                    <div className={styles.rightDiv}>
                        <p>{equipment.name}</p>
                        <p className={styles.descriptionP}>{equipment.description}</p>
                        <p>{equipment.serie}</p>
                        <p>{equipment.status}</p>
                        <p>{equipment.area}</p>
                    </div>
                </div>
            </div>
        </section>
    )
};