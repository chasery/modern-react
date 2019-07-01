import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 6f27838b24120b7b8277b5753de4ffa3a77a3d0bfdd4faaba42378083e01c0a0' 
    }
});