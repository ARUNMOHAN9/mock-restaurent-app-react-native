
import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, termChange, onSubmit }) => {
    return (
        <View style={styles.searchBarWrapper}>
            <Feather style={styles.searchIcon} name='search' />
            <TextInput style={styles.searchInput}
            autoCapitalize="none"
            autoCorrect={false}
            value={term}
            onChangeText={termChange}
            onEndEditing={onSubmit}
            placeholder='Search' />
        </View>
    );
}

const styles = StyleSheet.create({
    searchBarWrapper: {
        backgroundColor: '#FFF',
        borderRadius: 5,
        height: 50,
        marginHorizontal: 15,
        display: "flex",
        flexDirection: "row",
        marginBottom: 10

    },
    searchInput: {
        flex: 1,
        fontSize: 18
    },
    searchIcon: {
        fontSize: 35,
        alignSelf: "center",
        marginHorizontal: 15
    }
});

export default SearchBar;