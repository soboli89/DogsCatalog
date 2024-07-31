import React from "react";
import { useState } from "react";

/*

function Search(){
    const[search, setSearch] = useState('');
    const handleOnChange = (event)=>{
        setSearch(event.target.value);
    }
    return(
        <div style={{textAlign: "center", margin:"20px"}}>
            <h3> Search Breed:</h3>
                <input type="text" placeholder="Type to search by breed..." value={search} onChange={handleOnChange}/>
        </div>
    )
}
*/





export const Search = ({onChange}) => {
    const handleOnChange = (event)=>{
        onChange(event.target.value);
    }
    return(
        <div style={{textAlign: "center", margin:"20px"}}>
            <h3> Search Breed:</h3>
                <input type="text" placeholder="Type to search by breed..." defaultValue={""} onChange={handleOnChange}/>
        </div>
    )
}

export default Search;