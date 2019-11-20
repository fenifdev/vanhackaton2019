import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import {ScrollView, Text, View} from 'react-native';
import { DrawerItems } from 'react-navigation-drawer';
import SafeAreaView from 'react-native-safe-area-view';

class CustomDrawerMenu extends Component {
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
					<View>
		          		<Text>User Picture</Text>
		          		<Text>Mike Maicol Allen</Text>
		          		<Text>View Profile</Text>
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