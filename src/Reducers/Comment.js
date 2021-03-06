import * as ActionType from '../Constants/ActionType';
var MyState = [];
const Comment = (state = MyState, action) => {
    switch (action.type) {
        case ActionType.POST_COMMENT: {
            const NewComment = [...state];
            NewComment.unshift(action.comment)
            return NewComment;
        }
        case ActionType.GET_COMMENT: {
            state = action.comment;
            return state;
        }
        case ActionType.DELETE_COMMENT: {
            var NewComment = [...state];
            var index = NewComment.findIndex(comment => comment.ID === action.comment.ID);
            NewComment.splice(index, 1);
            return NewComment;
        }
        default: return state;
    }
};
export default Comment;