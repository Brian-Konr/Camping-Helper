import axios from 'axios';

const instance = axios.create({
    baseURL: "https://campinghelper.temp.dodofk.xyz",
});

instance.interceptors.request.use(
    (config) => {
        // get token from local storage
        const token = localStorage.getItem('token');
        
        if(token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (err) => Promise.reject(err)
)

export default instance;