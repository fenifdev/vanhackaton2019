import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function LoginScreen() {
  return (
    <View>
      <Text>Logo Vanhack</Text>
      <TextInput 
      	autoComplete="off"
      	autoCapitalize="none"
        autoCorrect={false}
        placeholder="Username"
      />
      <TextInput 
      	autoComplete="off"
      	secureTextEntry={true}
      	autoCapitalize="none"
        autoCorrect={false}
        placeholder="Password"
      />
      <Text>Forgot Password?</Text>
      <Button title="Login"></Button>
      <Text>Register</Text>
    </View>
  );
}