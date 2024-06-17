import { useState } from "react";
import { restaurantList } from "../Constant";
import RestrauntCard from "./RestrauntCard";


function filterData(SearchText, restaurants){ 
  return restaurants.filter((restaurant)=> restaurant.info.name.includes(SearchText));
}

const Body=()=>{
  const [restraunts, setRestraunts]=useState(restaurantList);
  const[SearchText, setSearchText]=useState();
    return(
      <>
       <div className="Search-Container">
        <input type="text" className="earch-input" placeholder="Search" value={SearchText}
         onChange={(e)=> {setSearchText(e.target.value);}}></input>
        
        <button className="search-btn"
        onClick={()=>{
          const data=filterData(SearchText, restraunts);
          
          setRestraunts(data);
        }}
        >Search</button>
      </div>
      <div className="restaurant-list">
        {
          restraunts.map((restraunt)=>
            {
              return <RestrauntCard {...restraunt.info} key={"restraunt.info.id"}/>
            })
        }
          
         
      </div>
      </>
     
    );
 }
 export default Body;