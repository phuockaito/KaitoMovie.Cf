import * as React from 'react';
import './NavMenu.css';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import $ from "jquery";

const NavMenu = () => {
    const CloseMenu = () => {
        $('.menu-two>li>a').on('click', () => {
            $('.Khung-Menu').removeClass('open-menu')
            $('.navbarToggler').removeClass('active');
        })
    }

    //
    const GetListMovies = useSelector(state => state.GetListMove);
    //
    var TheLoai = [], NamMenu = [], QuocGiaMEnu = [], NgonNgu = [];
    if (GetListMovies.length > 0) {
        for (let index = 0; index < GetListMovies.length; index++) {
            const element = GetListMovies[index];
            TheLoai.push(element.TheLoaiMenu.trim().toLowerCase());
            NamMenu.push(element.NamMenu.trim().toLowerCase());
            QuocGiaMEnu.push(element.QuocGiaMEnu.trim().toLowerCase());
            NgonNgu.push(element.NgonNgu.trim().toLowerCase());
        }
        TheLoai = TheLoai.reduce((acc, curr) => {
            return acc.includes(curr) ? acc : [...acc, curr];
        }, []);
        NamMenu = NamMenu.reduce((acc, curr) => {
            return acc.includes(curr) ? acc : [...acc, curr];
        }, []);
        QuocGiaMEnu = QuocGiaMEnu.reduce((acc, curr) => {
            return acc.includes(curr) ? acc : [...acc, curr];
        }, []);
        NgonNgu = NgonNgu.reduce((acc, curr) => {
            return acc.includes(curr) ? acc : [...acc, curr];
        }, []);
    }
    return (
        <>
        
            <div className="ground-menu">
                <div className="top-social-info">
                    <a href="https://www.facebook.com/PhuocKaito1410" target="_blank"><i className="fab fa-facebook-f"></i></a>
                    <a href="http://kaitoshop.cf/" target="_blank"><i className="fas fa-external-link-alt"></i></a>
                    <a href="https://www.youtube.com/channel/UC-AkfAZivVZFBQTQPh7hx2w" target="_blank"><i className="fab fa-youtube"></i></a>
                </div>
                <div className="classy-navbar-toggler">
                    <span className="navbarToggler"><span /><span /><span /></span>
                </div>

                <div className="Khung-Menu">


                    <div className="classycloseIcon">
                        <div className="cross-wrap">
                            <span className="top"></span>
                            <span className="bottom"></span>
                        </div>
                    </div>
                    <nav>

                        <ul className="menu-one">
                            <li>

                                <Link className='active' to='/'>Trang chủ</Link>
                            </li>
                            <li>
                                <a  className="btn-toggle-menu">thể loại <span className="fas fa-caret-down" /></a>
                                <ul className="menu-two">
                                    {
                                        TheLoai.sort().map((theloai, index) => (
                                            <li key={index}>
                                                <Link to={`/Link-Menu/${theloai}`} className="demo" onClick={CloseMenu}>{theloai}</Link>
                                            </li>
                                        ))
                                    }
                                </ul>

                            </li>
                            <li><a  className="btn-toggle-menu">quốc gia <span className="fas fa-caret-down" /></a>

                                <ul className="menu-two">
                                    {
                                        QuocGiaMEnu.sort().map((quocgia, index) => (
                                            <li key={index}>
                                                <Link to={`/Link-Menu/${quocgia}`} onClick={CloseMenu}>{quocgia}</Link>
                                            </li>
                                        ))
                                    }

                                </ul>

                            </li>
                            <li><a  className="btn-toggle-menu">phim lẻ <span className="fas fa-caret-down" /></a>
                                <ul className="menu-two">
                                    {
                                        NamMenu.sort().map((nam, index) => (
                                            <li key={index}>
                                                <Link to={`/Link-Menu/${nam}`} onClick={CloseMenu}>Phim lẻ {nam}</Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </li>
                            <li><a  className="btn-toggle-menu">ngôn ngữ <span className="fas fa-caret-down" /></a>

                                <ul className="menu-two">
                                    {
                                        NgonNgu.sort().map((ngonngu, index) => (
                                            <li key={index}>
                                                <Link to={`/Link-Menu/${ngonngu}`} onClick={CloseMenu}>{ngonngu}</Link>
                                            </li>
                                        ))
                                    }

                                </ul>

                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}
export default NavMenu;