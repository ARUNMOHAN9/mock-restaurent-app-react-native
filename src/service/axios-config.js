import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'bearer BsMPOTdg7o7LISZcJFOvbrtokbTel7e8l2rDUtNNTVoLjec1OEwdT8zJea6FiQQzIE3GKA8NHM-4wCC3GgNVZeZ15tq9ncUKV5P8rOfZfScttt67-HaY8rI3cHB3XnYx'
    }
});