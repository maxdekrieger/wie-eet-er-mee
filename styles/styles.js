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
        width: '80%',
        marginLeft: '10%',
        marginRight: '10%',
        marginBottom: '10%',
        backgroundColor: 'white',
        borderRadius: 10,
    },

    // Text styles
    titleMain: {
        color: 'white',
        fontSize: 35,
    },
});

export default styles;