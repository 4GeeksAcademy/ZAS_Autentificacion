import React, { useContext } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/home";
import { UserPanel } from "./pages/userPanel";
import injectContext, { Context } from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { PrivateRoute } from "./routes_front/privateRoutes";
import { PublicRoute } from "./routes_front/publicRoutes";

//create your first component
const Layout = () => {

    const { store } = useContext(Context);
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if(!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL/ >;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        
                        <Route element={<PrivateRoute
                        user = {store.user}/>}>
                            <Route element={<UserPanel />} path="/user-panel" />
                        </Route>

                        <Route element={<PublicRoute
                        user = {store.user}/>}>
                            <Route element={<Home />} path="/" />
                        </Route>
                        
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
