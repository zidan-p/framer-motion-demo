import { NavLink } from "react-router-dom";
import { RouteListType } from "../app/Routes"




export const Sidebar = ({routeList}: {routeList: RouteListType}) => {
  return (
    <div className="bg-gray-900 text-white h-full">
      <h1 className="py-4 text-lg text-center font-bold text-white">Using Framer Motion</h1>
      <div className="">
        <ul className="flex flex-col p-1">
          {routeList.map((route, index) => (
            <li className="">
            <NavLink
              to={route.path}
              className={({ isActive}) => {
                let activeClass = isActive? "text-white ": "text-gray-500";
                return (`hover:bg-gray-700 w-full px-3 py-1 rounded block relative ` + activeClass);
              }}
            >
              {({ isActive,  }) => (
                isActive 
                ?(
                  <>
                    <div className={` top-2 bottom-2 left-0 w-1 rounded-sm bg-white absolute`}/>
                    {index + 1}.  {route.name}
                  </>
                ):(
                  <>{index + 1}.  {route.name}</>
                )
              )}
            </NavLink>
          </li>
          ))}
        </ul>
      </div>
    </div>
  )
}