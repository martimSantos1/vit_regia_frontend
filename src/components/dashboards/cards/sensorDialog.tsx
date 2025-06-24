import { Dialog, DialogTitle, DialogContent, Typography } from "@mui/material";

type SensorDialogProps = {
    open: boolean;
    onClose: () => void;
    sensorLabel: string;
    explanation: string;
};

export const SensorDialog = ({ open, onClose, sensorLabel, explanation }: SensorDialogProps) => {
    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
            <DialogTitle>{sensorLabel}</DialogTitle>
            <DialogContent>
                <Typography variant="body1">{explanation}</Typography>
            </DialogContent>
        </Dialog>
    );
};
