import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SearchScreen from './src/screens/search-screen';

const navigator = createStackNavigator(
  {
    search: SearchScreen
  },
  {
    initialRouteName: 'search',
    defaultNavigationOptions: {
      title: 'Buisiness Search'
    },
  },
);

export default createAppContainer(navigator);