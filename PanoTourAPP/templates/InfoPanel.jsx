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
import {ReactFitty} from 'react-fitty'

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
            <div class="hotspot-title">
                <img  src={pic1} id="picture1"/>
                <ReactFitty id="title"> {artifact.name}</ReactFitty>
            </div>
            
            <p class="tag" id="description">{artifact.description}</p> 
            
            <div class='other'>
                <div class='other-row'>
                    {artifact.title ? <ReactFitty class = "other-data"> <strong>Title: </strong> {artifact.title}</ReactFitty> : <></>}
                    {artifact.subjects ? <ReactFitty class = "other-data"> <strong>Subjects: </strong>{artifact.subjects}</ReactFitty> : <></>}
                    {artifact.photographer ? <ReactFitty class = "other-data"><strong>Photographer: </strong>{artifact.photographer}</ReactFitty> : <></>}
                    {artifact.dimensions ? <ReactFitty class = "other-data"> <strong>Dimensions: </strong>{artifact.dimensions}</ReactFitty> : <></>}
                </div>
                <div class='other-row'>
                    {artifact.date ? <ReactFitty class = "other-data"><strong>Date: </strong> {artifact.date}</ReactFitty> : <></>}
                    {artifact.people ? <ReactFitty class = "other-data"><strong>People: </strong>{artifact.people}</ReactFitty> : <></>}
                    {artifact.studio ? <ReactFitty class = "other-data"><strong>Studio: </strong>{artifact.studio}</ReactFitty> : <></>}
                </div>
            </div>
            {/* you can put a search bar over here */}
            
        </div>
    </div>
    
)

}

export default InfoPanel;









  