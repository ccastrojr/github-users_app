import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import User from './pages/User';
import Repository from './pages/Repository';

const Routes = createAppContainer(
   createStackNavigator(
      {
         Main,
         User,
         Repository,
      },
      {
         headerLayoutPreset: 'center',
         headerBackTitleVisible: false,
         defaultNavigationOptions: {
            headerStyle: {
               backgroundColor: '#1976d2',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
               fontWeight: 'bold',
               fontSize: 18,
            },
         },
      }
   )
);

export default Routes;
