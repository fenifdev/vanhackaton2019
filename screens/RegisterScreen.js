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
      />
      <TextInput 
      	autoComplete="off"
      	autoCapitalize="none"
        autoCorrect={false}
      />
      <TextInput 
      	autoComplete="off"
      	secureTextEntry={true}
      	autoCapitalize="none"
        autoCorrect={false}
      />
      <TextInput 
      	autoComplete="off"
      	secureTextEntry={true}
      	autoCapitalize="none"
        autoCorrect={false}
      />
      <Button title="Register"></Button>
      <Text>Login</Text>
    </View>
  );
}