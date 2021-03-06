import React, { useEffect } from 'react';
import './Banner.css';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import { useSelector, useDispatch } from 'react-redux';
import *as Actives from '../../Actions/index';
const AutoplaySlider = withAutoplay(AwesomeSlider);
const Banner = () => {
    const dispatch = useDispatch();
    const GetBannerAPI = () => dispatch(Actives.GetAPIAllBannerRequest());
    const GetListBanner = useSelector(state => state.GetListBanner);
    // function
    useEffect(() => {
        GetBannerAPI();
    }, [])
    return (
        <>
            <div className="ground-banner">

                <div className="banner">

                    <div className="item-banner">
                        <AutoplaySlider
                            play={true}
                            interval={4000}
                        >
                            {
                                GetListBanner.map(banner => (
                                    <div data-aos='fade-up' className="image-banner" data-src={banner.ImagePoseter} key={banner.ID}>
                                        <div className="information-banner">
                                            <p className="name-banner">{banner.NameMovie}</p>
                                            <span className="date-banner">{banner.Date}</span>
                                        </div>
                                    </div>
                                ))
                            }
                        </AutoplaySlider>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Banner;