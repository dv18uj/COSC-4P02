import React, {useState} from "react";
import {useNavigation} from '@react-navigation/native'
import './infoPanel.css'

//adds button and animation to menu to create the side menu



const SideMenu = () => {
    const [openPanel, setOpen] = useState(false);
    const navigation = useNavigation();
    return(
        <div>
            <button className="infoPanelBtn" onClick = {() => navigation.navigate('InfoPanel')}>Open</button>
        </div>

    )
}


export default SideMenu