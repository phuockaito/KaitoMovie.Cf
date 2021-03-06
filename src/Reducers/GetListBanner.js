import * as ActionType from '../Constants/ActionType';
var MyState = [];
const GetListBanner = (state = MyState, action) => {
    switch (action.type) {
        case ActionType.GET_API_BANNER:
            state = action.ListBanner;
            return state;
        default:
            return state;
    }
}
export default GetListBanner;