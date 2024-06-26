import { useState } from "react";


export const Title= ()=>{
    return(
        <a href="">
        <img alt="logo"
         src="data:image/jpeg;base64,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"
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
                    <li>Home</li>
                    <li>About</li>
                    <li>Login</li>
                    <li>Cart</li>
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