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
} from "@mui/material";
import { useState } from "react";
import "./authentication-style.css";

function Register() {
  const [response, setResponse] = useState<{ message?: string; error?: string } | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleRegister = async () => {
    const data = JSON.stringify({ userName, email, password })
    //setResponse(data);
    console.log(data);
  };

  return (
    <Container className="main-container">
      <CssBaseline />
      <Box className="login-container">
        <Avatar className="login-avatar">
          <LockOutlined />
        </Avatar>
        <Typography variant="h4">Registe-se</Typography>
        <Box className="login-box">
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
          <Button fullWidth variant="contained" className="login-button" onClick={handleRegister}>
            Registar
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default Register;
