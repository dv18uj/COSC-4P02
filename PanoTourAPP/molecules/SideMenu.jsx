import React, {useState} from "react";
import NavMenu from "../atoms/Menu";
import "./sidemenu.css";

//adds button and animation to menu to create the side menu



const SideMenu = () => {
    const [open, setOpen] = useState(false);

    return(
      <div className="container">
        <div open ={open} className = {open != true ? 'navbar' : 'navbar_active'} onClick = {() => setOpen(!open) }>
           <div />
           <div />
           <div />
        </div>
            <NavMenu open ={open}/>
        </div>

    )
}

export default SideMenu