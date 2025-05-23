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
import { login } from "../../services/auth-services";
import "./authentication-style.css";

function Login() {
  const [response, setResponse] = useState<{ message?: string; error?: string } | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleLogin = async () => {
    const data = await login(email, password); // Using the login function from auth-services.ts
    setResponse(data);
    console.log(response);
  };

  return (
    <Container className="main-container">
      <CssBaseline />
      <Box className="login-container">
        <Avatar className="login-avatar">
          <LockOutlined />
        </Avatar>
        <Typography variant="h4">Login</Typography>
        <Box className="login-box">
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
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
            label="Password"
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
    </Container>
  );
}

export default Login;
