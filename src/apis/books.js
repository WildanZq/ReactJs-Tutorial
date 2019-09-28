import axios from 'axios';

export default axios.create({
    baseURL: 'https://books-4cbcb.firebaseio.com'
});
