import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";

const Router =  createBrowserRouter([
    {
        path:"/",
        element:<Home></Home>,
        children:[
            

        ]
    }

])

export default Router;