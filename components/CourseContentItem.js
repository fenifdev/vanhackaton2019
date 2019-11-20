import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const icon_action = <Image source={require('../assets/images/action-icon.png')}/>;
const icon_text = <Image source={require('../assets/images/text-icon.png')}/>;
const icon_video = <Image source={require('../assets/images/video-icon.png')}/>;
const icon_verified = <Image source={require('../assets/images/icon-checked.png')}/>;

const CourseContentItem = ({ item }) => {
	let icon = icon_action;
	if(item.type=='video') { icon = icon_video; }
	if(item.type=='document') { icon = icon_text; }

	return (
		<View style={styles.CourseContentItem}>
			{ icon }
			<View style={{flex:1, paddingLeft: 10, paddingRight: 10}}>
				<Text style={{ fontSize: 15 }}>{ item.title }</Text>
				<Text style={{ color: '#919191' }}>{ item.type }</Text>
		    </View>
		    {item.verified ? icon_verified : null}
		</View>
	)
}

const styles = StyleSheet.create({
	CourseContentItem: {
		borderBottomColor: '#CCC',
		borderBottomWidth: 1,
		padding: 0,
		paddingTop: 5,
		paddingBottom: 10,
		marginTop: 5,
		flexDirection: 'row',
		alignItems: 'center'
	}
});

export default CourseContentItem;