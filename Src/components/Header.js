import { useState } from "react";
import Logo from "../assets/img/foodvilla.png";
import { Link } from "react-router-dom";
import useOnline from "../../utils/useOnline";

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
    const isOnline=useOnline();
    return(
        <div className="header">
            <Title/>
            <div className="nav-item">
                <ul>
                <li><Link to="/" className="li-link"> Home</Link></li>
                    <li><Link to="/about" className="li-link">About</Link></li>
                    <li><Link to="/about" className="li-link">Login</Link></li>
                    <li><Link to="/about" className="li-link">Cart</Link></li>
                    <li><Link to="/Contact" className="li-link">Contact</Link></li>
                    
                </ul>
            </div>
            <h1>{isOnline ?'✅':'🔴'}</h1>
            {
               isLoggedIn ? (<button className="loggin-button" onClick={()=>setIsLoggedIn(false)}>Logout</button>
            ):(
            <button onClick={()=>setIsLoggedIn(true)} className="loggin-button">Login</button>
             )
            }
           
        </div>
    )
}

export default HeaderComponent;