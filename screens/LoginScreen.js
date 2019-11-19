import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

const loginscreen = class LoginScreen extends React.Component {
  render() {
    const navigation = this.props.navigation;
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
      <Button title="Login" onPress={()=>navigation.navigate('App')}></Button>
      <Button title="Register" onPress={()=>navigation.navigate('Register')}></Button>
    </View>
  );
  }
}

export default loginscreen;