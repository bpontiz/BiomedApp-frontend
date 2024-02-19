'use client'
import { ibm } from "@/app/lib/fonts";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material";
import { useState } from "react";
import styles from './page.module.css';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export default function FormDialog() {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClickClose = () => {
        setOpen(false);
    };

    return <>
        <section className={ibm.className}>
            <Button variant="text" className={`${styles.addEquipment} ${ibm.className}`} onClick={handleClickOpen}>
                Add equipment
            </Button>
            <form>
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
                            await fetch(url, {
                                method: "POST",
                                headers: {"Content-Type": "application/json"},
                                body: JSON.stringify(formJson)
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
                        <TextField
                            autoFocus
                            required
                            margin="dense"
                            id="name"
                            name="status"
                            label="Status"
                            type="text"
                            fullWidth
                            variant="outlined"
                        />
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
                        <TextField
                            autoFocus
                            required
                            margin="dense"
                            id="name"
                            name="image"
                            label=""
                            type="file"
                            fullWidth
                            variant="outlined"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClickClose} className={ibm.className}>Cancel</Button>
                        <Button type="submit" className={ibm.className}>Create</Button>
                    </DialogActions>
                </Dialog>
            </form>
        </section>
    </>
};