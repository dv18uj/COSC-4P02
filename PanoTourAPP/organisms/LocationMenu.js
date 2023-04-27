import BuildingA from "../assets/Building_A.png"
import BuildingB from "../assets/Building_B.png"
import BuildingC from "../assets/Building_C.png"
import service from '../service'
import React, {useState} from "react"
import LocationKey from "../molecules/LocationKey"
import "./LocationMenu.css" 

function LocationMenu () {
    const[locationList,setLocations] = useState([])
    
    React.useEffect(()=>{
        service.get('/location/all',{}).then((response)=>{
            setLocations(response.data)
        })
    },[])

    return(
        <div class="wrapper">
            {locationList.map((item) =>(
            <div class = "row">
                <div class = "imageColumn">
                    <img class = "image" src = {item.image}/>
                </div>
                <div class = "locationColumn">
                    <LocationKey lid= {item.lid} text={item.name}/>
                </div>
            </div>
        ))}
        </div>
    );
}

export default LocationMenu;