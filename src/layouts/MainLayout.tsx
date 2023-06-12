import { routeList } from "../app/Routes";
import { Sidebar } from "../shared/Sidebar"
import { Outlet} from "react-router-dom";



export const MainLayout = () => {
  return (
    <div className="min-h-screen flex">
      <aside className="basis-1/6 h-screen overflow-auto border-r border-gray-700">
        <Sidebar routeList={routeList}/>
      </aside>
      <main className="basis-5/6 relative min-h-screen bg-gray-900">
        <Outlet />
      </main>
    </div>
  )
}