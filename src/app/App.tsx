import { RouterProvider, BrowserRouter  } from "react-router-dom";
import RootRouter from "./Routes";
import "./../style/index.css"

function App() {

  return (
    <>
      <BrowserRouter>
        <RootRouter />
      </BrowserRouter>
    </>
  )
}

export default App
