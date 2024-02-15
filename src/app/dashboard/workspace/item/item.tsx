import { Divider } from "@mui/material";
import { Product } from "../schema/product";
import styles from './item.module.css';

export default function Item( { name, serie, status, last_service, next_service, description }: Product ) {
    return (
        <section className={styles.card}>
            <div className={styles.firstDiv}>
                {
                    (() => {
                        if(status === 'Available') {
                            return (
                                <div className={`${styles.nameDiv} ${styles.headerAvailable}`}>
                                    <p className={styles.nameData}>{name}</p>
                                    <p>{status}</p>
                                </div>
                            )
                        }
                        if(status === 'Damaged') {
                            return (
                                <div className={`${styles.nameDiv} ${styles.headerDamaged}`}>
                                    <p className={styles.nameData}>{name}</p>
                                    <p>{status}</p>
                                </div>
                            )
                        }
                        if(status === 'Repairing') {
                            return (
                                <div className={`${styles.nameDiv} ${styles.headerRepairing}`}>
                                    <p className={styles.nameData}>{name}</p>
                                    <p>{status}</p>
                                </div>
                            )
                        }
                        if(status === 'In use') {
                            return (
                                <div className={`${styles.nameDiv} ${styles.headerInUse}`}>
                                    <p className={styles.nameData}>{name}</p>
                                    <p>{status}</p>
                                </div>
                            )
                        }
                    })()
                }
                <div className={styles.serieDiv}>
                    <p>Serie</p>
                    <p>{serie}</p>
                </div>
                <div className={styles.areaDiv}>
                    <p>Area</p>
                    <p>Area</p>
                </div>
                <div className={styles.lastServiceDiv}>
                    <p>Last service</p>
                    <p>{last_service}</p>
                </div>
                <div className={styles.nextServiceDiv}>
                    <p>Next service</p>
                    <p>{next_service}</p>
                </div>
                <Divider />
                <div className={styles.descriptionDiv}>
                    <p className={styles.descriptionData}>{description}</p>
                </div>
                <Divider />
            </div>
            <div className={styles.actionsDiv}>
                <p>REPAIR</p>
                <p>MORE</p>
            </div>
        </section>
    );
};