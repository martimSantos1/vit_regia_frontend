import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/authContext";
import ScrollToTop from "./utils/scrollToTop";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./utils/theme";

import Layout from "./layout";
import Home from "./components/home";
import Login from "./components/authentication/login";
import Register from "./components/authentication/register";
import About from "./components/info-pages/about";
import Contacts from "./components/info-pages/contacts";
import FAQS from "./components/info-pages/faqs";
import License from "./components/info-pages/license";
import Dashboard from "./components/dashboards/dashboard";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ScrollToTop />
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/about" element={<About />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/faqs" element={<FAQS />} />
              <Route path="/license" element={<License />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </AuthProvider>
  );
}

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
} else {
  console.error("Elemento 'root' não encontrado no DOM!");
}