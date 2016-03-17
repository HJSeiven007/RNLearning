
// Tabbar

'use strict';

import React, {
	Component,
	StyleSheet,
	Text,
	View,
} from 'react-native'; 

export default class NavigationBar extends Component{
	
	constructor(props){
        super(props);
        this.state = {
			
        };
	}
	
	render(){
		
		return (
			<View style = {styles.container}>
			</View>
		);
	}
};

var styles = StyleSheet.create({
	container:{
		backgroundColor:'rgba(144, 244, 244, 1)',
		height:64,
	},
	
});
