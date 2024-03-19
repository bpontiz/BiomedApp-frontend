'use client'
import { useEffect, useState } from 'react';
import ItemList from './itemList/itemList';
import styles from './page.module.css';
import FormDialog from './form';
import { ibm } from '@/app/lib/fonts';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';

export const url = process.env.NEXT_PUBLIC_API_GETMACHINERY || 'https://localhost';

export default function Page() {
    const [machinery, setMachinery] = useState([]);
    const [filterStatus, setFilterStatus] = useState('');

    const handleStatus = (event: SelectChangeEvent) => {
        setFilterStatus(event.target.value);
    };
    
    useEffect(() => {
        fetch(url, { next: { revalidate: 3600}})
            .then(res => res.json())
            .then(data => setMachinery(data));

    },[machinery]);

    return <>
        <div className={`${styles.header} ${ibm.className}`}>
            <div className={styles.leftSide}>
                <p className={styles.title}><strong>Workspace</strong></p>
                <FormControl sx={{ minWidth: 120 }} size="small" variant='outlined'>
                    <InputLabel className={ibm.className} id="demo-select-small-label">Filter</InputLabel>
                    <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        value={filterStatus}
                        label="Filter"
                        onChange={handleStatus}
                    >
                        <MenuItem value="">
                            <em className={ibm.className}>All</em>
                        </MenuItem>
                        <MenuItem className={ibm.className} value='Available'>Available</MenuItem>
                        <MenuItem className={ibm.className} value='In use'>In use</MenuItem>
                        <MenuItem className={ibm.className} value='Repairing'>Repairing</MenuItem>
                        <MenuItem className={ibm.className} value='Damaged'>Damaged</MenuItem>

                    </Select>
                </FormControl>
            </div>
            <div className={styles.addEquipmentDiv}>
                <FormDialog />
            </div>
        </div>
        <section className={`${styles.section} ${ibm.className}`}>
            <div className={styles.itemContainer}>
                <ItemList data={machinery} filter={filterStatus} />
            </div>
        </section>
    </>;
};