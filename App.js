// React, React Native, Expo
import React from 'react';

// Redux
import { Provider } from 'react-redux';
import { createStore} from 'redux';
import fontReducer from './redux/FontReducer';

// Screens
import FontLoader from './components/FontLoader';
import HomeScreen from './screens/HomeScreen';

const store = createStore(fontReducer);

export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
          <FontLoader />
          <HomeScreen />
      </Provider>
    );
  }
}
