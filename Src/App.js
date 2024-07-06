import react from "react";
import reactDom from "react-dom/client";
import HeaderComponent from "./components/Header";
import {Title} from "./components/Header";
import Body  from "./components/Body";
import Footer from "./components/Footer";
import { IMG_CN_URL } from "./Constant";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestrauntMenu from "./components/RestrauntMenu.js";
import Profile from "./components/Profile.js";

const AppLayout = ()=>
{
    return (
       <div>
        <HeaderComponent />        
        <Outlet/>
        <Footer />

       </div>
    );
}

const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/",
                element:<Body/>,
            },
            {
                path:"/About",
                element:<About/>,
                children:[
                    {
                        path:"Profile",
                        element:<Profile/>,
                    },
                ],
            },
            {
                path:"/Contact",
                element:<Contact/>,
            },
            {
                path:"/restuarant/:id",
                element: <RestrauntMenu/>,
            }
        ],
    },
    

    
]);

const root =reactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);