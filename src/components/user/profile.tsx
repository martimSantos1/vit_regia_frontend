import { useState, useEffect } from 'react';
import { useAuth } from '../../context/authContext';
import { updateUsername } from '../../services/auth-services';
import {
    Card,
    CardContent,
    Button,
    Input,
    Divider,
    Typography,
    Avatar,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Snackbar,
    Alert
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './profile.css';

export default function Profile() {
    const { user, setUser } = useAuth();
    const [username, setUsername] = useState('');
    const [editing, setEditing] = useState(false);
    const [loading, setLoading] = useState(false);
    const [snackbar, setSnackbar] = useState<{ open: boolean; message: string; severity: 'success' | 'error' }>({ open: false, message: '', severity: 'success' });
    const [confirmOpen, setConfirmOpen] = useState(false);

    useEffect(() => {
        if (user) {
            setUsername(user.name);
        }
    }, [user]);

    useEffect(() => {
        if (snackbar.open) {
            const timer = setTimeout(() => {
                setSnackbar((prev) => ({ ...prev, open: false }));
            }, 4000);
            return () => clearTimeout(timer);
        }
    }, [snackbar.open]);

    const handleToggleEdit = async () => {
        if (editing && user) {
            setLoading(true);
            try {
                const updatedUser = await updateUsername(username);
                setUser({ ...user, name: updatedUser.name });
                setSnackbar({ open: true, message: 'Username atualizado com sucesso.', severity: 'success' });
            } catch (error) {
                setSnackbar({ open: true, message: 'Erro ao atualizar o username.', severity: 'error' });
            } finally {
                setLoading(false);
            }
        }
        setEditing(!editing);
    };

    const handleDelete = () => {
        setConfirmOpen(true);
    };

    const handleConfirmDelete = () => {
        setConfirmOpen(false);
        // Chamada à API de apagar conta a ser implementada
    };

    return (
        <div className="profile-container">
            <Card className="profile-card">
                <CardContent className="profile-content">
                    <Avatar className="profile-avatar">
                        <AccountCircleIcon className="profile-icon" />
                    </Avatar>
                    <div className="profile-fields">
                        <div>
                            <Typography variant="subtitle2">Email</Typography>
                            <Input value={user?.email} disabled fullWidth />
                        </div>
                        <div>
                            <Typography variant="subtitle2">Username</Typography>
                            <Input
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                disabled={!editing || loading}
                                fullWidth
                            />
                        </div>
                        <Divider sx={{ marginY: 2 }} />
                        <Button
                            variant={editing ? 'contained' : 'outlined'}
                            startIcon={<EditIcon />}
                            onClick={handleToggleEdit}
                            fullWidth
                            disabled={loading}
                        >
                            {editing ? 'Confirmar' : 'Alterar dados da conta'}
                        </Button>
                        <Button
                            variant="contained"
                            color="error"
                            startIcon={<DeleteIcon />}
                            onClick={handleDelete}
                            fullWidth
                        >
                            Apagar conta
                        </Button>
                    </div>
                </CardContent>
            </Card>

            <Dialog open={confirmOpen} onClose={() => setConfirmOpen(false)}>
                <DialogTitle>Confirmar eliminação</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Deseja mesmo apagar permanentemente a sua conta?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setConfirmOpen(false)}>Cancelar</Button>
                    <Button onClick={handleConfirmDelete} color="error" autoFocus>
                        Confirmar
                    </Button>
                </DialogActions>
            </Dialog>

            <Snackbar
                open={snackbar.open}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert severity={snackbar.severity} onClose={() => setSnackbar({ ...snackbar, open: false })} sx={{ width: '100%' }}>
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </div>
    );
}