import { combineReducers } from 'redux';
import GetListMove from './GetListMove';
import GetListBanner from './GetListBanner';
import GetIDMovie from './GetIDMovie';
import GetListUser from './GetListUser';
import GetIdUser from './GetIdUser';
import Comment from './Comment';
const MyReducers = combineReducers({
    GetListMove,
    GetListBanner,
    GetIDMovie,
    GetListUser,
    GetIdUser,
    Comment
});
export default MyReducers;