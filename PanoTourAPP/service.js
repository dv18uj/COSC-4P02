import axios from 'axios';

const service = axios.create({
    baseURL: 'http://localhost:808/api'
});

export default service;