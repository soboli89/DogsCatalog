
import './App.css';
import React, {Component} from 'react';
import axios from 'axios';
import DogComponent from './components/DogComponent';
import Search from './components/Search';
//import { useState } from 'react';


class App extends Component {
    
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
        const dogs = await axios.get(`https://api.thedogapi.com/v1/images/search?limit=10&api_key=${apiKey}`);
        
        this.setState({dogs:dogs.data, isLoading: false});
    };
    /*
    Filter = (name) => {
        filterDogs(dogs.filter(dog => dog.breeds.toLowerCase().includes(name)))
    };
   /* if( this.name ==="") 
        { filteredDogs=dogs;} else
        {
        filteredDogs = (name) =>{this.dogs.filter(dog=>dog.breeds.toLowerCase().includes(name))};
};*/

    componentDidMount() {
        this.getDogs();
    };
   
    render(){
        const {isLoading, dogs, search, setSearch, breedName} = this.state;
        
        return (
            console.log(dogs),
            console.log("search="+breedName),
            <section className="container">
                <Search /*search={search} setSearch={setSearch}*/ onChange={this.handleOnChange}/>
                {isLoading
                ? ( <div className ="loader">
                    <span className="loader__text"> Loading...</span>
                </div>
                )  : (
                    <div className="dogs">
                {dogs.filter((dog) => {
                    //console.log(dog.breeds[0].name)
                    if (dog.breeds.length > 0){
                        if (breedName === "" || breedName==undefined) {
                            return dog
                        } else if (dog.breeds[0].name.toLowerCase().includes(breedName.toLowerCase())){
                        return dog
                    }
                    } else {

                        }
                }).map((dog) => (
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





/*


function App(){
  const[loading, isLoading] = useState(false);
  const [dogs, setDogs] = useState([]);
  const [searchName, setSearchName] =useState("");  
  
  
  useEffect (()=> {
    const apiKey = process.env.REACT_APP_API_KEY;
    const getDogs = async () => {
            isLoading(true);
            const response = await axios.get(`https://api.thedogapi.com/v1/images/search?limit=30&api_key=${apiKey}`);
            setDogs (response.data);
            isLoading(false);    
    };
    getDogs();
  }, []);

return (
            console.log(dogs),
            <section className="container">
                {loading
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

*/



export default App;