//this class can have an image of a location, heading and subheading with
// each being clickable and jumps to a tour location.
import Heading from "../atoms/Heading"
import Subheading from "../atoms/Subheading"
import "./LocationKey.css"
import service from '../service'
import React, {useState} from "react"

function LocationKey (props) {
    const[hidden,setHidden] = useState(props.hidden)
    const location = props.lid
    const[sectionsList,setSections] =  useState([]);

    React.useEffect(()=>{
        service.get('/section/fromLid',{
            params: {
                lid: location
            }
        }).then((response)=>{
            setSections(response.data)
        })
    },[location])

    return (
        <div class = "locationKey" >
            <div class ="location">
                <h1>{props.text}</h1>
            </div>
            <ul class ="section">
                {sectionsList.map((item) =>(
                <il>{item.name}</il>
                ))}
            </ul>
        </div>
    )
}

export default LocationKey;