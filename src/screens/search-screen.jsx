
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import useYelpBusiness from '../hooks/useYelpBusiness';

import SearchBar from '../components/searchbar';
import ResultsWrapper from '../components/results-wrapper';

const SearchScreen = () => {
    const [searchTerm, onSearch] = useState('');
    const [searchRestaurent, results, errorMsg] = useYelpBusiness();

    const filterResultsByPrice = (price) => {
        return results.filter((result) => result.price === price)
    }

    return (
        <>
            <SearchBar term={searchTerm}
                termChange={(newTerm) => onSearch(newTerm)}
                onSubmit={() => searchRestaurent(searchTerm)} />
            {errorMsg ? <Text>{errorMsg}</Text> : null}
            <ScrollView>
                <ResultsWrapper results={filterResultsByPrice('$')} title={'Cost Effective'} />
                <ResultsWrapper results={filterResultsByPrice('$$')} title={'Bit Pricey'} />
                <ResultsWrapper results={filterResultsByPrice('$$$')} title={'Big spender'} />
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({});

export default SearchScreen;