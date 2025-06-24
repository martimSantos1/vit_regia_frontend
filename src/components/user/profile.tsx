import { useState, useEffect } from 'react';
import { useAuth } from '../../context/authContext';
import { updateUsername, deleteAccount } from '../../services/auth-services';
import {
    Container,
    CssBaseline,
    Box,
    Avatar,
    Typography,
    TextField,
    Button,
    Divider,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Snackbar,
    Alert
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import './profile.css';

export default function Profile() {
    const { user, setUser } = useAuth();
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [editing, setEditing] = useState(false);
    const [loading, setLoading] = useState(false);
    const [snackbar, setSnackbar] = useState<{ open: boolean; message: string; severity: 'success' | 'error' }>({ open: false, message: '', severity: 'success' });
    const [confirmOpen, setConfirmOpen] = useState(false);

    useEffect(() => {
        if (user) {
            setUsername(user.name);
            setEmail(user.email);
        }
    }, [user]);

    const handleToggleEdit = async () => {
        if (editing && user) {
            setLoading(true);
            try {
                const updatedUser = await updateUsername(username);
                setUser(updatedUser.user);
                setUsername(updatedUser.name);
                setSnackbar({ open: true, message: 'Username atualizado com sucesso.', severity: 'success' });
            } catch (error) {
                setSnackbar({ open: true, message: 'Erro ao atualizar o username.', severity: 'error' });
            } finally {
                setLoading(false);
            }
        }
        setEditing(!editing);
    };

    const handleDelete = () => setConfirmOpen(true);

    const handleConfirmDelete = async () => {
        setConfirmOpen(false);
        try {
            await deleteAccount();
            setUser(null);
            navigate('/');
        } catch (error) {
            setSnackbar({ open: true, message: 'Erro ao apagar conta.', severity: 'error' });
        }
    };

    return (
        <>
            {loading && (
                <div className="overlay-blur">
                    <div className="spinner" />
                </div>
            )}

            <Container className="main-container">
                <CssBaseline />
                <Box className="profile-container">
                    <Avatar className="profile-avatar">
                        <AccountCircleIcon />
                    </Avatar>
                    <Typography variant="h4" align="center">Perfil</Typography>
                    <Box className="profile-box">
                        <TextField
                            margin="normal"
                            fullWidth
                            label="Email"
                            value={email}
                            disabled
                            InputLabelProps={{ shrink: true }}
                        />
                        <TextField
                            margin="normal"
                            fullWidth
                            label="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            disabled={!editing || loading}
                            InputLabelProps={{ shrink: true }}
                        />
                        <Divider sx={{ my: 2 }} />
                        <Button
                            variant="outlined"
                            startIcon={<EditIcon />}
                            fullWidth
                            onClick={handleToggleEdit}
                            disabled={loading}
                            className="outlined-button"
                        >
                            {editing ? 'Confirmar' : 'Alterar dados da conta'}
                        </Button>
                        <Button
                            variant="contained"
                            color="error"
                            startIcon={<DeleteIcon />}
                            fullWidth
                            onClick={handleDelete}
                        >
                            Apagar conta
                        </Button>
                    </Box>
                </Box>
            </Container>

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
                autoHideDuration={4000}
                onClose={() => setSnackbar({ ...snackbar, open: false })}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert severity={snackbar.severity} onClose={() => setSnackbar({ ...snackbar, open: false })} sx={{ width: '100%' }}>
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </>
    );
}