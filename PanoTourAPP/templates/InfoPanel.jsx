import React from "react";
import './infoPanel.css';
import pic from '../assets/image1.PNG';
import pic1 from '../assets/Hotspot.png';
import Tour from '../pages/Tour.js';
import service from '../service'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import IconButton from "@mui/material/IconButton";
import { Grid,Box } from '@mui/material';
import { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native'


const handleClick = (e) => {
    console.log("clicked");
  };

function InfoPanel () {
    const navigation = useNavigation()
    const route = useRoute()
    const [artifact, setArtifact] = React.useState(null)
    
    React.useEffect(()=>{
        console.log(route.params.oid)
        service.get('/artifact',{
            params: {
                oid: route.params.oid
            }
        }).then((response)=>{
            setArtifact(response.data)
        })
    },[route.params.oid])
    if(!artifact) return "No artifact"
return(
    <div className="infoPanel">
        <p onClick={()=>{navigation.goBack()}} className="closeButton" >X</p>
        <div className="left">
            
            <div id="pictureDiv">
                <img  src={artifact.url} id="picture"/>
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
        
            <h3 class = "tag" id="top1"> /  </h3>
            <div class="tag"><img  src={pic1} id="picture1"/><h1> {artifact.name}</h1></div>

            <p class="tag" id="description">{artifact.description}</p> 
            
            <h4 id="number_images">
                Number of Images: {artifact.number_images}
            </h4>
            
            {/* you can put a search bar over here */}
            
        </div>
    
    </div>
    
)

}

export default InfoPanel;









  