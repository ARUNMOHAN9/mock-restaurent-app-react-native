
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, Image } from 'react-native';

import yelp from '../service/axios-config';

const ResultDetail = ({ navigation }) => {

    const id = navigation.getParam('id');

    const [imgArray, setImageArray] = useState(null);

    const getResult = () => {
        yelp.get(`/${id}`).then((res) => setImageArray(res.data.photos))
    }

    useEffect(() => {
        getResult();
    }, []);

    return (

        <View style={styles.view}>
            {imgArray ? <FlatList
                contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}
                showsVerticalScrollIndicator={false}
                data={imgArray}
                keyExtractor={(photo, index) => index + ''}
                renderItem={({ item }) => {
                    return (
                        <Image style={styles.image} source={{ uri: item }} />)
                }
                }
            /> : null}
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 300,
        borderRadius: 5,
        marginBottom: 5

    },
    view: {
        alignItems: 'center'
    }
});

export default ResultDetail;