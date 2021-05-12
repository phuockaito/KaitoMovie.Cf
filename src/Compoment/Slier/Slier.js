import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import Slider from "react-slick";
import './Slier.css';
const Slier = () => {

  const GetListMovies = useSelector(state => state.GetListMove);

  var settings = {
    infinite: true,
    autoplay: false,
    lazyLoad: 'progressive',
    nextArrow: (
      <div>
        <i class="fa fa-angle-right right"></i>
      </div>
    ),
    prevArrow: (
      <div>
        <i class="fa fa-angle-left left"></i>
      </div>
    ),
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      }
    ]
  };
  //  lấy và lộc từng quốc gia trùng tên nhau
  var QuocGiaMEnu = ["trung quốc", "nhật bản", "mỹ", "hồng kông", "canada", "pháp", "đức"]
  //  Random từng quốc gia và lấy index => tên quốc gia
  var RandomSlider = Math.random() * QuocGiaMEnu.length;
  var indexMovie = Math.trunc(RandomSlider);
  var TenQuocSlider = QuocGiaMEnu[indexMovie]

  return (
    <>
      <div className="ground-slider">
        <h1>Phim Đề Cử</h1>
        <div className="list-slider" data-aos='fade-up'>
          <div className="slider">
            <Slider {...settings}>
              {
                GetListMovies.map(movie => (movie.QuocGiaMEnu.toLowerCase() === TenQuocSlider) && (

                  <div className="itel-slider" key={movie.id}>
                    <div className="image-slider">
                      <img src={movie.Poster} alt={movie.TenPhim} />
                      <span className="ngonngu-slider">{movie.NgonNgu}</span>
                      <Link
                        to={`/ChiTiet/${movie.id}/${movie.TenPhim}/${movie.TheLoaiMenu}/${movie.QuocGiaMEnu}`}
                      >
                        <p
                          className="name-slider"
                        >{movie.TenPhim}</p>
                      </Link>
                    </div>
                  </div>
                ))
              }

            </Slider>
          </div>
        </div>
      </div>
    </>
  )
}
export default Slier;