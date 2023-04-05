import React from "react";
import './sidebarIcons.css';
import {useNavigation, useNavigationBuilder} from '@react-navigation/native'

import NorthWestIcon from '@mui/icons-material/NorthWest';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import IconButton from '@mui/material/IconButton';


const doSomething = (e) => {
    console.log("button pressed")
}


//Still need to center on page
//move button to corner of div.a

function SidebarIcons () {
    const navigation = useNavigation();
return(
    <div className="sidebar">
        <p><IconButton onClick={()=> doSomething()}><NorthWestIcon style={{ color: "white", fontSize:50 }} />            </IconButton></p>
        <p><IconButton onClick={()=> doSomething()}><SearchIcon style={{ color: "white", fontSize:50 }} />               </IconButton></p>
        <p><IconButton onClick={()=> doSomething()}><LocationOnOutlinedIcon style={{ color: "white", fontSize:50 }}  />  </IconButton></p>
        
        
        
    </div>
)
}

export default SidebarIcons