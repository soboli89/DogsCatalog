
import './App.css';
import React, {Component} from 'react';
import axios from 'axios';
//import Itemcomponent from '.components/Itemcomponent';
import DogComponent from './components/DogComponent';




class App extends Component {
    
    state ={
        isLoading: true,
        dogs: []
    };
    getDogs = async () => {
        const apiKey = process.env.REACT_APP_API_KEY;
        console.log(apiKey);
        const dogs = await axios.get(`https://api.thedogapi.com/v1/images/search?limit=30&api_key=${apiKey}`);
        console.log(dogs.data);
        this.setState({dogs: dogs.data, isLoading: false});
    }
    
    componentDidMount() {
        this.getDogs();
}
   
    render(){
        const {isLoading, dogs} = this.state;
        return (
            <section class="container">
                {isLoading
                ? ( <div class ="loader">
                    <span class="loader__text"> "Loading..."</span>
                </div>) 
                : dogs.map(dog => {
                    console.log("breed=", dog.breeds)
                        return (
                        <div class="dogs"><DogComponent
                            key={dog.id}
                            id={dog.id}
                            link={dog.url}
                            width={dog.width}
                            height={dog.height}
                            name = {(dog.breeds.length>0 ? dog.breeds[0].name : "unknown")}
                        />
                        </div>
                        );
            })}</section>
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