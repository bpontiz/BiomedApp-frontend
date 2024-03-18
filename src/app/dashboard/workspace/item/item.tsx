import Product from "../schema/product";
import styles from './item.module.css';
import Image from "next/image";
import BuildIcon from '@mui/icons-material/Build';
import { Button, Chip, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, IconButton, MenuItem, Select, SelectChangeEvent, Stack, TextField, Tooltip } from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { FormEvent, ReactNode, useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { ibm } from "@/app/lib/fonts";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { VisuallyHiddenInput } from "../form";
import dayjs from "dayjs";
import Link from "next/link";

export default function Item( { id, name, serie, status, last_service, next_service, area, image, description }: Product ) {
    const [open, setOpen] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [_status, setStatus] = useState('');
    const [newImage, setNewImage] = useState(image);
    const handleDeleteEquipment = async () => {
        const url = `${process.env.NEXT_PUBLIC_API_DELETEMACHINERY}/${id}` || "http:localhost:/";
        
        await fetch(url, { method: "DELETE" });
    };

    const handleClick = () => {
        setOpen(!open);
    };

    const handleClickEditOpen = () => {
        setOpenEdit(true);
    };

    const handleClickEditClose = () => {
        setStatus('');
        setOpenEdit(false);
    };

    const handleStatusChange = (event: SelectChangeEvent) => {
        setStatus(event.target.value);
    };

    const handleNewImageChange = (event: FormEvent<HTMLInputElement>) => { 
        setNewImage(event.currentTarget.value);
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
                        <p className={styles.pDescription}>{description}</p>
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
                                        <Link 
                                            href={`/dashboard/workspace/itemDetail/${String(id)}`}
                                            style={{display: "grid", placeItems: "center"}}>
                                            <AddCircleIcon sx={{color: "#181830"}} />
                                        </Link>
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Edit" arrow>
                                    <IconButton aria-label="edit">
                                        <EditIcon sx={{color: "#2774AE"}} onClick={handleClickEditOpen}/>
                                        <Dialog
                                            open={openEdit}
                                            onClose={handleClickEditClose}
                                            PaperProps={{
                                                component: 'form',
                                                onSubmit: async (event: React.FormEvent<HTMLFormElement>) => {
                                                    event.preventDefault();
                                                    const formData = new FormData(event.currentTarget);
                                                    const formJson = Object.fromEntries((formData as any).entries());
                                                    const url = `${process.env.NEXT_PUBLIC_API_UPDATEMACHINERY}/${id}` || 'https://localhost';
                                                    const updatedEquipment = {
                                                        ...formJson,
                                                        image: formJson.image.name || newImage
                                                    };
                                                    await fetch(url, {
                                                        method: "PUT",
                                                        headers: {"Content-Type": "application/json"},
                                                        body: JSON.stringify(updatedEquipment)
                                                    });
                                                    handleClickEditClose();
                                                },
                                            }}
                                        >
                                            <DialogTitle className={ibm.className}>Update {name}</DialogTitle>
                                            <DialogContent>
                                                <DialogContentText sx={{ marginBottom: "1rem"}} className={ibm.className}>
                                                    Edit this equipment with new information.
                                                </DialogContentText>
                                                <TextField
                                                    autoFocus
                                                    required
                                                    margin="dense"
                                                    id="name"
                                                    name="name"
                                                    label="Name"
                                                    type="text"
                                                    fullWidth
                                                    variant="outlined"
                                                    defaultValue={name || ""}
                                                />
                                                <TextField
                                                    autoFocus
                                                    required
                                                    margin="dense"
                                                    id="name"
                                                    name="serie"
                                                    label="Serie"
                                                    type="text"
                                                    fullWidth
                                                    variant="outlined"
                                                    defaultValue={serie || ""}
                                                />
                                                <Select
                                                    required
                                                    margin="dense"
                                                    id="name"
                                                    name="status"
                                                    aria-label="Status"
                                                    fullWidth
                                                    className={ibm.className}
                                                    sx={{
                                                        margin: "10px 0"
                                                    }}
                                                    variant="outlined"
                                                    defaultValue={status || "Available"}
                                                    onChange={handleStatusChange}
                                                >
                                                    <MenuItem disabled value="">
                                                        <em className={ibm.className}>Status</em>
                                                    </MenuItem>
                                                    <MenuItem value={'Available'} className={ibm.className}>Available</MenuItem>
                                                    <MenuItem value={'In use'} className={ibm.className}>In use</MenuItem>
                                                    <MenuItem value={'Repairing'} className={ibm.className}>Repairing</MenuItem>
                                                    <MenuItem value={'Damaged'} className={ibm.className}>Damaged</MenuItem>
                                                </Select>
                                                <div className={styles.servicesDiv}>
                                                    <div className={styles.servicesDiv2}>
                                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                            <DatePicker
                                                                label="Last service"
                                                                name="last_service"
                                                                defaultValue={dayjs(last_service)}
                                                            />
                                                        </LocalizationProvider>
                                                    </div>
                                                    <div className={styles.servicesDiv3}>
                                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                            <DatePicker
                                                                label="Next service"
                                                                name="next_service"
                                                                defaultValue={dayjs(next_service)}
                                                            />
                                                        </LocalizationProvider>
                                                    </div>
                                                </div>
                                                <TextField
                                                    autoFocus
                                                    required
                                                    margin="dense"
                                                    id="name"
                                                    name="description"
                                                    label="Description"
                                                    type="text"
                                                    fullWidth
                                                    variant="outlined"
                                                    defaultValue={description || ""}
                                                />
                                                <TextField
                                                    autoFocus
                                                    required
                                                    margin="dense"
                                                    id="name"
                                                    name="area"
                                                    label="Area"
                                                    type="text"
                                                    fullWidth
                                                    variant="outlined"
                                                    defaultValue={area || ""}
                                                />
                                                <Button
                                                    component="label"
                                                    role={undefined}
                                                    variant="contained"
                                                    tabIndex={-1}
                                                    startIcon={<CloudUploadIcon />}
                                                    className={ibm.className}
                                                    sx={{
                                                        margin: "5px 0"
                                                    }}
                                                >
                                                    Upload file
                                                    <VisuallyHiddenInput
                                                        type="file"
                                                        id="name"
                                                        onChange={handleNewImageChange}
                                                        name="image"
                                                    />
                                                </Button>
                                                <p>{newImage || ""}</p>
                                            </DialogContent>
                                            <DialogActions>
                                                <Button onClick={handleClickEditClose} className={ibm.className} variant="contained">Cancel</Button>
                                                <Button type="submit" className={ibm.className}variant="contained">Update</Button>
                                            </DialogActions>
                                        </Dialog>
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