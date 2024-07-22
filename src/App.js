
import './App.css';
import React, {Component} from 'react';
import axios from 'axios';
//import Itemcomponent from '.components/Itemcomponent';




class App extends Component {
    
    state ={
        isLoading: true,
        dogs: []
    };
    getDogs = async () => {
        const apiKey = process.env.REACT_APP_API_KEY;
        console.log(apiKey);
        const dogs = await axios.get(`https://api.thedogapi.com/v1/images/search?limit=20&api_key=${apiKey}`);
       // console.log(dogs.data);
       this.setState({dogs: dogs.data, isLoading: false});
    }
    
    componentDidMount() {
        this.getDogs();
}
   
    render(){
        const {isLoading} = this.state;
        return (
            <div>{isLoading ? "Loading..." : "The page is loaded"}</div>
        )
    }
}







/*
function App() {
   // fetch(`https://api.thedogapi.com/v1/images/search?limit=20&api_key=${API_KEY}`)
    //.then (res=>res.json())
    //.then((data) => {
    //console.log(data);
    });
    return ( 
        <div className = "App" >
            
        </div>
    );
}
*/
export default App;