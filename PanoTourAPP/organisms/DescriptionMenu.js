import museumLogo from "../assets/Museum_logo.svg";

import React from "react";
import {Button, View, StyleSheet, Image, Text} from 'react-native'
import {useNavigation} from '@react-navigation/native'

// const Wrapper = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     height:100%;
//     width:100%;
//     gap:20px;
// `;

// const Paragraph = styled.p`
//     color: white;
//     font-size: 12;
// `;

// const Logo = styled.img`
//     background: rgba(255,255,255,0.75);
//     border: 2px solid white; 
// `;

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        gap: 20,
    },
    paragraph: {
        color: 'white',
        fontSize: 18,

        //Optional
        textShadowColor: 'black',
        textShadowOffset: { width: 0, height: 0 }, 
        textShadowRadius: 2, 
    },

    logo: {
        backgroundColor: 'rgba(255, 255, 255, 0.75)',
        borderWidth: 2,
        borderColor: 'white',
        width:"40%",
        height:"25%",
        aspectRatio: 1, 
    },
    
})

function DescriptionMenu () {
    const navigation = useNavigation();
    return (
        <View style={styles.wrapper}>
            <Image source={museumLogo} style={styles.logo}/>
            <View>
                <Text style = {styles.paragraph}>Lorem Ipsum is simply dummy text of the 
                printing and typesetting industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s, when an unknown printer took a 
                galley of type and scrambled it to make a type specimen book. It has survived
                not only five centuries, but also the leap into electronic typesetting, 
                remaining essentially unchanged. It was popularised in the 1960s with the 
                release of Letraset sheets containing Lorem Ipsum passages, and more recently 
                with desktop publishing software like Aldus PageMaker including versions of 
                Lorem Ipsum.</Text>
            </View>
            <View >
                <Text style = {styles.paragraph}>It is a long established fact that a reader 
                will be distracted by the readable content of a page when looking at its layout. 
                The point of using Lorem Ipsum is that it has a more-or-less normal distribution 
                of letters, as opposed to using 'Content here, content here', making it look like 
                readable English. Many desktop publishing packages and web page editors now use 
                Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will 
                uncover many web sites still in their infancy. Various versions have evolved 
                over the years, sometimes by accident, sometimes on purpose (injected humour 
                and the like).</Text>
            </View>
            <Button
                color="rgba(0,0,0,.5)"
                border= "2px solid white"
                border-radius= "3px"
                title="Begin Tour"
                onPress={() => navigation.navigate('Tour')}
            />
        </View>
    );
}

export default DescriptionMenu;