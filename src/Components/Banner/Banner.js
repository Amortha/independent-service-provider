import React from 'react';
import './Banner.css'
import Fade from 'react-reveal/Fade';

const Banner = () => {
    return (
        <div>
            <div className="banner-container">
                <div className="banner-image">
                    <div className="title-container text-center">
                        <div className="title">

                            <div>
                                <Fade left>
                                    <h2 className="text-white">WELCOME TO MY BEST PHOTOGRAPY.</h2>
                                    <h3 className="text-primary">CHARLOTTE McCOY</h3>
                                </Fade>
                            </div>
                            <h5 className="text-primary">This is a Best Photograpy service provider Maker. I can any Photograpy short and excellent all photo Click our service. <br /> and excellent all photo Click our service.</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;