import React from "react";
import './infoPanel.css';
import service from '../service'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import IconButton from "@mui/material/IconButton";
import { Grid,Box } from '@mui/material';
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
            
            <h3>Building A/ Exhibit B </h3>

            <h4 id="title">
                {artifact.name}
            </h4>

            <p id="description">{artifact.description}</p> 
            
            
            <p id="date">
                Date: {artifact.date}
            </p>
            
            {/* you can put a search bar over here */}
            
        </div>
    
    </div>
)

}

export default InfoPanel;









  