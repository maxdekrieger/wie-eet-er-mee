// React, React Native, Expo
import React from 'react';
import { View, ImageBackground } from 'react-native';

// Redux
import { connect } from 'react-redux';

// Custom components and styles
import styles from '../styles/styles';
import Button from '../components/Button';
import Text from '../components/Text';

class HomeScreen extends React.Component {

    render() {
        return (
            <ImageBackground 
              source={require('../images/people-table-food-picnic.jpg')}
              style={styles.background}
            >
            <View style={styles.backgroundDarkener}>
                <View style={styles.titleContainer}>
                <Text style={[styles.titleMain, this.props.fonts.OpenSansLoaded && styles.opensans]}>
                    Welkom terug, Max
                </Text>
                </View>
                <View style={styles.contentContainer}>
                    <Button icon="utensils" title="Eetgroepen" borderBottom/>
                    <Button icon="calendar-alt" title="Agenda" borderBottom/>
                    <Button icon="user" title="Profiel" borderBottom/>
                    <Button icon="cog" title="Instellingen" borderBottom/>
                </View>
            </View>
            </ImageBackground>
        );
    }
}

const mapStateToProps = (state) => {
    const { fonts } = state
    return { fonts }
};
  
export default connect(mapStateToProps)(HomeScreen);
