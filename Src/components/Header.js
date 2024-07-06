import { useState } from "react";
import Logo from "../assets/img/foodvilla.png";
import { Link } from "react-router-dom";

export const Title= ()=>{
    return(
        <a href="">
        <img alt="logo"
         src={Logo}
         className="logo"/>
         </a>
    );
}

const loggedInUser=()=>{
    return true;
}

const HeaderComponent =()=>{

    const [isLoggedIn, setIsLoggedIn]=useState(false);
    return(
        <div className="header">
            <Title/>
            <div className="nav-item">
                <ul>
                <li><Link to="/"> Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/about">Login</Link></li>
                    <li><Link to="/about">Cart</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                    
                </ul>
            </div>
            {
               isLoggedIn ? (<button onClick={()=>setIsLoggedIn(false)}>Logout</button>
            ):(
            <button onClick={()=>setIsLoggedIn(true)}>Login</button>
        )
    }
           
        </div>
    )
}

export default HeaderComponent;