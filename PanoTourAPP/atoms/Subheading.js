//Smaller and no bold compared to heading
import React from 'react'
import {Text, StyleSheet} from 'react-native'

// const StyledSubheading = styled.p`
//     font-size: .5em;
//     color: rgba(255,255,255,0.75);
//     &hover {
//         color: rgba(255,255,255,1);
//     } 
// `;
const styles = StyleSheet.create({
    subheading: {
      fontSize: 17, 
      color: 'rgba(255, 255, 255, 0.75)',
    },
  });

export default function Subheading(props){
    return(
        <>
            <Text style = {styles.subheading}>{props.text}</Text>
        </>
    )

}
