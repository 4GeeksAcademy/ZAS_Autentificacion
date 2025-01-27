import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Modal } from "./modalRegister";
import { ModalLogin } from "./modalLogin";
import { Context } from "../store/appContext";

export const Navbar = () => {
    const { store, actions } = useContext(Context);  
    const [showRegisterModal, setShowRegisterModal] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [successMessage, setSuccessMessage] = useState(false);

    const navigate = useNavigate();

    const handleCloseRegisterModal = () => setShowRegisterModal(false);
    const handleShowRegisterModal = () => setShowRegisterModal(true);

    const handleCloseLoginModal = () => setShowLoginModal(false);
    const handleShowLoginModal = () => setShowLoginModal(true);

    // Mostrar mensaje de éxito y abrir el modal de login después de un tiempo
    const handleRegistrationSuccess = () => {
        setSuccessMessage(true);
        setShowRegisterModal(false); // Cerrar el modal de registro
        setTimeout(() => {
            setSuccessMessage(false);
            handleShowLoginModal(); // Abrir el modal de login
        }, 2000); // Mostrar el mensaje durante 2 segundos
    };

    // Función para manejar el logout
    const handleLogout = () => {
        actions.logout(); 
        navigate("/"); 
    };

    return (
        <>
            <nav className="navbar navbar-light bg-black">
                <div className="container-fluid">
                    <Link
                        to="/"
                        style={{
                            textDecoration: "none",
                            color: "inherit",
                        }}
                        onMouseEnter={(e) => (e.target.style.color = "red")}
                        onMouseLeave={(e) => (e.target.style.color = "inherit")}
                    >
                        <p className="navbar-brand mb-0 h1 text-light">JWT-BCRYPT Exercise</p>
                    </Link>
                    {/* Si hay usuario, mostrar LOGOUT, si no, REGISTER */}
                    {store.user ? (
                        <button
                            type="button"
                            className="btn btn-dark px-4"
                            onClick={handleLogout}
                        >
                            LOGOUT
                        </button>
                    ) : (
                    <>
                    <div className="d-flex">
                        <button
                            type="button"
                            className="text-light bg-black border-0"
                            onClick={handleShowRegisterModal}
                        >
                            REGISTER
                        </button>
                        <button
                            type="button"
                            className="btn btn-light px-4 ms-2"
                            onClick={handleShowLoginModal}
                        >
                            LOGIN
                        </button>
                        </div>
                    </>
                        
                    )}
                </div>
            </nav>
            {successMessage && (
                <div className="alert alert-success text-center mt-3" role="alert">
                    Usuario registrado con éxito
                </div>
            )}
            <Modal
                showModal={showRegisterModal}
                handleCloseModal={handleCloseRegisterModal}
                onRegistrationSuccess={handleRegistrationSuccess}
            />
            <ModalLogin
                showModal={showLoginModal}
                handleCloseModal={handleCloseLoginModal}
            />
        </>
    );
};


