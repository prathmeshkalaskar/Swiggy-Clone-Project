import { useEffect, useState } from "react";
import { Await, useParams } from "react-router-dom";
import { IMG_CN_URL } from "../Constant";
import useRestaurant from "../../utils/useRestaurant";

const RestrauntMenu=()=>{
  const{id}=useParams();

  
  
  const restaurant=useRestaurant(id);

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