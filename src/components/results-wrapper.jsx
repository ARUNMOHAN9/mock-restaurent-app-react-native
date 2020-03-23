
import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import ResultCard from './result-card';

const ResultsWrapper = ({ title, results }) => {
    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal
                data={results}
                keyExtractor={result => result.id}
                renderItem={ ({item}) => <ResultCard result={item}/>}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default ResultsWrapper;