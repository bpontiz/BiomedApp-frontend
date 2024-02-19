'use client';
import Sidebar from './sidebar/sidebar';
import { ibm } from '../lib/fonts';
import { AppBar, drawerWidth, DrawerHeader, Main } from './drawer';
import { Box, Button, Drawer, Stack, createTheme, useTheme, ThemeProvider, Menu, MenuItem, Divider, ListItemIcon, Avatar } from '@mui/material';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';
import Tooltip from '@mui/material/Tooltip';
import Image, { StaticImageData } from 'next/image';
import hexIcon from '../../../public/hexIcon.png';
import usFlag from '../../../public/us.png';
import esFlag from '../../../public/es.png';
import deFlag from '../../../public/de.png';
import styles from './page.module.css';
import person1 from '../lib/boy1.png';
import person2 from '../lib/boy2.png';
import { Logout, PersonAdd, Settings  } from '@mui/icons-material';

export default function Layout({ children }: { children: React.ReactNode }) {
    const theme = useTheme();
    const [open, setOpen] = useState(true);
    const [count, setCount] = useState(3);
    const [lang, setLang] = useState(usFlag);
    const [invisible, setInvisible] = useState(false);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [anchorElLanguage, setAnchorElLanguage] = useState<null | HTMLElement>(null);
    const [anchorElMessages, setAnchorElMessages] = useState<null | HTMLElement>(null);
    const openProfile = Boolean(anchorEl);
    const openLanguage = Boolean(anchorElLanguage);
    const openMessages = Boolean(anchorElMessages);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClickLanguage = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElLanguage(event.currentTarget);
    };

    const handleClickMessages = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElMessages(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleCloseLanguage = () => {
        setAnchorElLanguage(null);
    };

    const handleCloseMessages = () => {
        setAnchorElMessages(null);
    };

    const handleLanguageChose = (langChosen: StaticImageData) => {
        setLang(langChosen);
    };

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

    const handleBadgeVisibility = () => {
        setInvisible(!invisible);
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
                        boxShadow: '0px 2px 5px 0px rgba(0,0,0,0.15)',
                    }}
                >
                    <div>
                        <Tooltip title="Menu" arrow>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                onClick={handleDrawerOpen}
                                edge="start"
                                sx={{ ml: 1, mr: 1, ...(open && { display: 'none' }) }}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Tooltip>
                        <Button variant="outlined" startIcon={<SearchIcon />} color='inherit' size='medium'
                            sx={{borderRadius: '20px', border: '1px solid #999', ml: '1rem'}}>
                                <p className={styles.searchWord}>Search...</p>
                        </Button>
                    </div>
                    <div>
                        <Stack direction="row" spacing={2} sx={{mr: '1rem'}}>
                            <Tooltip title="Messages" arrow>
                                <Badge
                                    color="warning"
                                    badgeContent={count}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                >
                                    <IconButton sx={{bgcolor: '#FFF9E4', borderRadius: '10px'}}
                                        onClick={handleClickMessages} 
                                        aria-label="messages"
                                        aria-controls={openMessages ? 'messages-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={openMessages ? 'true' : undefined}
                                    >
                                        <MessageIcon sx={{height: '20px'}} color='warning'/>
                                    </IconButton>
                                </Badge>
                            </Tooltip>
                            <Tooltip title="Language" arrow>
                                <IconButton
                                    sx={{bgcolor: '#EBEBEB', borderRadius: '10px'}}
                                    onClick={handleClickLanguage} 
                                    aria-label="language"
                                    aria-controls={openLanguage ? 'language-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={openLanguage ? 'true' : undefined}>
                                    <Image src={lang} alt='us' width={22} height={16} priority />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Notifications" arrow>
                                <Badge
                                    color='error'
                                    variant="dot"
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                >
                                    <IconButton aria-label="delete" sx={{bgcolor: '#FFE7EA', borderRadius: '10px'}}>
                                        <NotificationsIcon sx={{height: '20px'}} color='error' />
                                    </IconButton>
                                </Badge>
                            </Tooltip>
                            <Tooltip title="Profile" arrow>
                                <IconButton 
                                    onClick={handleClick} 
                                    aria-label="profile"
                                    aria-controls={openProfile ? 'account-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={openProfile ? 'true' : undefined}
                                    sx={
                                        {
                                            bgcolor: '#DFF6FF', 
                                            borderRadius: '10px'
                                        }
                                    }
                                >
                                    <PersonIcon htmlColor='#3384A4' />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                anchorEl={anchorElMessages}
                                id="messages-menu"
                                open={openMessages}
                                onClose={handleCloseMessages}
                                onClick={handleClose}
                                PaperProps={{
                                elevation: 0,
                                sx: {
                                    overflow: 'visible',
                                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                    mt: 1.5,
                                    '& .MuiAvatar-root': {
                                        width: 32,
                                        height: 32,
                                        ml: -0.5,
                                        mr: 1,
                                    },
                                    '&::before': {
                                        content: '""',
                                        display: 'block',
                                        position: 'absolute',
                                        top: 0,
                                        right: 14,
                                        width: 10,
                                        height: 10,
                                        bgcolor: 'background.paper',
                                        transform: 'translateY(-50%) rotate(45deg)',
                                        zIndex: 0,
                                    },
                                },
                                }}
                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                            >
                                <MenuItem>
                                    <p className={ibm.className}>You have <strong>3</strong> new messages</p>
                                </MenuItem>
                                <Divider />
                                <MenuItem onClick={handleCloseMessages}>
                                    <ListItemIcon>
                                        <Avatar alt='Person 1' sx={{width: 75, height: 75}}>
                                            <Image src={person1} alt='Person 1' width={70} height={45} />
                                        </Avatar>
                                    </ListItemIcon>
                                    <div className={ibm.className}>
                                        <p><strong>Peril Jones</strong></p>
                                        <p className={styles.personMessage}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae necessitatibus corporis beatae quidem ratione dignissimos placeat accusamus quae eligendi recusandae delectus esse impedit culpa labore quod iste eius, rem voluptas.</p>
                                    </div>
                                </MenuItem>
                                <Divider />
                                <MenuItem onClick={handleCloseMessages}>
                                    <ListItemIcon>
                                        <Avatar alt='Person 2' sx={{width: 75, height: 75}}>
                                            <Image src={person2} alt='Person 2' width={70} height={45}/>
                                        </Avatar>
                                    </ListItemIcon>
                                    <div className={ibm.className}>
                                        <p><strong>Ernesto Briggs</strong></p>
                                        <p className={styles.personMessage}>Aram it enesur volks valks</p>
                                    </div>
                                </MenuItem>                                
                            </Menu>
                            <Menu
                                anchorEl={anchorElLanguage}
                                id="language-menu"
                                open={openLanguage}
                                onClose={handleCloseLanguage}
                                onClick={handleClose}
                                PaperProps={{
                                elevation: 0,
                                sx: {
                                    overflow: 'visible',
                                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                    mt: 1.5,
                                    '& .MuiAvatar-root': {
                                        width: 32,
                                        height: 32,
                                        ml: -0.5,
                                        mr: 1,
                                    },
                                    '&::before': {
                                        content: '""',
                                        display: 'block',
                                        position: 'absolute',
                                        top: 0,
                                        right: 14,
                                        width: 10,
                                        height: 10,
                                        bgcolor: 'background.paper',
                                        transform: 'translateY(-50%) rotate(45deg)',
                                        zIndex: 0,
                                    },
                                },
                                }}
                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                            >
                                <MenuItem onClick={() => {
                                    handleCloseLanguage();
                                    handleLanguageChose(usFlag);
                                }}>
                                    <ListItemIcon>
                                        <Image src={usFlag} alt='us' width={22} height={16} />
                                    </ListItemIcon>
                                    <p className={ibm.className}>English</p>
                                </MenuItem>
                                <MenuItem onClick={() => {
                                    handleCloseLanguage();
                                    handleLanguageChose(esFlag);
                                }}>
                                    <ListItemIcon>
                                        <Image src={esFlag} alt='us' width={22} height={16} />
                                    </ListItemIcon>
                                    <p className={ibm.className}>Spanish</p>
                                </MenuItem>
                                <MenuItem onClick={() => {
                                    handleLanguageChose(deFlag);
                                    handleCloseLanguage();
                                }}>
                                    <ListItemIcon>
                                        <Image src={deFlag} alt='us' width={22} height={16} />
                                    </ListItemIcon>
                                    <p className={ibm.className}>Deutch</p>
                                </MenuItem>                                
                            </Menu>
                            <Menu
                                anchorEl={anchorEl}
                                id="account-menu"
                                open={openProfile}
                                onClose={handleClose}
                                onClick={handleClose}
                                PaperProps={{
                                elevation: 0,
                                sx: {
                                    overflow: 'visible',
                                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                    mt: 1.5,
                                    '& .MuiAvatar-root': {
                                        width: 32,
                                        height: 32,
                                        ml: -0.5,
                                        mr: 1,
                                    },
                                    '&::before': {
                                        content: '""',
                                        display: 'block',
                                        position: 'absolute',
                                        top: 0,
                                        right: 14,
                                        width: 10,
                                        height: 10,
                                        bgcolor: 'background.paper',
                                        transform: 'translateY(-50%) rotate(45deg)',
                                        zIndex: 0,
                                    },
                                },
                                }}
                                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                            >
                                <MenuItem onClick={handleClose}>
                                    <p className={ibm.className}>Profile</p>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <p className={ibm.className}>My account</p>
                                </MenuItem>
                                <Divider />
                                <MenuItem onClick={handleClose}>
                                <ListItemIcon>
                                    <PersonAdd fontSize="small" />
                                </ListItemIcon>
                                <p className={ibm.className}>Add another account</p>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                <ListItemIcon>
                                    <Settings fontSize="small" />
                                </ListItemIcon>
                                <p className={ibm.className}>Settings</p>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                <ListItemIcon>
                                    <Logout fontSize="small" />
                                </ListItemIcon>
                                <p className={ibm.className}>Logout</p>
                                </MenuItem>
                            </Menu>
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
                            <p className={styles.enterpriseName}>Biomapp</p>
                            <Tooltip title="Close" arrow>
                                <IconButton onClick={handleDrawerClose} className={styles.closeMenu}>
                                    {theme.direction === 'ltr' ? <ChevronLeftIcon color='primary' fontSize='small' /> : <ChevronRightIcon color='primary' fontSize='small' />}
                                </IconButton>
                            </Tooltip>
                        </div>
                    </DrawerHeader>
                    <Sidebar />
                </Drawer>
            </ThemeProvider>
            <Main open={open}>
                <DrawerHeader />
                <div className={styles.mainDashboard}>
                    {children}
                </div>
            </Main>
        </Box>
    );
}