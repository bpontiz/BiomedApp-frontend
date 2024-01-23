import Link from 'next/link';
import ItemListContainer from './ItemListContainer/itemListContainer';
import Sidebar from './Sidebar/page';
import Toolbar from './Toolbar/toolbar';
import './page.module.css';

export default function Dashboard() {
    return <>
        <h2>Dashboard</h2>
        <Toolbar />
        <Sidebar />
        <ItemListContainer />
        <Link href="/">Go to home</Link>
    </>
}