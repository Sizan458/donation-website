import { Outlet, createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Error from "../components/Error page/Error";

import Donation from "../components/Donaction/Donation";
import Banner from "../components/Banner/Banner";
import Cards from "../components/CardsContainer/Card/cardContainer";
import Donations from "../components/Donations/Donations";
import Statistics from "../components/Statistics/Statistics";



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
             path:'/',
             element:<div>
                <Banner></Banner>
                <div>
              <Cards></Cards>
              
          
                </div>

             </div>,
             loader:()=>fetch('/Donation.json')
            },
               
            {
       
                path:'/donation/:id',
                element:<Donation></Donation>,
                loader:()=>fetch('/Donation.json')
            
        },
        {
            path:'/donations',
            element:<Donations></Donations>
        },
        {
          path:'/statistics'  ,
          element:<Statistics></Statistics>,
        
        }
    

        ]

    }
   
])

export default Router;