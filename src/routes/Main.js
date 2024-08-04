
import './Main.css';
import React, {Component} from 'react';
import axios from 'axios';
import DogComponent from '../components/DogComponent';
import Search from '../components/Search';


class Main extends Component {
    
    state ={
        isLoading: true,
        dogs: [],       
    };
   //const [breedName, setName] = useState('');

    handleOnChange = (breedName) =>{
       this.setState({breedName: breedName});
   };
  
    getDogs = async () => {
        const apiKey = process.env.REACT_APP_API_KEY;
        const dogs = await axios.get(`https://api.thedogapi.com/v1/images/search?limit=15&api_key=${apiKey}`);
        this.setState({dogs:dogs.data, isLoading: false});
    };
   
    componentDidMount() {
        this.getDogs();
    };
   
    render(){
        const {isLoading, dogs, breedName} = this.state;
        
        return (
            <section className="container">
                <Search onChange={this.handleOnChange}/>
                {isLoading
                ? ( <div className ="loader">
                    <span className="loader__text"> Loading...</span>
                </div>
                )  : (
                    <div className="dogs">
                {dogs.filter((dog) => {
                    if (dog.breeds.length > 0){
                        if (breedName === "" || breedName === undefined) {
                            return dog
                        } else if (dog.breeds[0].name.toLowerCase().includes(breedName.toLowerCase())) { 
                            return dog } 
                    } else { return dog }
                }).map((dog) => (
                            <DogComponent
                                key={dog.id}
                                id={dog.id}
                                link={dog.url}
                                width={dog.width}
                                height={dog.height}
                                name = {(dog.breeds.length > 0 ? dog.breeds[0].name : "unknown")}
                                bred_for={(dog.breeds.length > 0 ? dog.breeds[0].bred_for : "unknown")}
                                temperament={(dog.breeds.length > 0 ? dog.breeds[0].temperament : "unknown")}
                                weightI={(dog.breeds.length  > 0 ? dog.breeds[0].weight.imperial : "unknown")}
                                weightM={(dog.breeds.length > 0 ? dog.breeds[0].weight.metric : "unknown")}
                            />
                       
                        ))}
                 </div>
            )}
            </section>
        )
    }
}


export default Main;