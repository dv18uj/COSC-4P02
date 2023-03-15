/**
 * A clickable button
 */

import React from "react";
import { View, StyleSheet, Text } from 'react-native';


// const StyledButton = styled.button`
//     background: black;
//     color: white;
//     font-size: 1em;
//     margin: 1em;
//     padding: 0.25em 1em;
//     border: 2px solid white;
//     border-radius: 3px;
// `;

const styles = StyleSheet.create({
    button: {
      backgroundColor: 'black',
      margin: 10,
      padding: 10,
      borderWidth: 2,
      borderColor: 'white',
      borderRadius: 3,
    },
});

function Button ({title}) {
    return(
        <View style = {styles.button}>
            <Text>{title}</Text>
        </View>
    )
}

export default Button;