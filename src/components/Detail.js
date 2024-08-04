import React from "react";
import { useLocation } from "react-router-dom";

/*
class Detail extends React.Component {
    componentDidMount(){
        const location = useLocation();
        const { name, link } = location.state;
    }
    render(){
        return (
            <div>
              <h1>Profile</h1>
              <p>User ID: {name}</p>
              <p>User Name: {link}</p>
            </div>
          );
    }
}
*/
function Detail() {
    const location = useLocation();
    const { name, link, width, height, breeds, bred_for, temperament, weightI, weightM } = location.state;
  
    return (
        console.log(breeds),
        <div className="dog">
        <img src={link} alt={name} title={name}/>
        <div className="dog__column">
            <h3 className="dog__name">{name}</h3>
            <h5 className="dog__width">{"width: "+width}</h5>
            <h5 className="height">{"Bred for: "+bred_for}</h5>
            <h5 className="height">{"Temperament: "+temperament}</h5>
            <h5 className="height">{"Weight imperial: "+weightI}</h5>
            <h5 className="height">{"Weight metric: "+weightM}</h5>
           
        </div>
    </div>
    );
  }
/*
function Detail(props){
    console.log("name="+JSON.stringify(props));
    return 
    
   (  <span>HELOOOOOOOO</span>)
    
}
    
    */
  
export default Detail;