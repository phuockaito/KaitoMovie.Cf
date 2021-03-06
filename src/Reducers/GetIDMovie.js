import * as ActionType from '../Constants/ActionType';
var MyState = [];
const GetIDMovie = (state = MyState, action) => {
    switch (action.type) {
        case ActionType.GET_ID_MOVIES:
            state = action.ID_MOVIES;
            return state;
    
        default:
            return state;
    }
}
export default GetIDMovie;