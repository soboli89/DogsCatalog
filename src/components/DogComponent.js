import React from "react";
import PropTypes from "prop-types";
import "./Dog.css";

function DogComponent({name, id, link, width, height}) {
    return (
        <div className="dog">
            <img src={link} alt={name} title={name}/>
            <div className="dog__column">
               <h3 className="dog__name">{name}</h3>
               <h5 className="dog__width">{"width: "+width}</h5>
               <h5 className="height">{"height: "+height}</h5>
           </div>
        </div>
    )
}

DogComponent.propTypes = {
    id: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    width: PropTypes.number,
    height: PropTypes.number,
    //name: PropTypes.array.isRequired
};
export default DogComponent;