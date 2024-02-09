'use client'
import { todayIs } from '@/app/lib/date';
import { Player } from '@lordicon/react';
import styles from './main.module.css';
import repairIcon from '../../lib/repair.json';
import lightningIcon from '../../lib/lightning.json';
import checkIcon from '../../lib/check.json';
import assignmentIcon from '../../lib/assignment.json';
import { useRef } from 'react';


export function Maindashboard() {
    const playerRefRepair = useRef<Player>(null);
    const playerRefLightning = useRef<Player>(null);
    const playerRefCheck = useRef<Player>(null);
    const playerRefAssignment = useRef<Player>(null);

    return (
        <section className={styles.mainSection}>
            <div className={styles.head}>
                <p className={styles.title}><b>Analytics dashboard</b></p>
                <h4 className={styles.subtitle}>These are your analytics for today <p className={styles.todayIs}>{todayIs()}</p></h4>
            </div>
            <section className={styles.cardContainer}>
                <div className={styles.card} onMouseEnter={() => playerRefCheck.current?.playFromBeginning()} onMouseLeave={() => playerRefCheck.current?.play()} >
                    <div className={styles.rowCardData}>
                        <p className={styles.cardStatus}>Repaired</p>
                        <p>Monthly</p>
                    </div>
                    <div className={styles.quantityIconDiv}>
                        <Player ref={playerRefCheck} size={45} icon={checkIcon} colorize='#286A24' />
                        <p className={styles.quantity}>19</p>
                    </div>
                    <div className={styles.rowCardData}>
                        <p>+4%</p>
                        <p>Since last week</p>
                    </div>
                </div>
                <div className={styles.card} onMouseEnter={() => playerRefLightning.current?.playFromBeginning()} onMouseLeave={() => playerRefLightning.current?.play()}>
                    <div className={styles.rowCardData}>
                        <p className={styles.cardStatus}>Broken</p>
                        <p>Monthly</p>
                    </div>
                    <div className={styles.quantityIconDiv}>
                        <Player ref={playerRefLightning} size={45} icon={lightningIcon} colorize='#EF233C' />
                        <p className={styles.quantity}>4</p>
                    </div>
                    <div className={styles.rowCardData}>
                        <p>-50%</p>
                        <p>Since last week</p>
                    </div>
                </div>
                <div className={styles.card} onMouseEnter={() => playerRefRepair.current?.playFromBeginning()} onMouseLeave={() => playerRefRepair.current?.play()}>
                    <div className={styles.rowCardData}>
                        <p className={styles.cardStatus}>Maintenance</p>
                        <p>Monthly</p>
                    </div>
                    <div className={styles.quantityIconDiv}>
                        <Player ref={playerRefRepair} size={45} icon={repairIcon} colorize='#3B88CC' />
                        <p className={styles.quantity}>12</p>
                    </div>
                    <div className={styles.rowCardData}>
                        <p>+100%</p>
                        <p>Since last week</p>
                    </div>
                </div>
                <div className={styles.card} onMouseEnter={() => playerRefAssignment.current?.playFromBeginning()} onMouseLeave={() => playerRefAssignment.current?.play()}>
                    <div className={styles.rowCardData}>
                        <p className={styles.cardStatus}>In use</p>
                        <p>Daily</p>
                    </div>
                    <div className={styles.quantityIconDiv}>
                        <Player ref={playerRefAssignment} size={45} icon={assignmentIcon} colorize='#CCB43B' />
                        <p className={styles.quantity}>76</p>
                    </div>
                    <div className={styles.rowCardData}>
                        <p>+25%</p>
                        <p>Since yesterday</p>
                    </div>
                </div>
            </section>
        </section>
    )
}