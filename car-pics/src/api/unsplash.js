import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 6eKffOH9JLgVSLHyjznV2BSFZRQuFNmGh9tMgYdq42E'
    }
});