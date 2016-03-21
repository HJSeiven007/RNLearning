
// Tabbar

'use strict';

import React, {
	Component,
	StyleSheet,
	Text,
	View,
	ScrollView,
	Image
} from 'react-native'; 

var Dimensions = require('Dimensions');

export default class HScrollView extends Component{
	
	constructor(props){
        super(props);
        this.state = {

        };
	}
	
	shouldComponentUpdate(nextProps, nextState) {
	    return false;
	}
	
	render(){
		
		return (
			<View style = {styles.viewStyle}>
			<ScrollView style={[styles.scrollView, styles.horizontalScrollView]}
				contentContainerStyle={styles.contentContainer}
				horizontal = {true}
				pagingEnabled = {true}
				showsHorizontalScrollIndicator = {false}
				automaticallyAdjustContentInsets = {false}
				scrollEventThrottle={180}
			>
				<View style={styles.content}>
				<Image style={styles.img} source={require('../resource/images/002.jpg')} />
				</View>
				<View style={styles.content}>
				<Image style={styles.img} source={require('../resource/images/homeAds001.png')} />
				</View>
				<View style={styles.content}>
				<Image style={styles.img} source={require('../resource/images/homeAds002.png')} />
				</View>
			</ScrollView>
			</View>
		);
	}
};

var styles = StyleSheet.create({
	scrollView: {
		backgroundColor: 'white',
   		height: 180
	 },
    horizontalScrollView: {
		height: 180
	},
	viewStyle:{
		height:180,
		backgroundColor: 'white'
	},
	contentContainer: {
		backgroundColor: 'white',
		height:180
	},
	content:{
		backgroundColor: 'white',
		height:180
	},
   img: {
		width: Dimensions.get('window').width,
		height: 180
	}
	
});
