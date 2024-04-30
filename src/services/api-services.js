
import axios from 'axios';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
 
const baseURL = `${import.meta.env.VITE_REACT_CLIENT_URL}`;
const instance = axios.create();
 
export const apiPost = async (url, data) => instance({
    method: 'post',
    url: baseURL + url,
    data,
});
 
instance.interceptors.request.use(function (config) {
    if (config.url.endsWith('login')) { // Assuming your login endpoint is named 'login'
        config.headers['Content-Type'] = 'application/json'; // Set content type for login request
    }
    return config;
}, function (error) {
    console.log(error, 'err');
    if (error.response.status === 500) {
        toast.error(error.message, {
            position: toast.POSITION.TOP_RIGHT
        });
    }
    return Promise.reject(error);
});
 
instance.interceptors.response.use(
    function (response) {
        if (response.config.method !== 'get') {
            toast.success(response.data.statusMessage, {
                position: toast.POSITION.TOP_RIGHT
            });
        }
        if (response.data) {
            if (response.data.statusCode === 200 || response.data.statusCode === 201) {
                return response.data;
            }
            return Promise.reject(response);
        }
        return Promise.reject(response);
    }, async function (error) {
        const originalRequest = error.config;
        if (error?.response?.status === 403 && !originalRequest._retry || error?.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            try {
                // Handle token refresh logic here if needed
            } catch (error) {
                // Handle refresh token error or redirect to login
            }
        }
        setTimeout(() => {
            document.body.classList.remove('loading-indicator');
        }, 2000);
        toast.error(error.response.data.message, {
            position: toast.POSITION.TOP_RIGHT
        });
        return Promise.reject(error.response?.data?.message);
    }
);
 
export default instance;
 
//api-services.js