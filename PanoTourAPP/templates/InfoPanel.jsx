import React from "react";
import './infoPanel.css';

//Still need to center on page
//move button to corner of div.a

const Menu = ({ open, onClose }) => {
    if(!open) return null;
return(
    <div open={open} className="infoPanel">
        <div className="left">Images go here</div>
        <div className="right">
            
            <li className="A">Building/Exhibit 
            
            <p onClick={onClose} className="closeButton" >X</p>
            </li>
            <li className="B">Title/Date</li>
            <li className="C">Discriptions go here</li>
        </div>
    </div>
)

}

export default Menu