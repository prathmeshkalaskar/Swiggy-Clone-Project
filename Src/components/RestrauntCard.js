import { IMG_CN_URL } from "../Constant"

const RestrauntCard =({name, locality, cloudinaryImageId, costForTwo})=>{
    return(
        <div className="card">
          <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ cloudinaryImageId}/>
          <div className="card-data">
          <h3>{name}</h3>
          <h5>{locality}</h5>
          <h4>{costForTwo}</h4>
          </div>
        </div>
    )
  }

export default RestrauntCard;