import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

const loginscreen = class LoginScreen extends React.Component {
  render() {
    const navigation = this.props.navigation;
    return (
    <View>
      <Text>Logo Vanhack</Text>
      <TextInput 
        style={styles.inputText}
        autoComplete="off"
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Username"
      />
      <TextInput 
        style={styles.inputText}
        autoComplete="off"
        secureTextEntry={true}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Password"
      />
      <Text>Forgot Password?</Text>
      <Button style={styles.mainButton} title="Login" onPress={()=>navigation.navigate('App')}></Button>
      <Button title="Register" onPress={()=>navigation.navigate('Register')}></Button>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  mainButton: {
    backgroundColor: '#0675ce'
  },
  inputText: {
    borderColor: '#c1cbd3', 
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    margin: 5
  }
});

export default loginscreen;