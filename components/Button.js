// React, React Native, Expo
import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

// Redux
import { connect } from 'react-redux';

// Custom components
import Text from './Text';

class Button extends React.Component {
    state = {
        hasError: false,
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    renderIcon() {
        if (this.props.icon != false) {
            return (
                <FontAwesome5Icon 
                    name={this.props.icon} 
                    solid color={'black'} 
                    size={30}
                />)
        } else {
            return (
                <Text>icon</Text>
            );
        }
    }

    render() {
        if (this.state.hasError) {
            return (<Text>Something went wrong in this button</Text>);
        }

        return (
            <View
            style={[
                styles.buttonContainer, 
                this.props.borderTop && styles.borderTop, 
                this.props.borderBottom && styles.borderBottom]}
            >
                <TouchableOpacity style={styles.button}>
                    <View style={styles.buttonIconContainer}>
                        {this.renderIcon()}
                    </View>
                    <View style={styles.buttonTextContainer}>
                        <Text style={styles.buttonText}>{this.props.title}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        width: '100%',
    },

    button: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
    },
    
    buttonIconContainer: {
        flex: 1,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    buttonTextContainer: {
        flex: 3,
        height: '100%',
        justifyContent: 'center',
    },
    
    buttonText: {
        color: 'black',
        fontSize: 20,
    },
    
    borderBottom: {
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey',
    },

    borderTop: {
        borderTopWidth: 1,
        borderTopColor: 'lightgrey',
    },
})

const mapStateToProps = (state) => {
    const { fonts } = state
    return { fonts }
};
  
export default connect(mapStateToProps)(Button);