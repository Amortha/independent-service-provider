
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
                                        <h4>Name: Amortho kumar shill</h4>
                                        <h5>Learner of programing hero course and National university student B.B.S</h5>
                                        <h3></h3>
                                       
                                        
                            </div>
                            <div className="col-md-8">
                            <div className="card-body">
                                <h1 className="card-title fw-bold"></h1>
                                <h2>My Dream</h2>
                                <h5 className="card-text">Hello My Name is Amortha kumar shill. I have good dream for programing related work do. I can my life setup with web Development and computer sience related work todo its my big dreams. My favorite work programing and learn its best work i mena. I can my life a future all time this work with in my everythings.I want to go in four to 5-4 Months to fulfill Drem</h5>
                            </div>
                            </div>
                        </div>
            </div>
                    
        </div>
    );
};

export default About;