import axios from 'axios';

const BASE_URL = 'https://api.openweathermap.org/data/2.5/'

const instance = axios.create({
    baseURL: BASE_URL,
    // headers: {
    //     Authorization: 'Bearer {token}'
    // }
})

export default instance