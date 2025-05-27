import { LockOutlined, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Container,
  CssBaseline,
  Box,
  Avatar,
  Typography,
  TextField,
  Button,
  IconButton,
  InputAdornment,
  Snackbar,
  Alert,
} from "@mui/material";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/auth-services";
import { useAuth } from "../../context/authContext";
import "./authentication-style.css";

function Login() {
  const navigate = useNavigate();

  const { setUser } = useAuth(); // Hook para atualizar o estado do utilizador autenticado

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMsg, setSnackbarMsg] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">("success");

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleLogin = async () => {
    setIsLoading(true);
    const data = await login(email, password);

    console.log("Response from server:", data);

    if (data.message && !data.error) {
      setUser(data.user); // Atualiza o estado do utilizador autenticado
      setSnackbarMsg("Login efetuado com sucesso!");
      setSnackbarSeverity("success");
      setOpenSnackbar(true);

      setTimeout(() => {
        navigate("/");
      }, 2000);
    } else if (data.error) {
      setSnackbarMsg(data.error || "Erro ao fazer login.");
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
      setIsLoading(false);
    } else {
      setSnackbarMsg("Erro desconhecido.");
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading && (
        <div className="overlay-blur">
          <div className="spinner" />
        </div>
      )}

      <Container className={`main-container ${isLoading ? "blurred" : ""}`}>
        <CssBaseline />
        <Box className="login-container">
          <Avatar className="login-avatar">
            <LockOutlined />
          </Avatar>
          <Box className="login-box">
            <Typography variant="h4">Login</Typography>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Endereço de email"
              name="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              name="password"
              label="Palavra-chave"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      className="toggle-visibility-button"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Button fullWidth variant="contained" className="login-button" onClick={handleLogin}>
              Login
            </Button>
          </Box>
        </Box>

        <Snackbar open={openSnackbar} autoHideDuration={3000} onClose={() => setOpenSnackbar(false)}>
          <Alert severity={snackbarSeverity} sx={{ width: "100%" }}>
            {snackbarMsg}
          </Alert>
        </Snackbar>
      </Container>
    </>
  );
}

export default Login;
