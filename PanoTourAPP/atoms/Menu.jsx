import React from "react";
import './menu.css'

//creates side column for menu



const Menu = ({ open }) => {
return(
    <ul className={open == true ? 'content' : 'content_active'} open={open}>
        <li>Building 1</li>
        <li>Building 2</li>
        <li>Building 3</li>
    </ul>
)

}

export default Menu