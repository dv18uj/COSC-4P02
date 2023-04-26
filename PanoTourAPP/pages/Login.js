import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import background from "../assets/museum_background.jpg"
import {useNavigation, useRoute} from '@react-navigation/native';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();
  const route = useRoute();

  const handleLogin = () => {
    // Handle login logic here
  };

  return (
    <View style={styles.container}>
        {/* <Image source={url({background})} style={styles.logo} /> */}
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={setUsername}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 50,
  },
  input: {
    width: '80%',
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    borderRadius: 5,
    padding: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
});

export default Login;

        </div>
    );
}