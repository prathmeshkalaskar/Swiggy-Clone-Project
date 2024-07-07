import { useState, useEffect } from "react";

const useOnline=()=>{

    const [isOnline, setIsOnline]=useState(true);
    useEffect(()=>{
        const handleeOnline=()=>{
            setIsOnline(true);
        };
        const handleeOffline=()=>{
            setIsOnline(false);
        };
      window.addEventListener("onine",handleeOnline);
      window.addEventListener("offine",handleeOffline);

      return()=>{
        window.removeEventListener("online",handleeOnline);
        window.removeEventListener("offline",handleeOffline);

      };
    }, []);


    return isOnline;
};
export default useOnline;