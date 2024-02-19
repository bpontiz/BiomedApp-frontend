import Product from "../schema/product";
import styles from './item.module.css';
import Image from "next/image";
import CT from '../../../../../public/Header_CT.jpg';
import BuildIcon from '@mui/icons-material/Build';
import { Chip, IconButton, Stack, Tooltip } from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { ReactNode } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export default function Item( { id, name, serie, status, last_service, next_service, area, image, description }: Product ) {

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
                    <Image className={styles.deviceImg} src={CT} alt="Medical Device" priority />
                    {/* <div className={styles.deviceImg}>{image}</div> */}
                    <div className={styles.cardBodyD}>
                        <p>{description}</p>
                        <br />
                        <ul className={styles.ulItems}>
                            <li>Serie: {serie}</li>
                            <li>Last service: {last_service}</li>
                            <li>Next service: {next_service}</li>
                            <li>Area: {area}</li>
                        </ul>
                        <br />
                        <div className={styles.buttonsDivD}>
                            <Stack direction="row" spacing={-1}>
                                <Tooltip title="Repair" arrow>
                                    <IconButton className={styles.button1} aria-label="repair">
                                        <BuildIcon />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="More" arrow>
                                    <IconButton className={styles.button2} aria-label="more details">
                                        <AddCircleIcon />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Edit" arrow>
                                    <IconButton className={styles.button4} aria-label="edit">
                                        <EditIcon />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Delete" arrow onClick={handleDeleteEquipment}>
                                    <IconButton className={styles.button3} aria-label="delete">
                                        <DeleteIcon />
                                    </IconButton>
                                </Tooltip>
                            </Stack>
                            {
                                (function (): ReactNode {
                                    if (status === 'Available') {
                                        return <Chip label={status}size="small" className={styles.statusAvailable} />
                                    }
                                    if (status === 'In use') {
                                        return <Chip label={status}size="small" className={styles.statusInUse} />
                                    }
                                    if (status === 'Damaged') {
                                        return <Chip label={status}size="small" className={styles.statusDamaged} />
                                    }

                                    return <Chip label={status}size="small" className={styles.statusRepairing} />
                                    
                                })()
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};