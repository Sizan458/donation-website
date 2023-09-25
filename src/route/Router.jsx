import { Outlet, createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Error from "../components/Error page/Error";
import Cards from "../components/CardsContainer/cardContainer";



const Router =  createBrowserRouter([
    {
        path:"/",
        element:<div>
            <Home></Home>
            <Outlet></Outlet>
        </div>,
        
        errorElement:<Error></Error>,
        
        children:[
            {
              path:"/",
              element:<Cards></Cards>,
              loader:()=>fetch('/Donation.json')
            }

        ]
    }

])

export default Router;