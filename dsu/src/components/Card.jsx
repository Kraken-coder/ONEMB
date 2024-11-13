import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

function Card({ title, description, image, link }) {
  return (
    <Link to={link} className="card-link">
      <div className="card">
        {image && <img src={image} alt={title} className="card-image" />}
        <div className="card-body">
          <h3 className="card-title">{title}</h3>
          <p className="card-description">{description}</p>
        </div>
      </div>
    </Link>
  );
}

export default Card;
