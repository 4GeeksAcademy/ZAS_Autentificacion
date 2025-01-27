import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

export const Modal = ({ showModal, handleCloseModal, onRegistrationSuccess }) => {
    const { actions } = useContext(Context);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        name: ""
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const success = await actions.addUser(formData);
            if (success) {
                onRegistrationSuccess(); // Llama a esta función en caso de éxito
            }
        } catch (error) {
            alert(error.message || "An error occurred");
        }
    };

    return (
        <div
            className={`modal fade mt-5 ${showModal ? "show" : ""}`}
            style={{ display: showModal ? "block" : "none" }}
        >
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
                            <label htmlFor="name" className="form-label">NAME</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">EMAIL</label>
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
                        <button type="submit" className="btn btn-dark m-auto mb-5 w-100">Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
};
