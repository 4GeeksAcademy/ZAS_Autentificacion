import React, { useState, useContext, use, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const ModalLogin = ({ showModal, handleCloseModal }) => {
    const { actions } = useContext(Context);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    

    
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const success = await actions.loginUser(formData);
            if (success) {
                handleCloseModal();
                navigate("/user-panel"); 
            }
        } catch (error) {
            alert(error.message || "Error al iniciar sesión");
        }
    };

    return (
        <>
            <div className={`modal fade mt-5 ${showModal ? "show" : ""}`} style={{ display: showModal ? "block" : "none" }}>
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <div className="d-flex justify-content-between w-100 ">
                            <button
                                type="button"
                                className="btn-close"
                                onClick={handleCloseModal}
                            ></button>
                        </div>
                    </div>
                        <form className="col-10 mx-auto text-start" onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label mt-4">EMAIL</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">PASSWORD</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <button type="submit" className="btn btn-dark m-auto w-100 mb-5">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};
