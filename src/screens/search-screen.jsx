
import React, { useState } from 'react';
import {View, Text, StyleSheet} from 'react-native';

import useYelpBusiness from '../hooks/useYelpBusiness';

import SearchBar from '../components/searchbar';
import ResultsWrapper from '../components/results-wrapper';

const SearchScreen = () => {
    const [searchTerm, onSearch] = useState('');
    const [searchRestaurent, results, errorMsg] = useYelpBusiness();

    const filterResultsByPrice = (price) => {
        return results.filter( (result) => result.price === price)
    }
    
    return (
        <View>
            <SearchBar term={searchTerm}
            termChange={(newTerm) => onSearch(newTerm)}
            onSubmit={() => searchRestaurent(searchTerm)}/>
            {errorMsg ? <Text>{errorMsg}</Text> : null}
            <Text>We have found {results.length} results</Text>

            <ResultsWrapper results={filterResultsByPrice('$')} title={'Cost Effective'}/>
            <ResultsWrapper results={filterResultsByPrice('$$')} title={'Bit Pricey'}/>
            <ResultsWrapper results={filterResultsByPrice('$$$')} title={'Big spender'}/>
        </View>
    );
}

const styles = StyleSheet.create({});

export default SearchScreen;