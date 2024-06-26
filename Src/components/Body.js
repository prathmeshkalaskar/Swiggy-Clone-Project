import { useEffect, useState } from "react";
import { restaurantList } from "../Constant";
import RestrauntCard from "./RestrauntCard";
import Shimmer from "./Shimmer";


function filterData(SearchText, restaurants){ 
  return restaurants.filter((restaurant)=> restaurant?.info?.name?.toLowerCase()?.includes(SearchText.toLowerCase()));
}

 const Body=()=>{ 
  const [allrestraunts, setAllRestraunts]=useState([]);    
  const [filteredrestraunts, setFilteredRestraunts]=useState([]);
  const[SearchText, setSearchText]=useState();

  useEffect(()=>{
    getRestaurant();
  },[]); 
  
  

  async function getRestaurant() {
    const data= await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5203896&lng=73.8567005&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json);  
    setAllRestraunts(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestraunts(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    
  }
  if(!allrestraunts)
    {
      return null;
    }
    if(filteredrestraunts.length===0)
      {
        return <h1>Sorry!! No matches found.</h1>
      }
  
    return (allrestraunts.length ===0)?<Shimmer/> : (
      <>
       <div className="Search-Container">
        <input type="text" className="earch-input" placeholder="Search" value={SearchText}
         onChange={(e)=> {setSearchText(e.target.value);}}></input>
        
        <button className="search-btn" 
        onClick={()=>{
          const data=filterData(SearchText, allrestraunts);
          
          setFilteredRestraunts(data);
        }}
        >Search</button>
      </div>
      <div className="restaurant-list">
       {
         filteredrestraunts.map((restraunt)=>
            {
              return <RestrauntCard {...restraunt.info} key={"restraunt.info.id"}/>
            })
        }
          
         
      </div>
      </>
     
    );
 }
 export default Body;