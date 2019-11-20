import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image } from 'react-native';
import ButtonPrimary from '../components/ButtonPrimary.js';

const registerscreen = class RegisterScreen extends React.Component {
  render(){
    const navigation = this.props.navigation;

    return (
      <View style={styles.viewContainer}>
        <View style={{marginTop:20,marginBottom:50}}>
          <Image style={styles.logo} source={require('../assets/images/logo.png')}/>
        </View>
        <View style={{flex:1,width:'100%'}}>
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
          <ButtonPrimary text="REGISTER" onPress={()=>navigation.navigate('App')}/>
        </View>
        <View style={{padding:10}}>
          <Button title="Login" onPress={()=>navigation.navigate('Login')}></Button>
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
    flexDirection: 'column',
    padding:10
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
    marginTop: 5,
    marginBottom: 5
  }
});

export default registerscreen;