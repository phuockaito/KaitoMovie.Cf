import axios from 'axios';
import * as Config from './Config';
export default function GetMovies(endpoint, method, body){
    return axios({
        method: method,
        url: `${Config.API_USER}/${endpoint}`,
        data: body
    }).catch(err => console.log(err))
};