import { createBrowserRouter } from "react-router-dom";
import Flight from "./Pages/Flight";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Flight/>,
    },
]);