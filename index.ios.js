
// The react-native project

'use strict';

import React, {
   AppRegistry,
   Component,
	TabBarIOS,
} from 'react-native';


import Tabbar from './js/Tabbar.js'; 

class RNLearning extends Component {
	
   render() {
				
		return (
			<Tabbar />
		);
	}
};

AppRegistry.registerComponent('RNLearning', () => RNLearning);
