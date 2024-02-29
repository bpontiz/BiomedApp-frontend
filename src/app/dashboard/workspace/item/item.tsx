import Product from "../schema/product";
import styles from './item.module.css';
import Image from "next/image";
import BuildIcon from '@mui/icons-material/Build';
import { Button, Chip, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, IconButton, Stack, Tooltip } from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { ReactNode, useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export default function Item( { id, name, serie, status, last_service, next_service, area, image, description }: Product ) {
    const [open, setOpen] = useState(false);
    const handleDeleteEquipment = async () => {
        const url = `${process.env.NEXT_PUBLIC_API_DELETEMACHINERY}/${id}` || "http:localhost/";
        
        await fetch(url, { method: "DELETE" });
    }

    const handleClick = () => {
        setOpen(!open);
    };

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
                        <Divider />
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
                                <Tooltip title="Delete" arrow onClick={handleClick}>
                                    <IconButton aria-label="delete">
                                        <DeleteIcon sx={{color: "#ED2839"}} />
                                        <Dialog
                                            open={open}
                                            onClose={handleClick}
                                            aria-labelledby="alert-dialog-title"
                                            aria-describedby="alert-dialog-description"
                                        >
                                            <DialogTitle id="alert-dialog-title">
                                            {"Delete equipment?"}
                                            </DialogTitle>
                                            <DialogContent>
                                                <DialogContentText id="alert-dialog-description">
                                                    You are going to delete this <strong>{name}</strong>. This action cannot be undone.
                                                </DialogContentText>
                                            </DialogContent>
                                            <DialogActions>
                                                <Button onClick={handleClick}>Disagree</Button>
                                                <Button onClick={handleDeleteEquipment} autoFocus>
                                                Agree</Button>
                                            </DialogActions>
                                        </Dialog>
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