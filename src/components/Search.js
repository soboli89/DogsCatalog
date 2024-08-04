import React from "react";

export const Search = ({onChange}) => {
    const handleOnChange = (event)=>{
        onChange(event.target.value);
    }
    return(
        <div className="search" style={{textAlign: "center", margin:"20px", fontSize:"24px", color:"lightslategrey "}}>
            <h3> Search by Breed:</h3>
                <input type="text" placeholder="Type to search by breed..." defaultValue="" onChange={handleOnChange}/>
        </div>
    )
}

export default Search;