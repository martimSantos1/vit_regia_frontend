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
import "./authentication-style.css";
import { signup } from "../../services/auth-services.ts";

function Register() {
  const navigate = useNavigate(); // Hook necessário para redirecionar

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMsg, setSnackbarMsg] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">("success");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleRegister = async () => {
    setIsLoading(true);
    const data = await signup(userName, email, password);

    console.log("Response from server:", data);

    if (data.message && !data.error) {
      setSnackbarMsg("Registo concluído com sucesso!");
      setSnackbarSeverity("success");
      setOpenSnackbar(true);

      setTimeout(() => {
        navigate("/");
      }, 2000);
    } else if (data.error) {
      setSnackbarMsg(data.error || "Erro durante o registo.");
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
            <Typography variant="h4">Registe-se</Typography>
            <TextField
              margin="normal"
              required
              fullWidth
              id="userName"
              label="Nome de usuário"
              name="userName"
              autoFocus
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Endereço de email"
              name="email"
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
            <Button fullWidth variant="contained" className="login-button" onClick={handleRegister}>
              Registar
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

export default Register;
