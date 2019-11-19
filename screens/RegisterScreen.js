import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

const registerscreen = class RegisterScreen extends React.Component {
  render(){
    const navigation = this.props.navigation;

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
        <Button title="Register" onPress={()=>navigation.navigate('App')}></Button>
        <Button title="Login" onPress={()=>navigation.navigate('Login')}></Button>
      </View>
    );
  }
}

export default registerscreen;