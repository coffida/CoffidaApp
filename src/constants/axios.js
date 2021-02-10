import axios from 'axios';
import configs from './config';

axios.defaults.baseURL = configs.BASE_URL;
axios.defaults.headers.common = { 'Content-Type': 'application/json' };
axios.defaults.responseType = 'json';

export default axios;