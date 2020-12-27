import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://myecom-neeraj-default-rtdb.firebaseio.com/'
})

export default instance;