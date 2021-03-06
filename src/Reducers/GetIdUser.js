import * as ActionType from '../Constants/ActionType';
var MyState = [];
const GetIdUser = (state = MyState, action) => {
    switch (action.type) {
        case ActionType.GET_ID_ONE_USER:
            state = action.userIdOne;
            return state;
        default:
            return state;
    }
}
export default GetIdUser;