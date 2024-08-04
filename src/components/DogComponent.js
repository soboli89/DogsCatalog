import React from "react";
import PropTypes from "prop-types";
import "./Dog.css";
import { Link } from "react-router-dom";



function DogComponent({name, id, link, width, height, breeds, bred_for, temperament, weightI, weightM}) {
    return (
        //console.log("name="+name),
        <Link to= {`/dog/${id}`} state={
            {weightI: weightI,
             weightM: weightM,
             temperament:temperament,
             bred_for:bred_for,
             breeds:breeds,
             name: name,
             link: link,
             width: width,
            height:height }}>
        
            <div className="dog">
                <img src={link} alt={name} title={name}/>
                <div className="dog__column">
                    <h3 className="dog__name">{name}</h3>
                    <h5 className="dog__width">{"width: "+width}</h5>
                    <h5 className="height">{"height: "+height}</h5>
                </div>
            </div>
        </Link>    
    )
}

DogComponent.propTypes = {
    id: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    width: PropTypes.number,
    height: PropTypes.number,
    bred_for: PropTypes.string
    //name: PropTypes.array.isRequired
};
export default DogComponent;