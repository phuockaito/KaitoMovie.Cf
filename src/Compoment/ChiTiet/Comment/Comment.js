import React, { useState } from 'react';
import './Comment.css';
import { useRouteMatch } from "react-router-dom";
import StarRatings from "react-star-ratings";
import avatar from '../../../Image/avatar.png';
import { useSelector, useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import * as ActionType from '../../../Actions/index';
const IDUser = JSON.parse(localStorage.getItem('ID'));
const Comment = () => {
 
    var NoIdCommnet = [], YesIdCommnet = [], manglengthComment=[],lengthComment;
    let IdMovie = useRouteMatch().params.ID;

    // dispatch
    const dispatch = useDispatch();
    const PostCommentAPI = comment => dispatch(ActionType.PostCommentAPIRequest(comment));
    const DeleteCommentAPIRequest = (id) => dispatch(ActionType.DeleteCommentAPIRequest(id));
    //State
    const [Comment, SETComment] = useState({ Content: '' });
    const [Start, SETStart] = useState(0);
    const [sendCommnet, setSendCommnet] = useState(5);
    
    const GetIdOneUserResult = useSelector(state => state.GetIdUser);
    const GetComment = useSelector(state => state.Comment);
   
    GetComment.forEach((m, index) => {
        if(m.IdMovie==IdMovie){
            manglengthComment.push(GetComment[index]);
        }
        if (m.IdUser !== IDUser && m.IdMovie === IdMovie) {
            NoIdCommnet.unshift(GetComment[index]);
        }
        if (m.IdUser == IDUser && m.IdMovie === IdMovie) {
            YesIdCommnet.unshift(GetComment[index]);
        }
         
    });
    YesIdCommnet.forEach((e) => {
        NoIdCommnet.unshift(e);
    });
    lengthComment = manglengthComment.length;
  
    // function
    const changeRating = (newRating) => {
        SETStart(newRating)
    }
    const OnChangeComment = (event) => {
        SETComment({ ...Comment, [event.target.name]: event.target.value });
    }
    const onSubmitComment = event => {
        event.preventDefault();
        if (IDUser) {
            if (Comment.Content.trim() === '') {
                Swal.fire('Bình Luận Của Bạn Chưa Có Gì')

            } else {
                var NewComment = {
                    Star: Start,
                    Content: Comment.Content,
                    IdUser: IDUser,
                    IdMovie: IdMovie,
                    Avatar: GetIdOneUserResult.Avatar,
                    NameUser: GetIdOneUserResult.Name
                }
                PostCommentAPI(NewComment);
                SETComment({ Content: '' })
                SETStart(0)
            }

        } else {
            Swal.fire({
                icon: 'error',
                title: 'Vui Lòng Đăng Nhập !',
            })
        }

    }
    // function

    const DleteCmt = (IdComment) => {
        DeleteCommentAPIRequest(IdComment)
    }
    return (
        <>
            <div className="comment">
                <h1>Bình Luận Về Phim</h1>
                <div className="from-commet">
                    <div className="StarRating">
                        <StarRatings
                            numberOfStars={5}
                            starDimension="22px"
                            starEmptyColor="white"
                            name="Star"
                            starRatedColor="#fed330"
                            starHoverColor="#fed330"
                            changeRating={changeRating}
                            rating={Start}
                        />
                    </div>
                    <div className="image-comment">
                        <img src={IDUser ? GetIdOneUserResult.Avatar : avatar} alt={IDUser ? GetIdOneUserResult.Name : 'no'} />
                    </div>
                    <form onSubmit={onSubmitComment}>
                        <textarea
                            onChange={OnChangeComment}
                            value={Comment.Content}
                            name='Content'
                            placeholder="Thêm Bình Luận Của Bạn..."
                        />
                        <button>Gửi</button>
                    </form>

                </div>
            </div>
            <div className="iteml-comment">
                {
                    NoIdCommnet.splice(0, sendCommnet).map(comment => (
                        <div className="gruonp-comment" key={comment.ID}>
                            <div className="show-comment">
                                <div className="image-use">
                                    <img src={comment.Avatar} alt={comment.NameUser} />
                                </div>
                                <div className="connter-comment">
                                    <h2>{comment.NameUser}</h2>
                                    <p>{comment.Content}</p>
                                    <span> <StarRatings
                                        numberOfStars={comment.Star}
                                        starDimension="22px"
                                        starEmptyColor="#fed330"
                                    />
                                        {
                                            comment.IdUser === IDUser && (<button onClick={() => { DleteCmt(comment.ID) }}> Xoá</button>)
                                        }
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))
                }

                {sendCommnet < lengthComment && (<button onClick={() => { setSendCommnet(sendCommnet + 5) }}>Tải thêm</button>)}
            </div>
        </>
    )
}
export default Comment;