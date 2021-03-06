import * as React from 'react';
import { useSelector } from 'react-redux';
import './Movies.css';
import { Link } from 'react-router-dom';
const Movies = () => {
    const GetListMovies = useSelector(state => state.GetListMove);
    return (
        <>
            <div className="dot-gorunp-movie">
                <div className="title-ground-movie">
                    <h1>Phim Mới Cập Nhật</h1>
                </div>
                <div className="ground-movie">
               
                    {
                        GetListMovies.map(movie => (

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
        </>
    )
}
export default Movies;