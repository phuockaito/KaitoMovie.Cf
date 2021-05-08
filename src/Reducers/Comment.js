import * as ActionType from '../Constants/ActionType';
import $ from 'jquery';
import Swal from 'sweetalert2'

var MyState = [];
const Comment = (state = MyState, action) => {
    switch (action.type) {
        case ActionType.POST_COMMENT: {
            const NewComment = [...state];
            NewComment.unshift(action.comment);
            $("body,html").animate({ scrollTop: $(".iteml-comment").offset().top -90 }, 500);
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
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Xóa Thành Công',
                showConfirmButton: false,
                timer: 1500
              })
            return NewComment;
        }
        default: return state;
    }
};
export default Comment;