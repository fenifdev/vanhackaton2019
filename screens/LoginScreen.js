import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image } from 'react-native';

const loginscreen = class LoginScreen extends React.Component {
  render() {
    const navigation = this.props.navigation;
    return (
    <View style={styles.viewContainer}>
      <View style={{marginTop:50,marginBottom:50}}>
        <Image style={styles.logo} source={require('../assets/images/logo.png')}/>
      </View>
      <View style={{flex:1,marginTop:50, width: '100%'}}>
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
        
      </View>
      <View style={{padding:10}}>
        <Button title="Register" onPress={()=>navigation.navigate('Register')}></Button>
      </View>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  viewContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'column'
  },
  logo: {
    height: 40,
    width: 200,
  },
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