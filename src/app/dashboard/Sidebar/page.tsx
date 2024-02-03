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
    ThemeProvider
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



export default function Sidebar() {
    const [openStatistics, setopenStatistics] = useState(false);
    const [openWorksheets, setopenWorksheets] = useState(false);
    const [openOrders, setopenOrders] = useState(false);
    const [openInventory, setopenInventory] = useState(false);

    const theme = createTheme({
        palette: {
            primary: {
                main: '#FCF7F8'
            }
        }
    });

    return (
        <main className={styles.main}>
            <div className={styles.top}>
                <div className={styles.title}>
                    <img src="" alt="icon" />
                    <p>BIOMAPP</p>
                </div>
                <img src="" alt="burguer" />
            </div>
            <div className={styles.mid}>
                <img src="" alt="profile" />
                <p>Juan Pedro</p>
                <p>Technician</p>
            </div>
            <div className={styles.bottom}>
                {/* <ul className={styles.ul}>
                    <p>GENERAL</p>
                    <li className={styles.li}>Dashboard</li>
                    <li className={styles.li}>Statistics</li>
                </ul>
                <ul className={styles.ul}>
                    <p>MANAGEMENT</p>
                    <li className={styles.li}>Worksheets</li>
                    <li className={styles.li}>Orders</li>
                    <li className={styles.li}>Inventory</li>
                    <li className={styles.li}>Maintenance</li>
                    <li className={styles.li}>Comodato</li>
                    <li className={styles.li}>Polyduct</li>
                </ul>
                <ul className={styles.ul}>
                    <p>FOUNDATION</p>
                    <li className={styles.li}>Overview</li>
                    <li className={styles.li}>Documentation</li>
                </ul> */}

                <ThemeProvider theme={theme}>
                    <List
                        sx={{ width: '100%', maxWidth: 370}}
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                        subheader={
                            <ListSubheader component="div" id="nested-list-subheader">
                            </ListSubheader>
                        }
                    >
                        <p className={styles.listTitle}>GENERAL</p>
                        <ListItemButton>
                            <ListItemIcon>
                                <DashboardIcon color='primary'/>
                            </ListItemIcon>
                            <ListItemText primary="Dashboard" disableTypography={true} />
                        </ListItemButton>
                        <ListItemButton onClick={() => setopenStatistics(!openStatistics)}>
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
                    
                        <p className={styles.listTitle}>MANAGEMENT</p>
                        <ListItemButton onClick={() => setopenWorksheets(!openWorksheets)}>
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
                        <ListItemButton onClick={() => setopenOrders(!openOrders)}>
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
                        <ListItemButton onClick={() => setopenInventory(!openInventory)}>
                            <ListItemIcon>
                                <InventoryIcon color='primary'/>
                            </ListItemIcon>
                            <ListItemText primary="Inventory" disableTypography={true}/>
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
                        <p className={styles.listTitle}>FOUNDATION</p>
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