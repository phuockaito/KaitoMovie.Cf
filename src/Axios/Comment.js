import axios from 'axios';
import * as Config from './Config';
export default function Comment(endpoint, method, body) {
    return axios({
        method: method,
        url: `${Config.API_COMMENT}/${endpoint}`,
        data: body
    }).catch(err => console.log(err))
}