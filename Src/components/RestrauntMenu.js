import { useEffect, useState } from "react";
import { Await, useParams } from "react-router-dom";
import { IMG_CN_URL } from "../Constant";

const RestrauntMenu=()=>{
  const{id}=useParams();

  const [restaurant, setRestaurant]=useState({});
  useEffect(()=>{
    getRestrauntInfo();
  },[]);

  async function getRestrauntInfo(){
    const data= await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5204303&lng=73.8567437&restaurantId="+id+"&catalog_qa=undefined&submitAction=ENTER");
    const json= await data.json();
    console.log(json.data);
    setRestaurant(json.data?.cards[2]?.card?.card?.info);
  }

    return(
      <div>
        <div>
          <h1>Restuarant ID : {id}</h1>
          <h2>{restaurant.name}</h2>
          <img className="restaurantMenu-img"src={IMG_CN_URL+restaurant.cloudinaryImageId}></img>
          <h3>{restaurant.areaName}, {restaurant.city}</h3>
          <h3>{restaurant.city}</h3>
          <h3>{restaurant.avgRating}</h3>
          <h3>{restaurant.costForTwo}</h3>
          <h3>{restaurant.costForTwoMessage}</h3>   
          <h3>{restaurant.costForTwo}</h3>
        </div> 
        <div>
          
          </div> 
        </div>
        

     );   
};
export default RestrauntMenu;  