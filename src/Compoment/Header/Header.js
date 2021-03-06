import React, { useEffect } from 'react';
import './Header.css';
import Search from './Search/Search';
import { Link } from "react-router-dom";
import * as ActionType from '../../Actions/index';
import { useDispatch, useSelector } from "react-redux";
import logo from '../../Image/logo.png';
const ID = JSON.parse(localStorage.getItem('ID'));
const Header = () => {

    //dispatch
    const dispatch = useDispatch();
    const GetListUser = () => dispatch(ActionType.GetListUserAPIResult());
    const GetIdOneUser = (ID) => dispatch(ActionType.GetOneUserApiRequest(ID))
    // State
    const GetIdOneUserResult = useSelector(state => state.GetIdUser);
    // function
    useEffect(() => {
        GetListUser();
        if (ID) {
            GetIdOneUser(ID)
        }
    }, []);
    // function
    const LogOut = () => {
        localStorage.removeItem('ID');
        setTimeout("location.reload(true)", 1);
    }


    const ShowUser = (ID) => {
        if (ID) {

            return (
                <div className="login-user-success">
                    <div className="grounp-user-success">
                        <div className="image-user">
                            <img src={GetIdOneUserResult.Avatar} alt="" />
                        </div>
                        <div className="grounp-information-user">
                            <ul className='menu-user'>
                                <li><p>{GetIdOneUserResult.Name}</p> <span className="fas fa-caret-down" />
                                    <ul className="menu-information">
                                        <li> <Link to="/edit-user" >Thông tin</Link></li>
                                        <li> <button onClick={LogOut}>Đăng Xuất</button></li>
                                    </ul>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div className="Login-out">
                    <Link
                        to='/dang-nhap'
                    >
                        Đăng Nhập
                </Link>
                    <Link
                        to='/dang-ky'
                    >
                        Đăng Ký
                </Link>
                </div>
            )
        }
    }
    return (
        <>
            <header>
                <Link to='/'>
                    <img src={logo}  alt="logo"/>
                </Link>
                <Search />
                <div className="Login-out">
                    {ShowUser(ID)}
                </div>
            </header>
        </>
    )
}
export default Header;