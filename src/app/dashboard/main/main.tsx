import { todayIs } from '@/app/lib/date';
import BuildIcon from '@mui/icons-material/Build';
import DoNotDisturbOnTotalSilenceIcon from '@mui/icons-material/DoNotDisturbOnTotalSilence';
import DangerousIcon from '@mui/icons-material/Dangerous';
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import FlashOffIcon from '@mui/icons-material/FlashOff';
import ConstructionSharpIcon from '@mui/icons-material/ConstructionSharp';
import styles from './main.module.css';

export function Maindashboard() {
    return (
        <section className={styles.mainSection}>
            <div className={styles.head}>
                <p className={styles.title}><b>Analytics dashboard</b></p>
                <h4 className={styles.subtitle}>These are your analytics for today <p className={styles.todayIs}>{todayIs()}</p></h4>
            </div>
            <section className={styles.cardContainer}>
                <div className={styles.card}>
                    <div className={styles.rowCardData}>
                        <p className={styles.cardStatus}>Repaired</p>
                        <p>Monthly</p>
                    </div>
                    <div className={styles.quantityIconDiv}>
                        <BuildIcon fontSize='large' sx={{color: '#46B041'}} />
                        <p className={styles.quantity}>19</p>
                    </div>
                    <div className={styles.rowCardData}>
                        <p>4%</p>
                        <p>Since last week</p>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.rowCardData}>
                        <p className={styles.cardStatus}>Broken</p>
                        <p>Monthly</p>
                    </div>
                    <div className={styles.quantityIconDiv}>
                        <FlashOffIcon fontSize='large' sx={{color: '#EF233C'}} />
                        <p className={styles.quantity}>4</p>
                    </div>
                    <div className={styles.rowCardData}>
                        <p>-50%</p>
                        <p>Since last week</p>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.rowCardData}>
                        <p className={styles.cardStatus}>Maintenance</p>
                        <p>Monthly</p>
                    </div>
                    <div className={styles.quantityIconDiv}>
                        <ConstructionSharpIcon fontSize='large' sx={{color: '#3B88CC'}} />
                        <p className={styles.quantity}>12</p>
                    </div>
                    <div className={styles.rowCardData}>
                        <p>+100%</p>
                        <p>Since last week</p>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.rowCardData}>
                        <p className={styles.cardStatus}>In use</p>
                        <p>Daily</p>
                    </div>
                    <div className={styles.quantityIconDiv}>
                        <AssignmentIndIcon fontSize='large' sx={{color: '#CCB43B'}} />
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