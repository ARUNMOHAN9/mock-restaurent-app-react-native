import {useState, useEffect} from 'react';

import yelp from '../service/axios-config';

export default () => {
    const [results, setResult] = useState([]);
    const [errorMsg, setErrorMsg] = useState('');

    useEffect( () => {
        searchRestaurent('pasta');
    }, []);

    const searchRestaurent = (term) => {
        setErrorMsg('');
        yelp.get('/search', {
            params: {
                limit: 50,
                term,
                location: 'san jose'
            }
        }).then( (results) => {
            setResult(results.data.businesses);
            console.log(results);
        }).catch( (err) => setErrorMsg('Something went wrong'));
    }

    return [searchRestaurent, results, errorMsg];
}