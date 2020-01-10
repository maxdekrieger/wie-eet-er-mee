import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import * as Font from 'expo-font';

import styles from './styles/styles';
import Button from './utils/Button';

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
        <View style={styles.backgroundDarkener}>
          <View style={styles.titleContainer}>
            <Text style={[styles.titleMain, this.state.fontLoaded && styles.opensans]}>
              Welkom terug, Max
            </Text>
          </View>
          <View style={styles.contentContainer}>
            <Button icon="utensils" title="Mijn Eetgroepen" borderBottom/>
            <Button icon="user" title="Mijn Profiel" borderBottom/>
            <Button icon="cog" title="Instellingen" borderBottom/>
            <Button icon="calendar-alt" title="Agenda" borderBottom/>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
