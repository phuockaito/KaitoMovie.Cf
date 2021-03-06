import * as ActionType from '../Constants/ActionType';
import Movies from '../Axios/Movies';
import React from 'react';
import GetBanner from '../Axios/GetBanner';
import User from '../Axios/User';
import Comment from '../Axios/Comment';
import history from '../history';
//-------------------Start Get Movie-------------------
export const GetAPIAllMoviesRequest = () => {
    return dispatch => {
        return Movies('All-Movie', 'GET', null).then(res => {
            dispatch(GetAPIAllMovies(res.data))
        })
    }
}
export const GetAPIAllMovies = ListMovie => {
    return {
        type: ActionType.GET_API_ALL_MOVIES,
        ListMovie
    }
}
//-------------------End Get Movie-------------------
//-------------------Start Get ID Movie-------------------
export const GetIDMovieRequest = ID => {
    return dispatch => {
        if (ID > 100) {
            history.push('/');
            setTimeout("location.reload(true)", 1);

        } else {
            return Movies(`All-Movie/${ID}`, 'GET', null).then(res => {
                dispatch(GetIDMovie(res.data))
            })
        }
    }
}
export const GetIDMovie = ID_MOVIES => {
    return {
        type: ActionType.GET_ID_MOVIES,
        ID_MOVIES
    }
}
//-------------------End Get ID Movie-------------------

//-------------------Start Get Banner-------------------
export const GetAPIAllBannerRequest = () => {
    return dispatch => {
        return GetBanner('Banner', 'GET', null).then(res => {
            dispatch(GetAPIBanner(res.data))
        })
    }
}
export const GetAPIBanner = ListBanner => {
    return {
        type: ActionType.GET_API_BANNER,
        ListBanner
    }
}
//-------------------End Get Banner-------------------

//-------------------Start Post User-------------------
export const PostUserAPIRequest = Accuont => {
    return dispatch => {
        return User('User', 'POST', Accuont).then(res => {
            dispatch(PostUser(res.data))
        })
    }
}
export const PostUser = (postUser) => {
    return {
        type: ActionType.POST_USER,
        postUser
    }
}
//-------------------End Post User-------------------
//-------------------Start Get List User-------------- 

export const GetListUserAPIResult = () => {
    return dispatch => {
        return User('User', 'GET', null).then(res => {
            dispatch(GetListUser(res.data))
        })
    }
}
export const GetListUser = (ListUser) => {
    return {
        type: ActionType.GET_LIST_USER,
        ListUser
    }
}
//-------------------End Get List User-------------------

//-------------------Start Get ID One User-------------------

export const GetOneUserApiRequest = id => {
    return dispatch => {
        return User(`User/${id}`, 'GET', null).then(res => {
            if (res) {
                dispatch(GetOneUserRequest(res.data))
            }
            else {
                localStorage.removeItem('ID');
                setTimeout("location.reload(true)", 1);
            }
        })
    }
}

export const GetOneUserRequest = userIdOne => {
    return {
        type: ActionType.GET_ID_ONE_USER,
        userIdOne
    }
}
//-------------------End Get ID One User-------------------
//-------------------Start Post Constants-------------------

export const PostCommentAPIRequest = comment => {
    return dispatch => {
        return Comment('Comment', 'POST', comment).then(res => {
            dispatch(PostCommentAPI(res.data))
        })
    }
}

export const PostCommentAPI = comment => {
    return {
        type: ActionType.POST_COMMENT,
        comment
    }
}
//----------------End Post Constants----------------
// ------------------- Get Comment----------------

export const GetCommentAPIRequest = () => {
    return dispatch => {
        return Comment('Comment', 'GET', null).then(res => {
            dispatch(GetCommentAPI(res.data));
        })
    }
}

export const GetCommentAPI = comment => {
    return {
        type: ActionType.GET_COMMENT,
        comment
    }
}

// ----------------End Get Comment----------------
//------------------- Start Date Comment----------


export const DeleteCommentAPIRequest = Id => {
    return dispatch => {
        return Comment(`Comment/${Id}`, 'DELETE', null).then(res => {
            dispatch(DeleteCommentAPI(res.data))
        })
    }
}

export const DeleteCommentAPI = comment => {
    return {
        type: ActionType.DELETE_COMMENT,
        comment
    }
}
//----------------End Date Comment----------------

//---------------- Start Id user----------------
export const PutIdUserAPIRequest = user => {
    return dispatch => {
        return User(`User/${user.ID}`, 'PUT', user).then(res => {
            dispatch(PutIdUserAPI(res.data))
        })
    }
}

export const PutIdUserAPI = user => {
    return {
        type: ActionType.PUT_ID_USER,
        user
    }
}
//---------------- End put user----------------

//----------------Start Put comment user--------------
export const PutOneUserCommentRequest = (comment) => {
    return {
        type: ActionType.PUT_ID_USER_COMMENT,
        comment
    }
}


export const PutOneUserCommentApiRequest = comment => {
    return dispatch => {
        return Comment(`Comment/${comment.ID}`, 'PUT', comment).then(res => {
            dispatch(PutOneUserCommentRequest(res.data))
        })
    }
}

//----------------End Put comment user----------------
