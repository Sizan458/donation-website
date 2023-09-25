import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Error from "../components/Error page/Error";

const Router =  createBrowserRouter([
    {
        path:"/",
        element:<Home></Home>,
        errorElement:<Error></Error>,
        children:[
            

        ]
    }

])

export default Router;