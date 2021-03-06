import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import * as ActionType from '../../../../Actions/index';
import './editUser.css';
import Swal from "sweetalert2";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
const IdUser = localStorage.getItem('ID');
const EditUser = () => {
    // Dispatch
    const dispatch = useDispatch();
    const DispatchGetCommentAPI = () => dispatch(ActionType.GetCommentAPIRequest());
    const PutIdUserAPIRequest = user => dispatch(ActionType.PutIdUserAPIRequest(user))
    const PutOneUserCommentApiRequest = comment => dispatch(ActionType.PutOneUserCommentApiRequest(comment))

    // Data
    const GetIdOneUserResult = useSelector(state => state.GetIdUser);
    const GetListComments = useSelector(state => state.Comment);

    // State
    const [initialState, SetteinitialState] = useState({ NameError: '', PasswordError: '', PasswordOldError: '', ConfirmPasswordError: '', LengthPasswordError: '' });
    const [UserComfinNew, SetUserComfinNew] = useState({ Name: '', Password: '', ConfirmPassword: '' })
    const [OpenFromUpData, StateOpenFromUpData] = useState(false);
    const [PasswordOld, SetPasswordOld] = useState({ passwordOld: '' });
    const PassOldContinue = [{ Password: GetIdOneUserResult.Password }]
    //
    const ContinuePassword = {};
    PassOldContinue.forEach(pass => {
        ContinuePassword[pass.Password] = [pass.Password]
    });
    // Get id all comment
    var IdComment = [];
    GetListComments.forEach(commet => {
        if (commet.IdUser === Number(IdUser)) {
            IdComment.push(commet)
        }
    });

    // function

    const onChangePasswordOld = event => {
        SetPasswordOld({ ...PasswordOld, [event.target.name]: event.target.value });
    }
    const OnChangeEitUser = (event) => {
        SetUserComfinNew({ ...UserComfinNew, [event.target.name]: event.target.value });
    };
    const OnSubmitUserEdit = e => {
        e.preventDefault();
        const isValid = validate();
        if (isValid) {
            var newUpdaUser = {
                ID: IdUser,
                Name: UserComfinNew.Name,
                Password: UserComfinNew.Password
            }
            PutIdUserAPIRequest(newUpdaUser);
            IdComment.forEach(id => {
                var NewUpDateUserComment = {
                    ID: id.ID,
                    NameUser: newUpdaUser.Name
                }
                 PutOneUserCommentApiRequest(NewUpDateUserComment)
            })
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Chỉnh Sữa Thành Công',
                showConfirmButton: false,
                timer: 1500
            })
              SetteinitialState({ NameError: '', PasswordError: '', ConfirmPasswordError: '', LengthPasswordError: '', PasswordOldError: '' })
              setTimeout("location.reload(true)", 1500);
        }
    }
    //useEffect
    useEffect(() => {
        DispatchGetCommentAPI();
    }, [])
    //
    const validate = () => {
        let NameError = "", PasswordError = "", ConfirmPasswordError = "", LengthPasswordError = "", PasswordOldError = "";
        if (UserComfinNew.Name.trim() === '' || Number(UserComfinNew.Name.trim()) || UserComfinNew.Name.trim().length > 25) {
            NameError = "vui lòng nhập đầy đủ họ tên";
        }
        if (!ContinuePassword[PasswordOld.passwordOld] || PasswordOld.passwordOld.trim() === '') {
            PasswordOldError = "Mật Khẩu Củ Không Đúng !"
        }
        if (UserComfinNew.Password.trim() === '') {
            PasswordError = "vui lòng nhập mật khẩu";
        }
        if (UserComfinNew.Password.trim() !== UserComfinNew.ConfirmPassword.trim()) {
            ConfirmPasswordError = "Mật Khẩu Không Trùng Khớp";
        }
        if (UserComfinNew.Password.trim().length < 8) {
            LengthPasswordError = "Mật Khẩu quá ngắn";
        }
        if (NameError || PasswordError || ConfirmPasswordError || LengthPasswordError || PasswordOldError) {
            SetteinitialState({ NameError, PasswordError, ConfirmPasswordError, LengthPasswordError, PasswordOldError })
            return false;
        }
        return true;
    }
    // Render
    if (!IdUser) return <Redirect to="/" />
    else return (
        <div className="grounp-edit-user">
            <div className="edit-user">
                <div className="grounp-form">
                    <div className="backgroun-from">

                        <h1>Thông tin</h1>
                        {
                            !OpenFromUpData && (
                                <div className="information-user">
                                    <p>Tên:<span>{GetIdOneUserResult.Name}</span></p>
                                    <p>giới tính:<span>{GetIdOneUserResult.Sex}</span></p>
                                    <p>Tài khoản:<span>{GetIdOneUserResult.Accuont}</span></p>
                                    <p>Password: <span>**********</span> </p>
                                    <button onClick={() => { StateOpenFromUpData(true) }}>Chỉnh sữa</button>
                                </div>
                            )
                        }
                        {
                            OpenFromUpData && (
                                <form className="From-dang-ky" onSubmit={OnSubmitUserEdit}>
                                    <div className="name-use">
                                        <p>Tên Của Bạn ?</p>
                                        <div className="grounp-tab">
                                            <div className="icon-input">
                                                <i className="far fa-user" />
                                            </div>
                                            <div className="text-input">
                                                <input
                                                    type="text"
                                                    name="Name"
                                                    onChange={OnChangeEitUser}
                                                />
                                            </div>
                                        </div>
                                        <span>{initialState.NameError}</span>
                                    </div>

                                    <div className="pass-use">
                                        <p>Mật Khẩu Củ</p>
                                        <div className="grounp-tab">
                                            <div className="icon-input">
                                                <i className="fas fa-lock" />
                                            </div>
                                            <div className="text-input">
                                                <input
                                                    type="password"
                                                    onChange={onChangePasswordOld}
                                                    name="passwordOld"
                                                />
                                            </div>
                                        </div>
                                        <span>{initialState.PasswordOldError}</span>
                                    </div>
                                    <div className="pass-use">
                                        <p>Mật Khẩu Mới</p>
                                        <div className="grounp-tab">
                                            <div className="icon-input">
                                                <i className="fas fa-lock" />
                                            </div>
                                            <div className="text-input">
                                                <input
                                                    type="password"
                                                    name="Password"
                                                    onChange={OnChangeEitUser}
                                                />
                                            </div>
                                        </div>
                                        <span>{initialState.PasswordError ? initialState.PasswordError : initialState.LengthPasswordError}</span>
                                    </div>
                                    <div className="comfirm-use">
                                        <p>Xác Nhận Lại Mật Khẩu</p>
                                        <div className="grounp-tab">
                                            <div className="icon-input">
                                                <i className="fas fa-lock" />
                                            </div>
                                            <div className="text-input">
                                                <input
                                                    type="password"
                                                    name="ConfirmPassword"
                                                    onChange={OnChangeEitUser}
                                                />
                                            </div>
                                        </div>
                                        <span>{initialState.PasswordError ? initialState.PasswordError : initialState.ConfirmPasswordError}</span>
                                    </div>
                                    <button className="button-eidt-user" type="submit" >Lưu lại</button>
                                    <button
                                        className="button-eidt-user active"
                                        type="button"
                                        onClick={() => { StateOpenFromUpData(false) }}>Hủy</button>
                                </form>
                            )
                        }


                    </div>
                </div>
            </div>
        </div>
    )
};
export default EditUser;