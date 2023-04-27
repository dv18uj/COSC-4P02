import React from "react";
import './infoPanel.css';
import pic from '../assets/image1.PNG';
import pic1 from '../assets/Hotspot.png';
import Tour from '../pages/Tour.js';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import IconButton from "@mui/material/IconButton";
import { Grid,Box } from '@mui/material';
import { useNavigation } from "@react-navigation/native";
import { useState } from 'react';


const handleClick = (e) => {
    console.log("clicked");
  };



const Menu = () => {
  

return(
    <div className="infoPanel">
        <button class = "close" onClick={() => useNavigation.navigate('../pages/Tour.js')}>&times;</button>
        <div className="left">
            
            <div id="pictureDiv">
                <img  src={pic} id="picture"/>
            </div>

            <div id="icons">

            <Grid container justifyContent="center" spacing={2} columns={16}>
                <Grid item xs={1}>
                     <IconButton onClick={handleClick()}> <ArrowBackIosIcon/>  </IconButton> 
                </Grid>
                <Grid item xs={1}>
                     <IconButton onClick={handleClick()}> <ArrowForwardIosIcon/>  </IconButton> 
                </Grid>
            </Grid>

            </div>
        </div>
        <div className="right">
        
            <h3 class = "tag" id="top1">Building A/ Exhibit B </h3>
            <div class="tag"><img  src={pic1} id="picture1"/><h1> Button</h1></div>

            <p class="tag" id="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure  </p> 
            
            <h4 id="title">
                Title: aTitle
            </h4>
            
            <h4 id="date">
                Date: 01/24/1997
            </h4>
            
            {/* you can put a search bar over here */}
            
        </div>
    
    </div>
    
)

}

export default Menu









  