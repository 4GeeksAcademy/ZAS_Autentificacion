const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            user: null,
            token: null
        },
        actions: {
            addUser: async (formData) => {
                try {
                    const response = await fetch("https://expert-palm-tree-pjgwrxvxvvrgf6jpx-3001.app.github.dev/api/register", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(formData)
                    });

                    if (!response.ok) {
                        const errorData = await response.json();
                        throw new Error(errorData.message);
                    }
                    const data = await response.json();
                    return true;
                } catch (error) {
                    console.error(error);
                    throw error;
                }
            },
           
            loginUser: async (formData) => {
                try {
                    const response = await fetch("https://expert-palm-tree-pjgwrxvxvvrgf6jpx-3001.app.github.dev/api/login", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(formData)
                    });

                    if (!response.ok) {
                        const errorData = await response.json();
                        throw new Error(errorData.message || "Error al iniciar sesión");
                    }

                    const data = await response.json();

                    
                    setStore({ token: data.token, user: data.user });
                    console.log("Usuario logueado con éxito:", data.user);
                    localStorage.setItem("token", data.token);
                    localStorage.setItem("user", JSON.stringify(data.user));
                    return true;
                } catch (error) {
                    console.error("Error en loginUser:", error.message);
                    throw error;
                }
            },
            // getUser: async (token) => {
            //     try {
            //         const response = await fetch("https://expert-palm-tree-pjgwrxvxvvrgf6jpx-3001.app.github.dev", {
            //             method: "GET",
            //             headers: {
            //                 "Authorization": `Bearer ${token}`, 
            //                 "Content-Type": "application/json"
            //             }
            //         });
            
            //         if (!response.ok) {
            //             const errorData = await response.json();
            //             throw new Error(errorData.message || "Error al obtener los datos del usuario");
            //         }
            
            //         const userDetails = await response.json();
            
                    
            //         setStore({ user: { ...getStore().user, ...userDetails } });
            //         console.log("Detalles del usuario obtenidos:", userDetails);
            //     } catch (error) {
            //         console.error("Error en getUser:", error.message);
            //         throw error;
            //     }
            // },
            logout: () => {
                setStore({ user: null, token: null });
                localStorage.removeItem("token");
                localStorage.removeItem("user");
            },

            setLocalStorage: () => {
                const token = localStorage.getItem("token");
                const user = JSON.parse(localStorage.getItem("user"));
                if (token && user) {
                    setStore({ token, user });
                }
            }
        }
    };
};

export default getState;
