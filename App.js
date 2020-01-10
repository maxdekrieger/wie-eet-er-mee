import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import { Button } from 'react-native-elements';
import styles from './styles/styles.js';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Font from 'expo-font';

export default class App extends React.Component {

  state = {
    fontLoaded: false,
  }

  async componentDidMount() {
    await Font.loadAsync({
      'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
      'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
      'open-sans-italic': require('./assets/fonts/OpenSans-Italic.ttf'),
      'open-sans-bold-italic': require('./assets/fonts/OpenSans-BoldItalic.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    return (
      <ImageBackground 
        source={require('./images/people-table-food-picnic.jpg')} 
        style={styles.background}
      >
        <View style={styles.titleContainer}>
          <Text style={[styles.titleMain, this.state.fontLoaded && styles.opensans]}>
            Welkom terug, Max
          </Text>
        </View>
        <View style={styles.contentContainer}>
          <Button 
            icon={
              <Icon
                name="arrow-right"
                size={15}
                color="white"
              />
            }
            title="Mijn eetgroepen"
            type="clear"
            style={[styles.menuButton, this.state.fontLoaded && styles.opensans]}
          />
          <Button 
            title="Mijn profiel"
            type="clear"
            style={styles.menuButton}
          />
          <Button 
            title="Instellingen"
            type="clear"
            style={styles.menuButton}
          />
        </View>
      </ImageBackground>
    );
  }
}
