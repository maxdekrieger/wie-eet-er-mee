// React, React Native, Expo
import React from 'react';
import * as Font from 'expo-font';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadOpenSans } from '../redux/FontReducer';

class FontLoader extends React.Component {

    state = {
        hasError: false,
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    async componentDidMount() {
        await Font.loadAsync({
            'open-sans': require('../assets/fonts/OpenSans-Regular.ttf'),
            'open-sans-bold': require('../assets/fonts/OpenSans-Bold.ttf'),
            'open-sans-italic': require('../assets/fonts/OpenSans-Italic.ttf'),
            'open-sans-bold-italic': require('../assets/fonts/OpenSans-BoldItalic.ttf'),
        });

        this.props.loadOpenSans();
    }

    render() {
        return null;
    }
}

const mapStateToProps = (state) => {
    const { fonts } = state;
    return { fonts };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({loadOpenSans}, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(FontLoader);
