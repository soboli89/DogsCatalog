import React from "react";
import "./Detail.css";
import { useLocation } from "react-router-dom";


function Detail() {
    const location = useLocation();
    const { name, link, width, height, breeds, bred_for, temperament, weightI, weightM } = location.state;
  
    return (
        <div className="dog__container">
            <h3 className="dog__detail__name">{name}</h3>
            <img src={link} alt={name} title={name}/>
            <div className="dog__details__column">
                <h5 className="dog__details">{"width: "+width}</h5>
                <h5 className="dog__details">{"height: "+height}</h5>
                <h5 className="dog__details">{"Bred for: "+bred_for}</h5>
                <h5 className="dog__details">{"Temperament: "+temperament}</h5>
                <h5 className="dog__details">{"Weight imperial: "+weightI}</h5>
                <h5 className="dog__details">{"Weight metric: "+weightM}</h5>
            </div>
    </div>
    );
  }

  
export default Detail;