//This is a heading, larger font and in bold compared to a subheading
import React from 'react'
import {Text, View} from 'react-native'

import styles from '../StyleHeads'
export default function Heading(){
    return(
        <View>
        <Text style={styles.header}>I am a heading!</Text>
        </View>
    )
}