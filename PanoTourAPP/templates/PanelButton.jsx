import React, {useState} from "react";
import NavMenu from "./InfoPanel";


const SideMenu = () => {
    const [openPanel, setOpenPanel] = useState(false);
    
    return(
        <div>
        <button className="infoPanelBtn" onClick = {() => setOpenPanel(true)}>Open</button>
            <NavMenu open ={openPanel} onClose={()=> setOpenPanel(false)}/>
        </div>
    )
}


export default SideMenu