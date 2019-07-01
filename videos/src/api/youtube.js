import axios from 'axios';

const KEY = 'AIzaSyC7XkqmZPXOHfjns9bVyHtZ5hz9qteqP_Y';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});