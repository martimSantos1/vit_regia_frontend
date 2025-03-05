import { Outlet, Link } from "react-router";
import { useState, useEffect } from "react";
import Modal from "react-modal";
import Login from "./components/login"; // Certifique-se de que o caminho está correto
import "./styles/layout.css";

Modal.setAppElement('#root');

const Layout = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  useEffect(() => {
    if (modalIsOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [modalIsOpen]);

  return (
    <>
      <nav>
        <ul className="nav-left">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
        </ul>

        <ul className="nav-right">
          <li className="login-button">
            <a onClick={openModal}>Login</a>
          </li>
        </ul>
      </nav>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Login Modal"
      >
        <Login />
      </Modal>

      <div className="content">
        <Outlet />
      </div>
    </>
  )
};

export default Layout;