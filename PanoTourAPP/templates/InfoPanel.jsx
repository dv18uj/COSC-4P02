import React from "react";
import './infoPanel.css';
import pic from '../assets/image1.PNG';
import service from '../service'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import IconButton from "@mui/material/IconButton";
import { Grid,Box } from '@mui/material';
import { useNavigation } from '@react-navigation/native'


const handleClick = (e) => {
    console.log("clicked");
  };


const Menu = () => {
    const navigation = useNavigation()
    const [artifact, setArtifact] = React.useState(null)
    React.useEffect(()=>{
        service.get('/project',{
            params: {
                //uid: 1
            }
        }).then((response)=>{
            setArtifact(response.data)
        })
    },[])
    if(!artifact) return "No artifact"
return(
    <div className="infoPanel">
        <p onClick={navigation.goBack()} className="closeButton" >X</p>
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
            
            <h3>Building A/ Exhibit B </h3>

            <h4 id="title">
                {artifact.pname}
            </h4>

            <p id="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure  </p> 
            
            
            <p id="date">
                Date: 01/24/1998
            </p>
            
            {/* you can put a search bar over here */}
            
        </div>
    
    </div>
)

}

export default Menu









  