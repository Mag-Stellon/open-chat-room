import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:8080/',
})

export default {
    getMessages () {
        return API.get('messages');
    },
    postMessages (message) {
        return API.post('message', message);
    }
}
