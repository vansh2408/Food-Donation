import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login";
import RootLayout from "./components/RootLayout";
import MessPage from "./components/MessPage";
import RestaurantPage from "./components/RestaurantPage";
import DonateForm from "./components/DonateForm";
import { lazy } from "react";

function App() {
    const router = createBrowserRouter([
        {
            path: "",
            element: <Login />,
        },
        {
            path: "domain",
            element: <RootLayout />,
            children: [
                {
                    path: "mess",
                    element: <MessPage />,
                },
                {
                    path: "mess/donate",
                    element: <DonateForm/>
                },
                {
                    path: "restaurant",
                    element: <RestaurantPage />,
                },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
}

export default App;
