import { useEffect, useState } from "react";
import { restaurantList } from "../Constant";
import RestrauntCard from "./RestrauntCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import {filterData} from "../../utils/helper";
import useOnline from "../../utils/useOnline";



 const Body=()=>{ 
  const [allrestraunts, setAllRestraunts]=useState([]);    
  const [filteredrestraunts, setFilteredRestraunts]=useState([]);
  const[SearchText, setSearchText]=useState();

  useEffect(()=>{
    getRestaurant();
  },[]); 
  
  

  async function getRestaurant() {
    const data= await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    //console.log(json);  
    setAllRestraunts(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestraunts(json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    
  }

  const isonline=useOnline();

  if(!isonline){
    return <h1>🔴Offline , Please check you internet connection!!</h1>
  }
  if(!allrestraunts) 
    {
      return null;       
    }
  //  if(filteredrestraunts.length===0)
    //  {
      //  return <h1>Sorry!! No matches found.</h1>
      //}
  
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
              return (<Link to={"/restuarant/" +restraunt.info.id} className="restrocard-link"><RestrauntCard {...restraunt.info} key={"restraunt.info.id"} />
            </Link>)})
        }
          
         
      </div>
      </>
     
    );
 }
 export default Body;