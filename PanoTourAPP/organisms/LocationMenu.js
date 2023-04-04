import BuildingA from "../assets/Building_A.png"
import BuildingB from "../assets/Building_B.png"
import BuildingC from "../assets/Building_C.png"
import {useState} from "react"
import MapKey from "../molecules/MapKey"
import styled from "styled-components"

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height:100%;
    width:100%;
    gap:20px;
    font-size: 20px;
`;

function LocationMenu (props) {

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
    return(
        <Wrapper>
        {locationList.map((item) =>(
            <MapKey hidden={props.showImg} imgSource={BuildingA} lid= {item.lid} text={item.name}/>
        ))}
        </Wrapper>
    );
}

export default LocationMenu;