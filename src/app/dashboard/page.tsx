'use client';
import ItemListContainer from './itemListContainer/page';
import Sidebar from './sidebar/page';
import Toolbar from './toolbar/page';
import styles from './page.module.css';
import { ibm } from '../lib/fonts';
import { AppBar, drawerWidth, DrawerHeader, Main, AppBarProps } from './drawer';
import { Box, Button, Drawer, Stack, useTheme } from '@mui/material';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Image from 'next/image';
import hexIcon from '../../../public/hexIcon.png';

export default function Dashboard() {
    const theme = useTheme();
    const [open, setOpen] = useState(true);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return <>
        <main className={`${styles.main} ${ibm.className}`}>
            
            <Box sx={{ display: 'flex' }}>
                <AppBar position="fixed" open={open} className={styles.toolbarAppBar}>
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
                            sx={{borderRadius: '20px', border: '1px solid #999'}}>
                                <p className={styles.searchWord}>Search...</p>
                        </Button>
                    </div>
                    <div>
                        <Stack direction="row" spacing={1}>
                        <IconButton aria-label="delete">
                            <SearchIcon />
                        </IconButton>
                        <IconButton aria-label="delete">
                            <SearchIcon />
                        </IconButton>
                        <IconButton aria-label="delete">
                            <SearchIcon />
                        </IconButton>
                        <IconButton aria-label="delete">
                            <SearchIcon />
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
                    <DrawerHeader sx={{height: '87px'}} className={styles.drawerHeaderLogo}>
                        <div className={styles.enterpriseLogo}>
                            <Image src={hexIcon} alt='enterprise logo' width={75} height={75}/>
                        </div>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'ltr' ? <ChevronLeftIcon color='primary' /> : <ChevronRightIcon />}
                        </IconButton>
                    </DrawerHeader>
                    <Sidebar />
                </Drawer>
            </Box>

            <div className={styles.itemlistcontainer}>
                <ItemListContainer />
            </div>
        </main>
    </>
}