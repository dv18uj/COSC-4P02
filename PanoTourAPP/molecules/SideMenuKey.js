import Heading from "../atoms/Heading"
import Subheading from "../atoms/Subheading"
import service from '../service'
import React, {useState} from "react"
import './sidemenu.css'

function SideMenuKey (props) {
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
        <ul className="section_list">
            {sectionsList.map((sec) => (
                <li key={sec.sid}>{sec.name}</li>
            ))}
        </ul>
    )
}

export default SideMenuKey;