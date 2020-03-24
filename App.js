import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SearchScreen from './src/screens/search-screen';
import ResultDetail from './src/screens/result-detail-screen';

const navigator = createStackNavigator(
  {
    search: SearchScreen,
    resultDetail: ResultDetail
  },
  {
    initialRouteName: 'search',
    defaultNavigationOptions: {
      title: 'Business Search'
    },
  },
);

export default createAppContainer(navigator);