import Product from "../schema/product";
import styles from './item.module.css';
import Image from "next/image";
import CT from '../../../../../public/Header_CT.jpg';
import BuildIcon from '@mui/icons-material/Build';
import { Chip, IconButton, Stack, Tooltip } from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { ReactNode, useEffect } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export default function Item( { id, name, serie, status, last_service, next_service, area, image, description }: Product ) {

    useEffect(() => {
        console.log(image);
    }, []);

    const handleDeleteEquipment = async () => {
        const url = `${process.env.NEXT_PUBLIC_API_DELETEMACHINERY}/${id}` || "http:localhost/";
        
        await fetch(url, { method: "DELETE" });
    }

    return (
        <section className={styles.section}>
            <div className={styles.cardD}>
                <div className={styles.cardHeaderD}>
                    <h2>{name}</h2>
                </div>
                <div>
                    <Image className={styles.deviceImg} src={`/${image}`}width={300} height={150} alt="Medical Device" />
                    <div className={styles.cardBodyD}>
                        <p>{description}</p>
                        <ul className={styles.ulItems}>
                            <li>Serie: {serie}</li>
                            <li>Last service: {last_service}</li>
                            <li>Next service: {next_service}</li>
                            <li>Area: {area}</li>
                        </ul>
                        <div className={styles.buttonsDivD}>
                            <Stack direction="row" spacing={-1}>
                                <Tooltip title="Repair" arrow>
                                    <IconButton aria-label="repair">
                                        <BuildIcon sx={{color: "#286A24"}} />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="More" arrow>
                                    <IconButton aria-label="more details">
                                        <AddCircleIcon sx={{color: "#181830"}} />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Edit" arrow>
                                    <IconButton aria-label="edit">
                                        <EditIcon sx={{color: "#2774AE"}} />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Delete" arrow onClick={handleDeleteEquipment}>
                                    <IconButton aria-label="delete">
                                        <DeleteIcon sx={{color: "#ED2839"}} />
                                    </IconButton>
                                </Tooltip>
                            </Stack>
                            {
                                (function (): ReactNode {
                                    if (status === 'Available') {
                                        return <Chip label={status}size="small" 
                                        sx={{
                                            backgroundColor: "greenyellow",
                                            fontWeight: "bold",
                                            fontSize: "12px"
                                        }} />
                                    }
                                    if (status === 'In use') {
                                        return <Chip label={status}size="small"
                                        sx={{
                                            backgroundColor: "gold",
                                            fontWeight: "bold",
                                            fontSize: "12px"
                                        }} />
                                    }
                                    if (status === 'Damaged') {
                                        return <Chip label={status}size="small"
                                        sx={{
                                            backgroundColor: "rgb(255, 23, 23)",
                                            color: "#FFF",
                                            fontWeight: "bold",
                                            fontSize: "12px"
                                        }} />
                                    }

                                    return <Chip label={status} size="small" sx={{
                                        backgroundColor: "skyblue",
                                        fontWeight: "bold",
                                            fontSize: "12px"
                                    }} />
                                    
                                })()
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};