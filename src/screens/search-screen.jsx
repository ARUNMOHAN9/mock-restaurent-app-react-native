
import React, { useState } from 'react';
import {View, Text, StyleSheet} from 'react-native';

import SearchBar from '../components/searchbar';

const SearchScreen = () => {
    const [searchTerm, onSearch] = useState('');

    return (
        <View>
            <SearchBar term={searchTerm}
            termChange={(newTerm) => onSearch(newTerm)}
            onSubmit={() => console.log('submit')}/>
            <Text>Search screen</Text>
            <Text>{searchTerm}</Text>
        </View>
    );
}

const styles = StyleSheet.create({});

export default SearchScreen;