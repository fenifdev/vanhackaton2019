import React from 'react';
import { TouchableNativeFeedback, Image, View } from 'react-native';

const logoutscreen = class LogoutScreen extends React.Component {
	componentWillMount() {
		this.props.navigation.navigate('Login');
	}

	render() {
		return (
			<View></View>
		)
	}
}

export default logoutscreen;