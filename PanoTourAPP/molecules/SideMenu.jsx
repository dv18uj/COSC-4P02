import React, {useState} from "react";
import NavMenu from "../atoms/Menu";
import "./sidemenu.css";
import { render } from "react-dom";

//adds button and animation to menu to create the side menu

function SideMenu () {
    const [open, setOpen] = useState(false);
    
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
    

    const[locationList,setList] = useState(location);
    
    return(
       
      <div className="container">
        <div open ={open} className = {open != true ? 'navbar' : 'navbar_active'} onClick = {() => setOpen(!open) }>
           <div />
           <div />
           <div />
        </div>
        

        {locationList.map(item => {  
            return (
                
             <NavMenu open ={open} lid = {item.lid} text = {item.name} />
                
        ) 
    })
        }

        </div>
        

    )
}

export default SideMenu