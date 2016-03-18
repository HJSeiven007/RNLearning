
// Tabbar

'use strict';

import React, {
	Component,
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
} from 'react-native'; 

import RootController from './RootController.js';


export default class TestController extends Component{
	
	constructor(props){
        super(props);
        this.state = {

        };
	}
	
	_pressButton() {
        const { navigator } = this.props;
        if(navigator) {
			navigator.pop();
        }
	}
	
	render(){
		
		return (
			<View style={styles.tabContent}>
			<TouchableOpacity onPress={this._pressButton.bind(this)}>
			<Text style={styles.tabText}>点我回去</Text>
			</TouchableOpacity>
			</View>
		);
	}
};

var styles = StyleSheet.create({
	tabContent: {
    flex: 1,
    alignItems: 'center',
	backgroundColor:'gray'
  },
  tabText: {
			color: 'red',
    margin: 50
	}
});
