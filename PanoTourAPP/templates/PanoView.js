import React from 'react';
import Dome from '../organisms/Dome'
import img1 from '../assets/env_2.jpeg'
import img2 from '../assets/office.jpg'
class PanoView extends React.Component {
    constructor(props){
        images = []
        image =require('../assets/env_2.jpeg')
        //Populate list of hotspots from a set
        //const{id,..props} 
    }

    render(){
        return <Dome image = {image}/>
    }
        
}

export default PanoView;