import axios from 'axios';
import config from '../config';

const Connector = axios.create({
    baseURL: `${config.url}/${config.version}`,
    responseType: 'json',
});

export default Connector;
