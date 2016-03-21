
// Tabbar

'use strict';

import React, {
	Component,
	StyleSheet,
	TabBarIOS,
	Text,
	View,
	Navigator,
} from 'react-native'; 

import RootController from './RootController.js'; 

export default class Tabbar extends Component{
	
	constructor(props){
        super(props);
        this.state = {
			index:0,
			selectedTab: 'redTab',
        };
	}
	
	selectContent(color, index) {
		
		if (index == 0) {
			return (
				<Navigator
				initialRoute = {{component:RootController, name:'首页'}}
				configureScene={(route) => {
					var nav = Navigator.SceneConfigs.FloatFromRight;
					nav.defaultTransitionVelocity = 6;
					return nav;
					}}
				renderScene={(route, navigator) => {
			            let Component = route.component;
			            if(route.component) {
			              return <Component {...route.params} navigator={navigator} />
			            }
				}}		
				>
					
				</Navigator>
			);
		}
		else if (index == 1) {
			return (
		      <View style={[styles.tabContent, {backgroundColor: color}]}>
			    <Text style={styles.tabText}>{index}</Text>
				 <Text style={styles.tabText}>{10} re-renders of the {index}</Text>
		      </View>
			);
		}
		else if (index == 2) {
			return (
		      <View style={[styles.tabContent, {backgroundColor: color}]}>
			    <Text style={styles.tabText}>{index}</Text>
				 <Text style={styles.tabText}>{10} re-renders of the {index}</Text>
		      </View>
			);
		}
	}
	
	render(){
		
		return (
			<TabBarIOS tintColor="red"
				barTintColor="rgba(240, 249, 250,1)">
				<TabBarIOS.Item
				title="首页"
				icon={require('../resource/images/news.png')}
		          selected={this.state.selectedTab === 'redTab'}
		          onPress={() => {
		            this.setState({
						index:0,
						selectedTab: 'redTab',
		            });
		          }}>
		          {this.selectContent('#4F4A8C', 0)}
				</TabBarIOS.Item>
				
				<TabBarIOS.Item
				title="人生"
				icon={require('../resource/images/news.png')}
		          selected={this.state.selectedTab === 'redTab2'}
		          onPress={() => {
		            this.setState({
						index:1,
						selectedTab: 'redTab2',
		            });
		          }}>
		          {this.selectContent('#F14AEC', 1)}
				</TabBarIOS.Item>
												
				<TabBarIOS.Item
				title="我"
				icon={require('../resource/images/news.png')}
		          selected={this.state.selectedTab === 'redTab3'}
		          onPress={() => {
		            this.setState({
						index:2,
						selectedTab: 'redTab3',
		            });
		          }}>
		          {this.selectContent('#414A8C', 2)}
				</TabBarIOS.Item>
												
			</TabBarIOS>
		);
	}
};

var styles = StyleSheet.create({
	tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: 'white',
    margin: 50,
	},
});
