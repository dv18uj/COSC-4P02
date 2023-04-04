import axios from 'axios';

const username = 'johnsmith'
const password = 'password'

const token = Buffer.from(`${username}:${password}`,'utf8').toString('base64')
const service = axios.create({
    baseURL: 'http://localhost:8080/api',
    headers: {
        'Authorization' : `Basic ${token}`
    },
});

export default service;