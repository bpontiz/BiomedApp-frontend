import styles from './page.module.css';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Toolbar() {
    return (
        <section className={styles.toolbar}>
            <div className={styles.divSearch}>
                <Stack direction="row" spacing={1}>
                    <IconButton>
                        <MenuIcon />
                    </IconButton>
                    <Button variant="outlined" startIcon={<SearchIcon />} color='inherit' size='medium'
                    sx={{borderRadius: '20px', border: '1px solid #999'}}>
                        <p className={styles.searchWord}>Search...</p>
                    </Button>
                </Stack>
            </div>
            <ul className={styles.ul}>
                <li>Bell</li>
                <li>Lang</li>
                <li>Mess</li>
                <li>Prof</li>
            </ul>
        </section>
    )
}