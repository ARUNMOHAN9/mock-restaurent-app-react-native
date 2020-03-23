
import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const ResultCard = ({result}) => {

    return (
        <View>
            <Image style={styles.image} source={{uri: result.image_url}}/>
            <Text style={styles.name} >{result.name}</Text>
            <Text>{result.rating} stars, {result.review_count} reviews</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 250,
        height: 120,
        borderRadius: 5,

    },
    name: {
        fontWeight: 'bold'
    }
});

export default ResultCard;