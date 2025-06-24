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
  FormControlLabel,
  Checkbox,
  Link
} from "@mui/material";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./authentication-style.css";
import { signup, login } from "../../services/auth-services.ts";
import { useAuth } from "../../context/authContext.tsx";

function Register() {
  const navigate = useNavigate();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMsg, setSnackbarMsg] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">("success");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const { setUser } = useAuth();

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => event.preventDefault();

  const handleRegister = async () => {
    setIsLoading(true);
    try {
      const registerData = await signup(userName, email, password);
      if (registerData.message && !registerData.error) {
        const loginData = await login(email, password);
        if (loginData.message && !loginData.error) {
          setUser(loginData.user);
          setSnackbarMsg("Registo e login concluídos com sucesso!");
          setSnackbarSeverity("success");
          setOpenSnackbar(true);
          setTimeout(() => navigate("/"), 1500);
        } else throw new Error(loginData.error || "Erro ao iniciar sessão.");
      } else throw new Error(registerData.error || "Erro durante o registo.");
    } catch (err: any) {
      setSnackbarMsg(err.message || "Erro desconhecido.");
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
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Endereço de email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              label="Palavra-chave"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
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

            <FormControlLabel
              control={
                <Checkbox
                  checked={acceptedTerms}
                  onChange={(e) => setAcceptedTerms(e.target.checked)}
                  color="primary"
                />
              }
              label={
                <Typography variant="body2">
                  Li e Aceito os{" "}
                  <Link href="/terms" target="_blank" underline="hover">
                    Termos e Condições
                  </Link>
                </Typography>
              }
              sx={{ mt: 1 }}
            />

            <Button
              fullWidth
              variant="contained"
              className="login-button"
              onClick={handleRegister}
              disabled={!acceptedTerms}
            >
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