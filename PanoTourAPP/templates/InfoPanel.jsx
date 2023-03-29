import React from "react";
import './infoPanel.css';
import {useNavigation, useNavigationBuilder} from '@react-navigation/native'


//Still need to center on page
//move button to corner of div.a

function Menu () {
    const navigation = useNavigation();
return(
    <div className="infoPanel">
        <div className="left">Images go here</div>
        <div className="right">
            
            <li className="A">Building/Exhibit 
            
            <p onClick={()=>navigation.goBack()} className="closeButton" >X</p>
            </li>
            <li className="B">Title/Date</li>
            <li className="C">Discriptions go here</li>
        </div>
    </div>
)
}

export default Menu