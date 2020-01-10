import React from 'react';
import { Text, StyleSheet } from 'react-native';

import { connect } from 'react-redux';

class MyText extends React.Component {
    state = {
        hasError: false,
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return <Text>Error occurred in MyText</Text>
        }

        const givenStyle = this.props.style || {};
        let fontFamilyStyle = false;

        if (this.props.fonts.OpenSansLoaded != false
            && this.props.bold
            && this.props.italic) {
                fontFamilyStyle = styles.opensansbolditalic;
        } else if (this.props.fonts.OpenSansLoaded != false
            && this.props.bold) {
                fontFamilyStyle = styles.opensansbold;
        } else if (this.props.fonts.OpenSansLoaded != false
            && this.props.italic) {
                fontFamilyStyle = styles.opensansitalic;
        } else if (this.props.fonts.OpenSansLoaded != false) {
            fontFamilyStyle = styles.opensans;
        }

        return (
            <Text style={[givenStyle, fontFamilyStyle]}>
                {this.props.children}
            </Text>
        )
    }
}

const styles = StyleSheet.create({
    opensansbolditalic: {
        fontFamily: 'open-sans-bold-italic',
    },

    opensansbold: {
        fontFamily: 'open-sans-bold',
    },

    opensansitalic: {
        fontFamily: 'open-sans-italic',
    },

    opensans: {
        fontFamily: 'open-sans',
    },
});

const mapStateToProps = (state) => {
    const { fonts } = state;
    return { fonts };
};

export default connect(mapStateToProps)(MyText);
