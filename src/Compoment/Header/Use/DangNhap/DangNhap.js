import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './DangNhap.css';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
const ID = JSON.parse(localStorage.getItem('ID'));
const DangNhap = (propos) => {
    // State
    const GetListUserResult = useSelector(state => state.GetListUser);
    const [ComfirmUser, StaerComfirmUser] = useState({ Accuont: '', Password: '' });
    const Continue = {};
    var Accuont = ComfirmUser.Accuont;
    var Password = ComfirmUser.Password;
    const FileIndex = (list, Ac, Ps) => {
        var reslut = -1;
        list.forEach((user, index) => {
            if (user.Accuont === Ac && user.Password === Ps) {
                reslut = index;
            }
        })
        return reslut;
    }
    GetListUserResult.forEach(user => {
        Continue[user.Accuont] = user.Accuont;
        Continue[user.Password] = user.Password;
    });
    // function
    const OnChangeLogin = event => {
        StaerComfirmUser({ ...ComfirmUser, [event.target.name]: event.target.value })

    }
    const onSubmitLogin = event => {
        event.preventDefault();
        if (ComfirmUser.Accuont.trim() === '' || ComfirmUser.Password.trim() === '') return Swal.fire('Tài Khoản Hoặc Mật Khẩu Không Đúng');

        else if (Continue[Accuont] && Continue[Password]) {
            var index = FileIndex(GetListUserResult, Accuont, Password);
            if (index === -1) {
                Swal.fire('Tài Khoản Hoặc Mật Khẩu Không Đúng')
            } else {
                localStorage.setItem('ID', GetListUserResult[index].ID);
                setTimeout("location.reload(true)", 1);
            }

        } else {
            Swal.fire('Tài Khoản Hoặc Mật Khẩu Không Đúng')
        }
    }
    //
    const sho_wWidth_Login = () => {
        Swal.fire('Đang bảo trì')
    }
    if (ID) return <Redirect to="/" />
    return (
        <div className="group-dang-nhap">
            <div className="grounp-dang-ky">
                <div className="grounp-form">
                    <div className="backgroun-from">
                        <form onSubmit={onSubmitLogin}>
                            <h1>Đăng nhập</h1>

                            <div className="account-use">
                                <p>Tài Khoản</p>
                                <div className="grounp-tab">
                                    <div className="icon-input">
                                        <i className="far fa-envelope" />
                                    </div>
                                    <div className="text-input">
                                        <input
                                            type="text"
                                            onChange={OnChangeLogin}
                                            value={ComfirmUser.Accuont}
                                            name='Accuont'
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="pass-use">
                                <p>Mật Khẩu</p>
                                <div className="grounp-tab">
                                    <div className="icon-input">
                                        <i className="fas fa-lock" />
                                    </div>
                                    <div className="text-input">
                                        <input
                                            type="password"
                                            name="Password"
                                            onChange={OnChangeLogin}
                                            value={ComfirmUser.Password}
                                        />
                                    </div>
                                </div>
                            </div>

                            <button> Đăng nhập</button>
                            <Link to="/dang-ky">đăng ký</Link>
                            <div className="grounp-or-login">
                                <div className="item-width-login">
                                    <button type='button' onClick={sho_wWidth_Login} className="facebook">
                                        <i className="fab fa-facebook-f" />
                                    </button>
                                    <button type='button' onClick={sho_wWidth_Login} className="google">
                                        <i className="fab fa-google" />
                                    </button>
                                    <button type='button' onClick={sho_wWidth_Login} className="twitter">
                                        <i className="fab fa-twitter" />
                                    </button>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DangNhap;