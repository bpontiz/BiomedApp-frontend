'use client';
import ItemListContainer from './itemListContainer/page';
import Sidebar from './sidebar/page';
import { ibm } from '../lib/fonts';
import { AppBar, drawerWidth, DrawerHeader, Main } from './drawer';
import { Box, Button, Drawer, Stack, createTheme, useTheme, ThemeProvider } from '@mui/material';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Image from 'next/image';
import hexIcon from '../../../public/hexIcon.png';
import usFlag from '../../../public/us.png';
import styles from './page.module.css';

export default function Dashboard() {
    const theme = useTheme();
    const [open, setOpen] = useState(true);

    const theme2 = createTheme({
        palette: {
            primary: {
                main: '#c5c5c5',
            },
            secondary: {
                main: '#181830',
                light: '#87CEEB'
            },
            info: {
                main: '#FFFFFF'
            }
        },
    });

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box 
            sx={{
                display: 'flex',
            }} 
            className={`${styles.main} ${ibm.className}`}
        >
            <ThemeProvider theme={theme2}>
                <AppBar 
                    position="fixed" 
                    open={open} 
                    sx={{
                        display: 'flex',
                        flexDirection: 'row' ,
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        bgcolor: `${theme2.palette.info.main}`,
                        height: '85px',
                        boxShadow: '0px 2px 5px 0px rgba(0,0,0,0.15)'
                    }}
                >
                    <div>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{ ml: 1, mr: 1, ...(open && { display: 'none' }) }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Button variant="outlined" startIcon={<SearchIcon />} color='inherit' size='medium'
                            sx={{borderRadius: '20px', border: '1px solid #999', ml: 2}}>
                                <p className={styles.searchWord}>Search...</p>
                        </Button>
                    </div>
                    <div>
                        <Stack direction="row" spacing={1} sx={{mr: '1rem'}}>
                            <IconButton aria-label="delete" sx={{bgcolor: '#FFF9E4', borderRadius: '10px'}}>
                                <MessageIcon sx={{height: '20px'}} color='warning'/>
                            </IconButton>
                            <IconButton aria-label="delete" sx={{bgcolor: '#FFE7EA', borderRadius: '10px'}}>
                                <NotificationsIcon sx={{height: '20px'}} color='error' />
                            </IconButton>
                            <IconButton aria-label="delete" sx={{bgcolor: '#EBEBEB', borderRadius: '10px'}}>
                                <Image src={usFlag} alt='us' width={22} height={16} />
                            </IconButton>
                            <IconButton aria-label="profile" sx={{bgcolor: '#DFF6FF', borderRadius: '10px'}}>
                                <PersonIcon htmlColor='#3384A4' />
                            </IconButton>
                        </Stack>
                    </div>
                </AppBar>
                <Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            boxSizing: 'border-box',
                        },
                    }} variant="persistent" anchor="left" open={open}
                >
                    <DrawerHeader 
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '87px',
                            bgcolor: `${theme2.palette.secondary.main}`,
                            pt: '2rem',
                            pb: '2rem'
                        }}
                    >
                        <div className={styles.enterpriseLogo}>
                            <Image src={hexIcon} alt='enterprise logo' width={75} height={75} priority={true} />
                            <p className={styles.enterpriseName}>BIOMAPP</p>
                        </div>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'ltr' ? <ChevronLeftIcon color='primary' /> : <ChevronRightIcon color='primary' />}
                        </IconButton>
                    </DrawerHeader>
                    <Sidebar />
                </Drawer>
            </ThemeProvider>
            <Main open={open}>
                <DrawerHeader />
                <div className={styles.itemlistcontainer}>
                    <ItemListContainer />
                </div>
            </Main>
        </Box>
    )
}