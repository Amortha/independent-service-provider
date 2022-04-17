import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
  const { id, img, name ,cost} = props.service;
  return (
    <div className="col card-style">
      <div className="h-100">
        <img src={img} className="card-img-top img-fluid" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <h5 className="card-title">Price:{cost}</h5>
          <p className="card-text">This is a Best Photograpy service provider Maker. I can any Photograpy short and excellent all photo Click our service..</p>
        </div>
        <Link to={`/details/${id}`}>
          <button className="btn-primary mb-3 px-3 py-2 rounded-2"><span className="fw-bold">Details</span></button>
        </Link>
      </div>
    </div>
  );
};

export default Service;