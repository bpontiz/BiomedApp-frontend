'use client'
import { ibm } from "@/app/lib/fonts";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, MenuItem, Select, SelectChangeEvent, TextField, styled } from "@mui/material";
import React, { useState } from "react";
import styles from './page.module.css';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

export default function FormDialog() {
    const [open, setOpen] = useState(false);
    const [_status, setStatus] = useState('');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClickClose = () => {
        setStatus('')
        setOpen(false);
    };

    const handleStatusChange = (event: SelectChangeEvent) => {
        setStatus(event.target.value);
    };

    return <>
        <section className={ibm.className}>
            <Button variant="contained" onClick={handleClickOpen}
            sx={{
                fontWeight: "400",
                fontSize: "12px",
                textTransform: "capitalize",
            }}>
                Add equipment
            </Button>
            <form className={ibm.className}>
                <Dialog
                    open={open}
                    onClose={handleClickClose}
                    PaperProps={{
                        component: 'form',
                        onSubmit: async (event: React.FormEvent<HTMLFormElement>) => {
                            event.preventDefault();
                            const formData = new FormData(event.currentTarget);
                            const formJson = Object.fromEntries((formData as any).entries());
                            const url = process.env.NEXT_PUBLIC_API_POSTMACHINERY || 'https://localhost';
                            const newEquipment = {
                                ...formJson,
                                image: formJson.image.name
                            };
                            await fetch(url, {
                                method: "POST",
                                headers: {"Content-Type": "application/json"},
                                body: JSON.stringify(newEquipment)
                            });
                            handleClickClose();
                        },
                    }}
                >
                    <DialogTitle className={ibm.className}>Create new</DialogTitle>
                    <DialogContent>
                        <DialogContentText className={ibm.className}>
                            Add new equipment to your dashboard.
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
                            defaultValue="Available"
                            onChange={handleStatusChange}
                        >
                            <MenuItem disabled value="">
                                <em>Status</em>
                            </MenuItem>
                            <MenuItem value={'Available'} className={ibm.className}>Available</MenuItem>
                            <MenuItem value={'In use'} className={ibm.className}>In use</MenuItem>
                            <MenuItem value={'Repairing'} className={ibm.className}>Repairing</MenuItem>
                            <MenuItem value={'Damaged'} className={ibm.className}>Damaged</MenuItem>
                        </Select>
                        <div className={styles.servicesDiv}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    label="Last service"
                                    name="last_service"
                                />
                            </LocalizationProvider>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    label="Next service"
                                    name="next_service"
                                />
                            </LocalizationProvider>
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
                            <VisuallyHiddenInput type="file" id="name"
                            name="image" required />
                        </Button>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClickClose} className={ibm.className} variant="contained">Cancel</Button>
                        <Button type="submit" className={ibm.className}variant="contained">Create</Button>
                    </DialogActions>
                </Dialog>
            </form>
        </section>
    </>
};