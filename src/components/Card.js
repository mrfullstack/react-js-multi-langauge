import React from 'react';
import './Card.css'

const Card = ({name,occupation}) => {
    const image = "https://www.w3schools.com/howto/img_avatar.png"
    return (
        <div className="card">
            <img src={image} alt="Avatar" style={{width:'100%'}} />
            <div className="main">
                <h4><b>{name}</b></h4>
                <p>{occupation}</p>
            </div>
        </div>
    );
}

export default Card;