//Heading and Subheading
import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

//import Heading from '../atoms/Heading.js'
import Subheading from '../atoms/Subheading'
import Heading from '../atoms/Heading'

export default function Paragraph(){
        return(
            <View style={styles.container}>
            <Text>This is a test</Text>
            <Heading/>
            <Subheading/>
            </View>
        )
    
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        top: 100
    }
})