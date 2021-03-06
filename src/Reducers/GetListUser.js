import * as ActionType from '../Constants/ActionType';
var MyState = [];
const GetListUser = (state = MyState, action) => {
    switch (action.type) {
        case ActionType.GET_LIST_USER: {
            state = action.ListUser;
            return state;
        }
        case ActionType.POST_USER: {
            const NewUser = [...state];
            NewUser.push(action.postUser);
            return NewUser;
        }

        default: return state;
    }
}
export default GetListUser;