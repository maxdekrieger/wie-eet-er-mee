import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';

import Text from '../components/Text';
import sharedStyles from '../shared-styles';

class EatingGroupsOverview extends React.Component {
    render() {
        return (
            <ImageBackground
              source={require('../images/people-table-food-picnic.jpg')}
              style={sharedStyles.background}
            >
                <Text>Yes yes dit is de test</Text>
            </ImageBackground>
        )
    }
}

export default EatingGroupsOverview;