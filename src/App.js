
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
        const dogs = await axios.get(`https://api.thedogapi.com/v1/images/search?limit=30&api_key=${apiKey}`);
        this.setState({dogs: dogs.data, isLoading: false});
    }
    
    componentDidMount() {
        this.getDogs();
}
   
    render(){
        const {isLoading, dogs} = this.state;
        return (
            <section className="container">
                {isLoading
                ? ( <div className ="loader">
                    <span className="loader__text"> Loading...</span>
                </div>
                )  : (
                    <div className="dogs">
                {dogs.map((dog) => (
                           // console.log(dog.id),
                            <DogComponent
                                key={dog.id}
                                id={dog.id}
                                link={dog.url}
                                width={dog.width}
                                height={dog.height}
                                name = {(dog.breeds.length > 0 ? dog.breeds[0].name : "unknown")}
                            />
                       
                        ))}
                 </div>
            )}
            </section>
        )
    }
}







export default App;