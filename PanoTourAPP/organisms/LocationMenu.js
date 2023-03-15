import BuildingA from "../assets/Building_A.png"
import BuildingB from "../assets/Building_B.png"
import BuildingC from "../assets/Building_C.png"
import MapKey from "../molecules/MapKey"

import React from 'react'
import {Text, StyleSheet, View} from 'react-native'

// const Wrapper = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     height:100%;
//     width:100%;
//     gap:20px;
//     font-size: 20px;
// `;
const styles = StyleSheet.create({
    wrapper: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      width: '100%',
      marginVertical: 20, 
      marginHorizontal: 10, 
      padding: 10,
      fontSize: 20,
    },
});

function LocationMenu () {
    return(
        <View style = {styles.wrapper}>
            <MapKey imgSource={BuildingA} heading="Building A" subheading ="Exhibit A"/>
            <MapKey imgSource={BuildingB} heading="Building B" subheading ="Exhibit B"/>
            <MapKey imgSource={BuildingC} heading="Building C" subheading ="Exhibit C"/>
        </View>
    );
}

export default LocationMenu;