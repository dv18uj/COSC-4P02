import BuildingA from "../assets/Building_A.png"
import BuildingB from "../assets/Building_B.png"
import BuildingC from "../assets/Building_C.png"
import React, {useState} from "react"
import LocationKey from "../molecules/LocationKey"
import "./LocationMenu.css" 

function LocationMenu () {

    const fetchData=()=>{
        return(
            [{
                lid: 1,
                name: "LocationA"
            },
            {
                lid: 2,
                name:"LocationB"
            },
            {
                lid: 3,
                name:"LocationC"
            }]
        )
    }
    

    const location = fetchData()

    const[locationList,setList] = useState(location)
/*
    React.useEffect(()=>{
        service.get('/lid',{

        }).then((response)=>{
            setList(response.data)
        })
    })
*/
    return(
        <div class="wrapper">
            {locationList.map((item) =>(
            <div class = "row">
                <div class = "imageColumn">
                    <img class = "image" src = {'https://cosc.brocku.ca/~dv18uj/pano/BA.png'}/>
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