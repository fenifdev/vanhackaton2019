import React from 'react';
import { StyleSheet, Text, View, Button, InputText } from 'react-native';

export default function RegisterScreen() {
  return (
    <View>
      <Text>Logo VanHack</Text>
      <TextInput 
      	autoComplete="off"
      	autoCapitalize="none"
        autoCorrect={false}
        placeholder="Username"
      />
      <TextInput 
      	autoComplete="off"
      	autoCapitalize="none"
        autoCorrect={false}
        placeholder="Email"
      />
      <TextInput 
      	autoComplete="off"
      	secureTextEntry={true}
      	autoCapitalize="none"
        autoCorrect={false}
        placeholder="Password"
      />
      <TextInput 
      	autoComplete="off"
      	secureTextEntry={true}
      	autoCapitalize="none"
        autoCorrect={false}
        placeholder="Re-Password"
      />
      <Button title="Register"></Button>
      <Text>Login</Text>
    </View>
  );
}