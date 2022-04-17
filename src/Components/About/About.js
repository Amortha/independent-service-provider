
import React from 'react';
import './About.css'
import img1 from '../../images/bdJobsProfilePic.jpg'


const About = () => {
    return (
        <div className="container my-3 about-style">
                        <h1 className="my-5 fw-bold"><span className="text-success">About </span> Us</h1>
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4">
                                        <img src={img1} className="img-fluid rounded-start" alt="..." />
                                        <h3>Devolopar: Amortho kumar shill</h3>
                                       
                                        
                            </div>
                            <div className="col-md-8">
                            <div className="card-body">
                                <h1 className="card-title fw-bold"></h1>
                                <p className="card-text">It is indeed a great pleasure for me to introduce our brand new state – of – the -art technology hospital in the region of Chittagong. Nowadays, if anyone needs good treatment, they need to look forward to Dhaka or Abroad. Because good and well facilitated hospitals are not available in the port city of Chittagong.
                                                            So, we needed to decentralize and step forward to establish well facilitate and modern hospital in Chittagong city. Moreover, we felt that our integrated Township of Chittagong city, the second capital and largest sea-port of Bangladesh, would be incomplete without a good health care facility like  1994.</p>
                            </div>
                            </div>
                        </div>
            </div>
                    
        </div>
    );
};

export default About;