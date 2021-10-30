import axios from 'axios';
const clientAxios = axios.create({
    baseURL: procces.env.REACT_APP_BACKEND_URL
});

export default clientAxios;