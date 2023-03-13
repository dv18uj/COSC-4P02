import React, {useState} from "react";
import NavMenu from "./InfoPanel";

//adds button and animation to menu to create the side menu



const SideMenu = () => {
    const [openPanel, setOpen] = useState(false);
    
    return(
        <div>
        <button className="infoPanelBtn" onClick = {() => setOpen(true)}>Open</button>
            <NavMenu open ={openPanel} onClose={()=> setOpen(false)}/>
        </div>

    )
}


export default SideMenu