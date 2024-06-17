import react from "react";
import reactDom from "react-dom/client";
import HeaderComponent from "./components/Header";
import {Title} from "./components/Header";
import Body  from "./components/Body";
import Footer from "./components/Footer";
import { IMG_CN_URL } from "./Constant";

const AppLayout = ()=>
{
    return (
       <div>
        <HeaderComponent />
        <Body />
        <Footer />

       </div>
    );
}

const root =reactDom.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);