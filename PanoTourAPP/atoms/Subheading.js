//Smaller and no bold compared to heading
import React from 'react'
import { Text, View} from 'react-native'

import styles from '../StyleHeads'

export default function Subheading(){
    return(
        <View>
        <Text style={styles.subheading}>I am a subheading!</Text>
        </View>
    )

}
