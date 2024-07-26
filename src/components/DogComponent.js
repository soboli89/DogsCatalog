import React from "react";
import PropTypes from "prop-types";

function DogComponent({name, id, link, width, height}) {
    return 
        <div class="dog">
           <h3 class="dog__name">{name}</h3>
           <h5 class="dog__width">{width}</h5>
        </div>
}

DogComponent.propTypes = {
    id: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    name: PropTypes.array.isRequired
};
export default DogComponent;