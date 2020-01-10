// React, React Native, Expo
import React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';

// Redux
import { connect } from 'react-redux';

// Custom components
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
                <Text style={styles.titleMain}>
                    Welkom terug, Max
                </Text>
                </View>
                <View style={styles.contentContainer}>
                    <View style={styles.buttonContainer}>
                        <Button icon="utensils" title="Eetgroepen" borderBottom/>
                        <Button icon="calendar-alt" title="Agenda" borderBottom/>
                        <Button icon="user" title="Profiel" borderBottom/>
                        <Button icon="cog" title="Instellingen"/>
                    </View>
                </View>
            </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        width: '100%', 
        height: '100%', 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },

    backgroundDarkener: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.3)'
    },

    // Container and View styles
    titleContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    contentContainer: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },

    buttonContainer: {
        marginLeft: '10%',
        marginRight: '10%',
        backgroundColor: 'white',
        borderRadius: 10,
        flexDirection: 'column',
        height: '80%',
    },

    // Text styles
    titleMain: {
        color: 'white',
        fontSize: 35,
    },
});

const mapStateToProps = (state) => {
    const { fonts } = state
    return { fonts }
};
  
export default connect(mapStateToProps)(HomeScreen);
