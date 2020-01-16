import React from 'react';
import { View, StyleSheet, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import { Avatar, SearchBar } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

import Text from '../components/Text';
import sharedStyles from '../shared-styles';

function itemSeparator () {
    return (
        <View 
            style={styles.itemSeparator}
        />
    );
}

class EatingGroupFlatListItemNoNav extends React.Component {
    render() {
        return (
            <TouchableOpacity style={styles.item}>
                <View style={styles.itemAvatarContainer}>
                    <Avatar 
                        rounded
                        size="large"
                        title={this.props.title.substring(0, 2).toUpperCase()}
                    />
                </View>
                <View style={styles.itemContentContainer}>
                    <Text style={styles.itemTitle}>{this.props.title}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const EatingGroupFlatListItem = withNavigation(EatingGroupFlatListItemNoNav);

class EatingGroupsOverview extends React.Component {

    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;

        return {
            title: 'Eetgroepen',
            headerTintColor: '#25383c',
            headerStyle: {
                backgroundColor: '#d3bdb0',
            },
            headerRight: () => (
                <View style={styles.navigationButtonContainer}>
                    <FontAwesome5Icon 
                        name="search"
                        color={'#25383c'} 
                        size={20}
                        style={styles.navigationButtonSearch}
                        onPress={() => params.setSearching(true)}
                    />
                    <FontAwesome5Icon 
                        name="plus"
                        color='#25383c'
                        size={20}
                        style={styles.navigationButtonAdd}
                    />
                </View>
            ),
                
        };
    };

    eatingGroups = [
        {id: 'a', name: 'Kriegers'},
        {id: 'b', name: 'Hoonhoud'},
        {id: 'c', name: 'Met de boys'},
        {id: 'd', name: 'Lekker met de meiden'},
        {id: 'e', name: 'Lullo\'s van E. du P 36'},
        {id: 'f', name: 'Lorem'},
        {id: 'g', name: 'Ipsum'},
        {id: 'h', name: 'Dolor'},
        {id: 'i', name: 'Sit'},
        {id: 'j', name: 'Jezus...'},
        {id: 'k', name: 'Wie'},
        {id: 'l', name: 'Heeft'},
        {id: 'm', name: 'Er'},
        {id: 'n', name: 'Nou'},
        {id: 'o', name: 'Zo'},
        {id: 'p', name: 'Veel'},
        {id: 'q', name: 'Eetgroepen'},
        {id: 'r', name: 'Maar'},
        {id: 's', name: 'Het'},
        {id: 't', name: 'Zou'},
        {id: 'u', name: 'Kunnen'},
    ];

    state = {
        allEatingGroups: this.eatingGroups,
        currentSearchEatingGroups: this.eatingGroups,
        searching: false,
        searchTerm: "",
    }

    renderSearchBar() {
        if (this.state.searching == true) {
            return (
                <SearchBar
                    placeholder="Typ Hier..."
                    onChangeText={(search) => { this.setState({searchTerm: search}); }}
                    lightTheme={true}
                    value={this.state.searchTerm}
                />
            )
        } else {
            return null;
        }
    }
    
    setSearching = (searching) => {
        this.setState({
            searching: searching,
        })
    }

    componentDidMount() {
        const { navigation } = this.props;
    
        navigation.setParams({
            setSearching: this.setSearching
        });
    }

    render() {
        return (
            <SafeAreaView style={styles.flatListContainer}>
                { this.renderSearchBar() }
                <FlatList
                    data={this.state.currentSearchEatingGroups}
                    renderItem={({ item }) => <EatingGroupFlatListItem title={item.name} />}
                    keyExtractor={item => item.id}
                    ItemSeparatorComponent={itemSeparator}
                />
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },

    navigationButtonContainer: {
        flexDirection: 'row',
    },

    navigationButtonSearch: {
        flex: 1,
        marginRight: 32
    },

    navigationButtonAdd: {
        flex: 1,
        marginRight: 32
    },

    flatListContainer: {
        height: '100%',
        width: '100%',
    },

    item: {
      backgroundColor: 'white',
      paddingHorizontal: 20,
      paddingVertical: 5,
      flexDirection: 'row',
    },

    itemAvatarContainer: {
        flex: 1,
        justifyContent: 'center',
    },

    itemContentContainer: {
        flex: 4,
        paddingLeft: '5%',
    },

    itemTitle: {
        flex: 1,
        fontSize: 18,
        textAlignVertical: 'center'
    },

    itemSeparator: {
        width: '100%',
        backgroundColor: 'lightgrey',
        height: 1,
    },
  });

export default EatingGroupsOverview;