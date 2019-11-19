import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

const registerscreen = class RegisterScreen extends React.Component {
  render(){
    const navigation = this.props.navigation;

    return (
      <View>
        <Text>Logo VanHack</Text>
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
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Email"
        />
        <TextInput 
          style={styles.inputText}
          autoComplete="off"
          secureTextEntry={true}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Password"
        />
        <TextInput 
          style={styles.inputText}
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

export default registerscreen;