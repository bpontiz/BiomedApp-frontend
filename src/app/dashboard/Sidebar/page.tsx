'use client'
import styles from './page.module.css';
import {
    List, 
    ListItemButton, 
    ListItemIcon, 
    ListItemText,
    Collapse,
    ListSubheader,
    createTheme,
    ThemeProvider,
    Divider,
    Avatar
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import DescriptionIcon from '@mui/icons-material/Description';
import PieChartIcon from '@mui/icons-material/PieChart';
import EngineeringIcon from '@mui/icons-material/Engineering';
import InventoryIcon from '@mui/icons-material/Inventory';
import BuildIcon from '@mui/icons-material/Build';
import HandshakeIcon from '@mui/icons-material/Handshake';
import ViewCompactAltIcon from '@mui/icons-material/ViewCompactAlt';
import AssignmentLateIcon from '@mui/icons-material/AssignmentLate';
import HubIcon from '@mui/icons-material/Hub';
import { useState } from 'react';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import Image from 'next/image';
import { ibm } from '@/app/lib/fonts';
import humanFace from '../../../../public/human-face.jpg'
import hexIcon from '../../../../public/hexIcon.png';

export default function Sidebar() {
    const [openStatistics, setopenStatistics] = useState(false);
    const [openWorksheets, setopenWorksheets] = useState(false);
    const [openOrders, setopenOrders] = useState(false);
    const [openInventory, setopenInventory] = useState(false);

    const theme = createTheme({
        palette: {
            primary: {
                main: '#c5c5c5'
            }
        }
    });

    return (
        <main className={styles.main}>
            <div className={styles.top}>
                <div className={styles.title}>
                    <Image src={hexIcon} alt='enterprise logo' width={75} height={75}/>
                </div>
            </div>
            <Divider sx={{ bgcolor: '#284B63' }}
                orientation="horizontal" variant='middle' />
            <div className={styles.mid}>
                <Avatar sx={{width: 75, height: 75}} alt='Sara Mainn'>
                    <Image src={humanFace} alt='human face' width={100} height={75} />
                </Avatar>
                <p className={styles.profileName}>Sara Mann</p>
                <p>X-Ray Technician</p>
            </div>
            <Divider sx={{ bgcolor: '#284B63' }}
                orientation="horizontal" variant='middle' />
            <div className={styles.bottom}>
                <ThemeProvider theme={theme}>
                    <List
                        sx={{ width: '100%', maxWidth: 350}}
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                        subheader={
                            <ListSubheader component="div" id="nested-list-subheader">
                            </ListSubheader>
                        }
                        className={styles.midList}
                    >
                        <p className={`${ibm.className} ${styles.listTitle}`}>GENERAL</p>
                        <ListItemButton>
                            <ListItemIcon>
                                <DashboardIcon color='primary'/>
                            </ListItemIcon>
                            <ListItemText primary="Dashboard" disableTypography={true} />
                        </ListItemButton>
                        <ListItemButton 
                            onClick={() => {
                                setopenStatistics(!openStatistics);
                            }} 
                            selected={openStatistics}>
                            <ListItemIcon>
                                <AnalyticsIcon color='primary'/>
                            </ListItemIcon>
                            <ListItemText primary="Statistics" disableTypography={true}/>
                            {openStatistics ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={openStatistics} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemIcon>
                                        <PieChartIcon color='primary'/>
                                    </ListItemIcon>
                                    <ListItemText primary="Charts" disableTypography={true} />
                                </ListItemButton>
                            </List>
                        </Collapse>
                    
                        <p className={`${ibm.className} ${styles.listTitle}`}>MANAGEMENT</p>
                        <ListItemButton onClick={() => {
                                setopenWorksheets(!openWorksheets);
                            }}
                            selected={openWorksheets}>
                            <ListItemIcon>
                                <DescriptionIcon color='primary'/>
                            </ListItemIcon>
                            <ListItemText primary="Worksheets" disableTypography={true}/>
                            {openWorksheets ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={openWorksheets} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemIcon>
                                        <PieChartIcon color='primary'/>
                                    </ListItemIcon>
                                    <ListItemText primary="Charts" disableTypography={true} />
                                </ListItemButton>
                            </List>
                        </Collapse>
                        <ListItemButton onClick={() => setopenOrders(!openOrders)} selected={openOrders}>
                            <ListItemIcon>
                                <EngineeringIcon color='primary'/>
                            </ListItemIcon>
                            <ListItemText primary="Orders" disableTypography={true}/>
                            {openOrders ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={openOrders} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemIcon>
                                        <PieChartIcon color='primary'/>
                                    </ListItemIcon>
                                    <ListItemText primary="Charts" disableTypography={true} />
                                </ListItemButton>
                            </List>
                        </Collapse>
                        <ListItemButton onClick={() => setopenInventory(!openInventory)} selected={openInventory}>
                            <ListItemIcon>
                                <InventoryIcon color='primary'/>
                            </ListItemIcon>
                            <ListItemText primary="Inventory" disableTypography={true} />
                            {openInventory ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={openInventory} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <PieChartIcon color='primary'/>
                                </ListItemIcon>
                                <ListItemText primary="Charts" disableTypography={true} />
                            </ListItemButton>
                            </List>
                        </Collapse>
                        <ListItemButton>
                            <ListItemIcon>
                                <BuildIcon color='primary'/>
                            </ListItemIcon>
                            <ListItemText primary="Maintenance" disableTypography={true} />
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemIcon>
                                <HandshakeIcon color='primary'/>
                            </ListItemIcon>
                            <ListItemText primary="Commodity loan" disableTypography={true} />
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemIcon>
                                <HubIcon color='primary'/>
                            </ListItemIcon>
                            <ListItemText primary="Pipeline" disableTypography={true} />
                        </ListItemButton>
                        <p className={`${ibm.className} ${styles.listTitle}`}>FOUNDATION</p>
                        <ListItemButton>
                            <ListItemIcon>
                                <ViewCompactAltIcon color='primary'/>
                            </ListItemIcon>
                            <ListItemText primary="Overview" disableTypography={true} />
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemIcon>
                                <AssignmentLateIcon color='primary'/>
                            </ListItemIcon>
                            <ListItemText primary="Documentation" disableTypography={true} />
                        </ListItemButton>
                    </List>
                </ThemeProvider>
            </div>
        </main>
    )
}