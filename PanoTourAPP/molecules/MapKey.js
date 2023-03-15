//this class can have an image of a location, heading and subheading with
// each being clickable and jumps to a tour location.
import Heading from "../atoms/Heading"
import Subheading from "../atoms/Subheading"

import React from "react"
import { View, Image, Text, StyleSheet } from "react-native"


// const Wrapper = styled.div`
//     display: flex;
//     flex-direction: column;
//     flex-grow: 1;
// `;

// const StyledMapKey = styled.div`
//     display: flex;
//     flex-direction: row;
//     justify-content: start;
//     align-items: start;
//     height: 100px;
//     width: 95%;
//     gap: 20px;
//     font-size: 1em;
// `;
// const StyledImage = styled.img`
//     height: 100%;
// `;

const styles = StyleSheet.create({
    mapKey: {
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      height: 100,
      width: "95%",
      marginVertical: 20,
      marginHorizontal: 10,
    },
    image: {
      height: "90%",
      width: "20%",
    },
    wrapper: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        height: "100%",
        width: "70%",
      },
});

function MapKey (props) {
    return (
        <View style = {styles.mapKey}>
            <Image source={{uri: props.imgSource}} style={styles.image}/>
            <View style = {styles.wrapper}>
                <Heading text={props.heading} style={{marginBottom: 10}}/>
                <Subheading text={props.subheading} />
            </View>
        </View>
    )
}

export default MapKey;