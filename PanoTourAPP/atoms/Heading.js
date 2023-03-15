//This is a heading, larger font and in bold compared to a subheading
import React from 'react'
import {Text, StyleSheet} from 'react-native'

// const StyledHeading = styled.h2`
//     font-weight: 700;
//     font-size: 1em;
//     &:hover {
//         font-weight:900;
//     }
// `;

const styles = StyleSheet.create({
    heading: {
      fontWeight: 'bold', 
      fontSize: 21,
    },
  });

export default function Heading(props){
    return(
        <>
            <Text style = {styles.heading}>{props.text}</Text>
        </>
    )
}