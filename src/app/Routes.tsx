import { Route, Routes} from "react-router-dom";
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


// const browserRouteList = routeList.map(({name, ...rest})=> rest);
// const RootRouter = () => {
//     return useRoutes([{
//         element: <MainLayout />,
//         path: "/",
//         children: browserRouteList
//     }])
// }

const RootRouter = () => {
    return (
      <Routes >
        <Route path="/" element={<MainLayout />}>
          <Route
            index
            element={<MainPage />}
          />
          <Route path="/demo/*" element={<DemoPage />} />
        </Route>
      </Routes>
    )
}


export default RootRouter