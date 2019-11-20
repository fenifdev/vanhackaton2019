import React from 'react';
import {ScrollView, Text, View, Image} from 'react-native';
import { DrawerItems } from 'react-navigation-drawer';
import SafeAreaView from 'react-native-safe-area-view';

class CustomDrawerMenu extends React.Component {
	constructor(props) {
		super(props);
	}

  render () {
    return (
      <View style={styles.container}>
        <ScrollView>
			<SafeAreaView
				style={styles.container}
				forceInset={{ top: 'always', horizontal: 'never' }}
			>
				<View>
					<View style={{padding:10, flexDirection:'row', alignItems: 'center'}}>
						<Image source={require('../assets/images/flag-canada.png')} />
						<View style={{flex:1,paddingLeft:10,alignContent:'center'}}>
		          			<Text style={{fontSize:20}}>Mike Maicol Allen</Text>
		          			<Text>View Profile</Text>
		          		</View>
	          		</View>
	          	</View>
	          	<DrawerItems {...this.props}/>
          	</SafeAreaView>
        </ScrollView>
        <View style={styles.footerContainer}>
          <Text>Version 1.0.0</Text>
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    paddingTop: 20,
    flex: 1
  },
  navItemStyle: {
    padding: 10
  },
  navSectionStyle: {
    backgroundColor: 'lightgrey'
  },
  sectionHeadingStyle: {
    paddingVertical: 10,
    paddingHorizontal: 5
  },
  footerContainer: {
    padding: 20,
  }
};

export default CustomDrawerMenu;