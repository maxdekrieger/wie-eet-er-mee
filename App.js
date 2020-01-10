// React, React Native, Expo
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// Redux
import { Provider } from 'react-redux';
import { createStore} from 'redux';
import fontReducer from './redux/FontReducer';

// Screens
import FontLoader from './components/FontLoader';
import HomeScreen from './screens/HomeScreen';
import EatingGroupsOverview from './screens/EatingGroupsOverview';

const store = createStore(fontReducer);

const AppNavigator = createStackNavigator(
  {
    HomeScreen: HomeScreen,
    EatingGroupsOverview: EatingGroupsOverview
  },
  {
    initialRouteName: 'HomeScreen',
    gestureDirection: 'vertical',
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <FontLoader />
        <AppContainer />
      </Provider>
    );
  }
}
