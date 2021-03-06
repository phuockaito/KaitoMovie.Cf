import * as ActionType from '../Constants/ActionType';
var MyState = [];
const GetListMovie = (state = MyState, action) => {
    switch (action.type) {
        case ActionType.GET_API_ALL_MOVIES:
           {
            state = action.ListMovie;
            return state;
           }
        default:
            return state;
    }
}
export default GetListMovie;