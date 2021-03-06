import React from 'react';
import { useRouteMatch } from "react-router-dom";
import { useSelector } from "react-redux";
import './LinkMenu.css';
import { Link } from "react-router-dom";
import $ from "jquery";
const LinkMenu = () => {
    let keyMenu = useRouteMatch().params.keyword;
    const GetListMovies = useSelector(state => state.GetListMove);

    var MangCategory = GetListMovies.filter(movie => {
        if (movie.TheLoai.toLowerCase().indexOf(keyMenu.toLowerCase()) !== -1 || movie.QuocGia.toLowerCase().indexOf(keyMenu.toLowerCase()) !== -1 || movie.NSX.toLowerCase().indexOf(keyMenu.toLowerCase()) !== -1 || movie.NgonNgu.toLowerCase().indexOf(keyMenu.toLowerCase()) !== -1) {
            return MangCategory = movie;
        }

    });
    document.querySelector('title').innerHTML = keyMenu;
    return (
            <div className="main-link-menu">
                <div className="title-link-menu">
                    <h1>{keyMenu}</h1>
                </div>
                <div className="ground-movie">

                    {
                        MangCategory.map(movie => (

                            <div className="list-movie" key={movie.id} data-aos='fade-up'>
                                <div className="movies">
                                    <div className="item-movie">
                                        <div className="front-face">
                                            <div className="contents front">
                                                <img src={movie.Poster} alt={movie.TenPhim} />
                                                <p>{movie.NgonNgu} </p>
                                                <h3>{movie.TenPhim}</h3>
                                            </div>
                                        </div>
                                        <div className="back-face">
                                            <div className="contents back">
                                                <h3>{movie.TenPhim}</h3>
                                                <p>Đạo Diễn: <span>{movie.DaoDien}</span></p>
                                                <p>Diễn Viên: <span>{movie.DienVien}</span></p>
                                                <p>Quốc gia: <span>{movie.QuocGia}</span></p>
                                                <p>Điểm IMDB: <span>{movie.MDB}</span></p>
                                                <p>Ngày phát hành: <span>{movie.NSX}</span></p>
                                                <p>Thể loại: <span>{movie.TheLoai}</span></p>
                                                <p>Thời lượng: <span>{movie.ThoiGian} phút</span></p>
                                                <Link
                                                    onClick={() => { $("html ,body").animate({ scrollTop: 0 }, 800) }}
                                                    to={`/ChiTiet/${movie.id}/${movie.TenPhim}/${movie.TheLoaiMenu}/${movie.QuocGiaMEnu}`}
                                                >
                                                    xem phim</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
    )
}
export default LinkMenu;