import React, {useState } from "react";
import "./DangKy.css";
import Boy from '../../../../Image/Boy.jpg';
import Girl from '../../../../Image/Girl.jpg';
import { useDispatch, useSelector } from "react-redux";
import { Link,Redirect } from "react-router-dom";
import Swal from "sweetalert2";
import * as Actives from "../../../../Actions/index";
const ID = JSON.parse(localStorage.getItem('ID'));
const DangKy = () => {
  //State
  const [CheckUserData, SetCheckUserData] = useState({
    NameError: "",
    AccuontError: "",
    PasswordError: "",
    ConfirmPasswordError: "",
    LengthPasswordError: "",
    AccountExists: ""
  });
  const [Register, setRegister] = useState({
    Name: "",
    Accuont: "",
    Password: "",
    ConfirmPassword: "",
    Sex: 'Nam'
  });
  //dispatch active
  const dispatch = useDispatch();
 
  const PostUserAPI = user => dispatch(Actives.PostUserAPIRequest(user));
  // State
  const GetListUserResult = useSelector(state => state.GetListUser);
  
  // Function
  const OnChangeRegister = (event) => {
    setRegister({ ...Register, [event.target.name]: event.target.value });
  };

  // 
  const ContinueRegister = {};
  GetListUserResult.forEach(user => {
    ContinueRegister[user.Accuont] = user.Accuont;
  });
  const validate = () => {
    let NameError = "", AccuontError = "", PasswordError = "", ConfirmPasswordError = "", LengthPasswordError = "", AccountExists = "";
    if (Register.Name.trim() === '' || Number(Register.Name.trim()) || Register.Name.trim().length > 25) {
      NameError = "vui lòng nhập đầy đủ họ tên";
    }
    if (Register.Accuont.trim() === '') {
      AccuontError = "vui lòng nhập tài khoản";
    }
    if (Register.Password.trim() === '') {
      PasswordError = "vui lòng nhập mật khẩu";
    }
    if (Register.Password.trim() !== Register.ConfirmPassword.trim()) {
      ConfirmPasswordError = "Mật Khẩu Không Trùng Khớp";
    }
    if (Register.Password.trim().length < 8) {
      LengthPasswordError = "Mật Khẩu quá ngắn";
    }
    if (ContinueRegister[Register.Accuont.trim()]) {
      AccountExists = 'Tài Khoản Tồn Tại';
    }

    if (NameError || AccuontError || PasswordError || ConfirmPasswordError || LengthPasswordError || AccountExists) {
      SetCheckUserData({ NameError, AccuontError, PasswordError, ConfirmPasswordError, LengthPasswordError, AccountExists })
      return false;
    }
    return true;
  }
  // 
  const onSubmitRegister = (event) => {


    event.preventDefault();
    const isValid = validate();
    if (isValid) {
      SetCheckUserData({ NameError: '', AccuontError: '', PasswordError: '', ConfirmPasswordError: '', LengthPasswordError: '', AccountExists: '' })
      const newRegister = {
        Name: Register.Name,
        Accuont: Register.Accuont,
        Password: Register.Password,
        Avatar: Register.Sex === 'Nam' ? Boy : Girl,
        Sex: Register.Sex
      }
      PostUserAPI(newRegister)
      setRegister({ Name: '', Accuont: '', Password: '', ConfirmPassword: '', Sex: 'Nam' });
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Đăng Ký Thành Công',
        showConfirmButton: false,
        timer: 1500
      })
    }
  }
  //useEffect
  if(ID)     return <Redirect to="/" />
  return (
    <div className="grounp-dang-ky">
      <div className="grounp-form">
        <div className="backgroun-from">
          <form onSubmit={onSubmitRegister} className="From-dang-ky">
            <h1>Đăng ký</h1>

            <div className="name-use">
              <p>Tên Của Bạn Là Gì ?</p>
              <div className="grounp-tab">
                <div className="icon-input">
                  <i className="far fa-user" />
                </div>
                <div className="text-input">
                  <input
                    type="text"
                    name="Name"
                    onChange={OnChangeRegister}
                    value={Register.Name}
                  />
                </div>
              </div>
              <span>{CheckUserData.NameError}</span>
            </div>
            <div className="name-use">
              <p>Giới Tính</p>
              <div className="grounp-tab">
                <div className="icon-input">
                  <i className="fas fa-restroom" />
                </div>
                <div className="grounp-sex">
                  <label  >
                    Nam
                    <input
                      type="radio"
                      name="Sex"
                      onChange={OnChangeRegister}
                      defaultChecked
                      value='Nam'
                    />
                    <span className="checkmark"></span>

                  </label>
                  <label  >
                    Nữ
                    <input
                      type="radio"
                      name="Sex"

                      value='Nữ'
                      onChange={OnChangeRegister}
                    />
                    <span className="checkmark"></span>

                  </label>
                </div>
              </div>
            </div>
            <div className="account-use">
              <p>Tài Khoản</p>
              <div className="grounp-tab">
                <div className="icon-input">
                  <i className="far fa-envelope" />
                </div>
                <div className="text-input">
                  <input
                    type="text"
                    name="Accuont"
                    onChange={OnChangeRegister}
                    value={Register.Accuont}
                  />
                </div>
              </div>
              <span>{CheckUserData.AccuontError ? CheckUserData.AccuontError : CheckUserData.AccountExists}</span>
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
                    value={Register.Password}
                    onChange={OnChangeRegister}
                  />
                </div>
              </div>
              <span>{(CheckUserData.PasswordError ? CheckUserData.PasswordError : CheckUserData.LengthPasswordError)}</span>
            </div>
            <div className="comfirm-use">
              <p>Xác Nhận Lại Lại Mật Khẩu</p>
              <div className="grounp-tab">
                <div className="icon-input">
                  <i className="fas fa-lock" />
                </div>
                <div className="text-input">
                  <input
                    type="password"
                    name="ConfirmPassword"
                    onChange={OnChangeRegister}
                    value={Register.ConfirmPassword}
                  />
                </div>
              </div>
              <span>{CheckUserData.LengthPasswordError ? CheckUserData.LengthPasswordError : CheckUserData.ConfirmPasswordError} </span>
            </div>
            <button type="submit" > Đăng ký</button>
            <Link to="/dang-nhap">đăng nhập</Link>
          </form>
        </div>
      </div>
    </div>
  );
};
export default DangKy;
