import {createBrowserRouter} from "react-router-dom";
import {ReactElement } from "react";

// # LAYOUT
import { MainLayout } from "../layouts/MainLayout";

// # PAGES
import { MainPage } from "../pages/main/MainPage";
import { DemoPage } from "../pages/demo/DemoPage";



export type RouteListType = {
    name: string;
    index? :boolean,
    path: string,
    element?: ReactElement,
    Component?: React.ComponentType
}[]

export const routeList : RouteListType = [
    {
        name: "Home",
        index: true,
        path: "/",
        element: <MainPage />,
    },
    {
        name: "Demo",
        path: "demo",
        element : <DemoPage />
    }
]


const browserRouteList = routeList.map(({name, ...rest})=> rest);
const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: browserRouteList
    },
]);


export default router