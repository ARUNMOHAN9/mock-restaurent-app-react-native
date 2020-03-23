
import React, { useState } from 'react';
import {View, Text, StyleSheet} from 'react-native';

import useYelpBusiness from '../hooks/useYelpBusiness';

import SearchBar from '../components/searchbar';

const SearchScreen = () => {
    const [searchTerm, onSearch] = useState('');
    const [searchRestaurent, results, errorMsg] = useYelpBusiness();
    
    return (
        <View>
            <SearchBar term={searchTerm}
            termChange={(newTerm) => onSearch(newTerm)}
            onSubmit={() => searchRestaurent(searchTerm)}/>
            {errorMsg ? <Text>{errorMsg}</Text> : null}
            <Text>We have found {results.length} results</Text>
        </View>
    );
}

const styles = StyleSheet.create({});

export default SearchScreen;