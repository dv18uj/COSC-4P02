import React from "react";
import './menu.css';
import {useState} from "react";

const Menu = ({open, lid, text}) => {


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
    
    const[sectionsList,SetSections] =  useState(sections);
    return(
    
    <div className={open != true ? 'content' : 'content_active'} >
    <div className="list">
     
        <div className= "Location" >
      
         <h1 key  = {lid} >{text}</h1>
               
        </div>

    <ul className="Section" >
        {sectionsList.map((sec) =>(
                <li key = {sec.sid}>{sec.name}</li>
                ))}
    </ul>
    </div>
    </div>    
)

}

export default Menu