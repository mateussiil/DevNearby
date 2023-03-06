import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Profile from './pages/Profile';
import Register from './pages/Register';

const Routes = createAppContainer(
  createStackNavigator({
    Main:{
      screen:Main,
      navigationOptions:{
        title: 'DevNearby'
      }
    },
    Register:{
      screen:Register,
      navigationOptions:{
        title: 'Register'
      }
    },
    Profile:{
      screen: Profile,
      navigationOptions:{
        title: 'Profile on GitHub'
      }
    },
  }, {
    defaultNavigationOptions:{
      headerTintColor:'#FFF',
      headerBackTitleVisible:false, 
      headerStyle:{
        backgroundColor: '#013959',
      }
    }
  })
);

export default Routes;