
// Tabbar

'use strict';

import React, {
	Component,
	StyleSheet,
	Text,
	View,
} from 'react-native'; 

import TestController from './TestController.js';

import NavigationBar from './index.js';

import HScrollView from './HScrollView.js';

import HMenu from './HMenu.js';

var self;

export default class RootController extends Component{
	
	constructor(props){
        super(props);
	}
	
	componentDidMount() {
		self = this;
	}
	
	menuClicked(info){
		const { navigator } = self.props;
		if(navigator) {
            navigator.push({
				name: 'TestController',
				component: TestController,
            })
		}	
	}
	
	render(){
		
		const rightButtonConfig = {
	    title: 'Next',
	    handler: () => {
			const { navigator } = this.props;
			if(navigator) {
	            navigator.push({
					name: 'TestController',
					component: TestController,
	            })
			}	
	    },
	  };
	
	  const titleConfig = {
				title: '首页',
		};
		return (
			<View style={styles.container}>
			<NavigationBar  
			        title={titleConfig}
			        rightButton={rightButtonConfig} />
			<View style = {styles.seperator}></View>
			<HScrollView />
			<HMenu  style = {styles.menu}
				 handler={this.menuClicked} />
			<View style = {styles.seperator2}></View>
			</View>
		);
	}
};

var styles = StyleSheet.create({
	container: {
	    flex: 1,
		backgroundColor:'white',
  },
  tabText: {
		color: 'red',
    	margin: 50,
	},
	seperator:{
		height:1,
		backgroundColor:'lightgray',
	},
	seperator2:{
		height:49,
		backgroundColor:'lightgray',
	},
	menu:{
		marginTop:10,
		flex:5,
	},
});
