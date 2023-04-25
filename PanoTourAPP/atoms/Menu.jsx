import React from "react";
import './menu.css';
import '../molecules/sidemenu.css';
import {useState} from "react";

const Menu = (props) => {

    const sections = [
        {
            sid: 1,
            name: "sectionA"
        },
        {   
            sid: 2,
            name: "sectionB"
        },
        {
            sid: 3,
            name: "sectionC"
        }
    ]
    
    const open = props.open;
    const[sectionsList,SetSections] =  useState(sections);
    return(
    
    <div className={open == true ? 'content' : 'content_active'} >
        <div className= "Location" >
                <h1 key = {props.lid}>{props.text}</h1>
        </div>

    <ul className="Section" >
        {sectionsList.map(sec =>(
                <li key ={sec.sid}>{sec.name}</li>
                ))}
    </ul>
    </div>    
)

}

export default Menu