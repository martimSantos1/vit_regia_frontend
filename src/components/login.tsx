import { LockOutlined } from "@mui/icons-material";
import {
  Container,
  CssBaseline,
  Box,
  Avatar,
  Typography,
  TextField,
  Button
} from "@mui/material";
import { useState } from "react";
import "./../components/styles/login.css";

function Login(){
  const [response, setResponse] = useState<{ message?: string; error?: string } | null>(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password
        }),
      });
      const data = await res.json();
      setResponse(data);
      console.log(response);
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
      setResponse({ error: 'Erro ao comunicar com o servidor' });
    }
  };

  return (
    <Container maxWidth="xs">
      <CssBaseline />
      <Box className="login-container">
        <Avatar className="login-avatar" style={{ backgroundColor: "#1d222f"}}>
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
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            fullWidth
            variant="contained"
            className="login-button"
            style={{ backgroundColor: "#1d222f"}}
            onClick={handleLogin}
          >
            Login
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;