import React, {useState, FunctionComponent} from "react";
import Menu from "../atoms/Menu";
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
    

    const List = () =>  {
        const[locationList,setList] = useState(location);
       
        const ListTag = function () {
            return locationList && locationList.map(item => <Menu key = {item.lid} open ={open} lid = {item.lid} text = {item.name} />)
          };
       
        return(
        <ListTag/>

        )
    }

    return(
       
      <div className="container">
        <div open ={open} className = {open != true ? 'navbar' : 'navbar_active'} onClick = {() => setOpen(!open) }>
           <div />
           <div />
           <div />
        </div>
      <List/>
       

        </div>
        

    )
}

export default SideMenu