import React, { useEffect, useState } from 'react';
import { useRouteMatch } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import * as Actives from '../../Actions/index';
import $ from 'jquery';
import YouTube from "react-youtube";
import { Link } from "react-router-dom";
import './ChiTiet.css';
import Comment from './Comment/Comment';
const ChiTiet = () => {

    let { Name } = useRouteMatch().params;
    let { ID } = useRouteMatch().params;
    const GetListMovies = useSelector(state => state.GetListMove);
    const GetIDMovie = useSelector(state => state.GetIDMovie);
    let { TheLoai } = useRouteMatch().params;
    let { QuocGia } = useRouteMatch().params;
    //State
    const [loadDataPhimDeXuat, StateloadDataPhimDeXuat] = useState(16);
    const [LoaddataGoiY, StateLoaddataGoiY] = useState(9);
    const [PlayMoves, StatePlayMoves] = useState(false)
    const [NoiDungPhim, SetNoiDungPhim] = useState(true)
    // dispatchEvent
    const dispatchEvent = useDispatch();
    const GetCommentAPIRequest = () => dispatchEvent(Actives.GetCommentAPIRequest());

    const GetIDMoviesAPI = ID => dispatchEvent(Actives.GetIDMovieRequest(ID))
    // PhimDeXuat
    var PhimDeXuat = GetListMovies.filter(listmovie => {
        if (listmovie.TheLoai.toLowerCase().indexOf(TheLoai.toLowerCase()) !== -1) {
            PhimDeXuat = listmovie;
        }
        return PhimDeXuat;

    });

    const indexPhimDeXuat = PhimDeXuat.findIndex(listmovie => listmovie.id === ID);
    if (indexPhimDeXuat !== -1) {
        PhimDeXuat.splice(indexPhimDeXuat, 1);
    }
    //PhimGoiY
    var PhimGoiY = GetListMovies.filter(listmovie => {
        return (
            listmovie.QuocGia.toLowerCase().indexOf(QuocGia.toLowerCase()) !== -1
        );
    });
    const indexPhimGoiY = PhimGoiY.findIndex(listmovie => listmovie.id === ID);
    if (indexPhimGoiY !== -1) {
        PhimGoiY.splice(indexPhimGoiY, 1);
    }
    // function
    const closeYTB = () => {
        StatePlayMoves(false);
        $('body').removeClass('active');
    }
    const opencloseYTB = () => {
        StatePlayMoves(true);
        $('body').addClass('active');
        $("html ,body").animate({ scrollTop: 0 }, 800)
    }
    // useEffect
    useEffect(() => {
        GetIDMoviesAPI(ID);
        GetCommentAPIRequest();
        document.querySelector('title').innerHTML = Name;
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [ID])
    return (
        <>
            <div className="ground-chi-tiet">
                <div className="ground-chitiet">

                    <div className="khung-chi-tiet">
                        {
                            [GetIDMovie].map(movie => (
                                < div key={ID}>
                                    <div className="chi-tiet" >
                                        <div className="image-chi-tiet">
                                            <img src={movie.Poster} alt={movie.TenPhim} />
                                            <button onClick={opencloseYTB} className="active-body">Xem Phim</button>
                                        </div>
                                        <div className="information-chi-tiet">
                                            <h1>{movie.TenPhim}</h1>
                                            <p>Đạo diễn: <span>{movie.DaoDien}</span> </p>
                                            <p>Diễn Viên: <span>{movie.DienVien}</span> </p>
                                            <p> Quốc gia: <span>{movie.QuocGia}</span> </p>
                                            <p>Điểm IMDB: <span>{movie.MDB} Votes</span> </p>
                                            <p>Ngày phát hành: <span>{movie.NSX}</span> </p>
                                            <p>Thể loại: <span>{movie.TheLoai}</span> </p>
                                            <p>Thời lượng: <span>{movie.ThoiGian} Phút</span> </p>
                                        </div>
                                        {
                                            PlayMoves && (
                                                <div className="grounp-Open-YouTube">
                                                    <div className="Open-YouTube">
                                                        <button
                                                            className="Close-youtube"
                                                            onClick={closeYTB}
                                                        ><i className="fas fa-times"></i></button>
                                                        <YouTube
                                                            videoId={movie.LinkPhim}
                                                            className="grounp-youtube"
                                                        >
                                                        </YouTube>
                                                    </div>
                                                </div>
                                            )}
                                    </div>

                                    <div className="noi-dung">
                                        <h1>Nội dung phim</h1>
                                        {
                                            NoiDungPhim && (<p>{movie.NoiDung}</p>)
                                        }
                                        <button onClick={() => { SetNoiDungPhim(NoiDungPhim === true ? !true : !false); }}>{NoiDungPhim === true ? 'ẩn đi' : 'xem nội dung'}</button>
                                    </div>
                                </div>
                            ))}
                        <div className="grounp-comment">
                            <Comment />
                        </div>
                        <div className="grounp-phim-de-xuat">
                            <h1>Phim đề xuất</h1>
                            <div className="phim-de-xuat">
                                {
                                    PhimDeXuat.slice(0, loadDataPhimDeXuat).map(movie => (

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
                                                                onClick={() => {
                                                                    (StateloadDataPhimDeXuat((loadDataPhimDeXuat - loadDataPhimDeXuat) + 8));
                                                                    StateLoaddataGoiY((LoaddataGoiY - LoaddataGoiY) + 5);
                                                                }}
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
                            {
                                loadDataPhimDeXuat < PhimDeXuat.length && (<button onClick={() => { (StateloadDataPhimDeXuat(loadDataPhimDeXuat + 8)) }}>Xem Thêm</button>)
                            }

                        </div>

                    </div>

                    <div className="phim-goi-y" >
                        <h1>Phim gợi ý</h1>
                        <div className="grounp-phim-goi-y">
                            <div className="scroll-phim-goi-y">
                                {
                                    PhimGoiY.slice(0, LoaddataGoiY).map(movie => (
                                        <div className="item-phim-goi-y" key={movie.id}>
                                            <img src={movie.Poster} alt={movie.TenPhim} />
                                            <p>{movie.NgonNgu}</p>
                                            <Link
                                                to={`/ChiTiet/${movie.id}/${movie.TenPhim}/${movie.TheLoaiMenu}/${movie.QuocGiaMEnu}`}
                                                onClick={() => { StateLoaddataGoiY((LoaddataGoiY - LoaddataGoiY) + 5); (StateloadDataPhimDeXuat((loadDataPhimDeXuat - loadDataPhimDeXuat) + 8)) }}
                                            >
                                                <h1
                                                    onClick={() => { $("html ,body").animate({ scrollTop: 0 }, 800) }}
                                                >{movie.TenPhim}</h1>
                                            </Link>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        {
                            LoaddataGoiY < PhimGoiY.length && (<button onClick={() => StateLoaddataGoiY(LoaddataGoiY + 2)}> xem thêm</button>)
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
export default ChiTiet;