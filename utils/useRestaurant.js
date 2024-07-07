import { useState, useEffect } from "react";


const useRestaurant=(id)=>{
   const [restaurant , setRestaurant]=useState({});

   
  useEffect(()=>{
    getRestrauntInfo();
  },[]);

  async function getRestrauntInfo(){
    const data= await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5204303&lng=73.8567437&restaurantId="+id+"&catalog_qa=undefined&submitAction=ENTER");
    const json= await data.json();
    console.log(json.data);
    setRestaurant(json.data?.cards[2]?.card?.card?.info);
  }
  return restaurant;
};
export default useRestaurant;