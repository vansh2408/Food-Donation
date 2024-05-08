import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Login from "./components/Login";
import RootLayout from "./components/RootLayout";
import MessPage from "./components/MessPage";
import RestaurantPage from "./components/RestaurantPage";
import DonateForm from "./components/DonateForm";
import { lazy } from "react";
import About from "./components/about";
import Contact from "./components/contact";
import { useAuth } from "./AuthContext";

function App() {
    const {user, userType} = useAuth();
    const router = createBrowserRouter([
        {
            path: "",
            element: user ? <Navigate to={userType === "NGO" ? "/domain/ngo" : "/domain/mess"} />: <Login/>,
        },
        {
            path: "domain",
            element: user ? <RootLayout /> : <Navigate to="/"/>,
            children: [
                {
                    path: "mess",
                    element: userType === "MESS" ? <MessPage /> : <Navigate to="/domain/ngo"/>,
                },
                {
                    path: "mess/donate",
                    element: userType === "MESS" ? <DonateForm/> : <Navigate to="/domain/ngo"/>
                },
                {
                    path: "ngo",
                    element: userType === "NGO" ? <RestaurantPage /> : <Navigate to="/domain/mess"/>,
                },
                {
                    path: "about",
                    element: <About />
                },
                {
                    path: "contact",
                    element: <Contact />
                },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
}

export default App;
