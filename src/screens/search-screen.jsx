
import React, { useState } from 'react';
import {View, Text, StyleSheet} from 'react-native';

import SearchBar from '../components/searchbar';

import yelp from '../service/axios-config';

const SearchScreen = () => {
    const [searchTerm, onSearch] = useState('');
    const [results, setResult] = useState([]);

    const searchRestaurent = () => {
        yelp.get('/search', {
            params: {
                limit: 50,
                searchTerm,
                location: 'san jose'
            }
        }).then( (results) => {
            setResult(results.data.businesses);
            console.log(results);
        }).catch( (err) => console.log(err));
    }

    return (
        <View>
            <SearchBar term={searchTerm}
            termChange={(newTerm) => onSearch(newTerm)}
            onSubmit={searchRestaurent}/>
            <Text>Search screen</Text>
            <Text>We have found {results.length} results</Text>
        </View>
    );
}

const styles = StyleSheet.create({});

export default SearchScreen;