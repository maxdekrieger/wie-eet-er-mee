import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    opensans: {
        fontFamily: 'open-sans',
    },

    background: {
        width: '100%', 
        height: '100%', 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },

    // Container and View styles
    titleContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    contentContainer: {
        flex: 3,
        width: '94%',
        marginLeft: '3%',
        marginRight: '3%',
        marginBottom: '3%',
        backgroundColor: 'white',
        borderRadius: 10,
    },

    // Text styles
    titleMain: {
        color: 'white',
        fontSize: 35,
    },

    // Button styles
    menuButton: {
        flex: 1,
        width: '100%',
        borderTopWidth: 0,
        borderRadius: 0,
    }
});

export default styles;