import React, { Component } from 'react'

export default class Itemcomponent extends Component() {
    constructor(props) {
        super(props);
        this.state ={
            error: null,
            isLoaded: false,
            items:[]
        };
    }


componentDidMount() {
    fetch(" https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_yGbCaEEMLItNtolswUHJFydue7nMyXBbneAm3XfQDvasjTaRnLxuUTqEi72oh6Du")
    .then (res=>res.json())
    .then (
        (result) =>{
            this.setState({
                isLoaded: true,
                items: result.breeds
            });
        },
        (error)=>{
            this.setState({
                isLoaded: true,
                error
            });
        }
    )
}

render() {
 const{ error, isLoaded, items} = this.state;
 if (error){
    return <p>Error {error.message}</p>
 } else if (!isLoaded){
    return <p>Loading</p>
 } else{
    return (
        <ul>
            {items.map(item =>(
                <li key={item.name}>
                    {item.name}
                </li>))}
        </ul>
    )
 }
}
}