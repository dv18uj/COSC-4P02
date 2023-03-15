import React from "react";
import { View, StyleSheet } from 'react-native';

import background from "../assets/museum_background.jpg"
import DescriptionMenu from "../organisms/DescriptionMenu.js"
import LocationMenu from "../organisms/LocationMenu.js"

// const OuterWrapper =styled.div`
//     height: 100%;
//     display: flex;
//     flex-direction: row;
//     align-items: center;
//     justify-content: center;
//     background:linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${background});
//     background-size: cover;
// `;
// const Wrapper = styled.div`
//     padding: 75px;
//     height: 100%;
//     width: 50%;
// `;

// const StyledLine = styled.div`
//     height: 80%;
//     width: 4px;
//     background-color: rgba(255,255,255,0.75);

// `;

//added NavBar for reference, should be removed later
const styles = StyleSheet.create({
    outerWrapper: {    
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backgroundSize: 'cover'
    }, 
    
    wrapper: {
            padding: 75,
            height: '100%',
            width: '50%',
    },

    styledLine: {
        height: '80%',
        width: 4,
        backgroundColor: 'rgba(255, 255, 255, 0.75)',
    },
})


function StartingScreen () {
    return(
        <View style={[styles.outerWrapper, {backgroundImage: `url(${background})`}]}>
            <View style = {styles.wrapper}><DescriptionMenu/></View>
            <View style = {styles.styledLine}/> 
            <View style = {styles.wrapper}><LocationMenu/></View>
        </View>
    )
}

export default StartingScreen;