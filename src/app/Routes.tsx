import {createBrowserRouter} from "react-router-dom";

// # LAYOUT
import { MainLayout } from "../layouts/MainLayout";

import { MainPage } from "../pages/main/MainPage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                index: true,
                path: "/",
                element: <MainPage />,
            },
        ],
    },
]);


export default router