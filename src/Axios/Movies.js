import axios from 'axios';
import * as Config from './Config';
export default function Movies(endpoint, method, body){
    return axios({
        method: method,
        url: `${Config.API_GET_MOVEI}/${endpoint}`,
        data: body
    }).catch(err => console.log(err))
};