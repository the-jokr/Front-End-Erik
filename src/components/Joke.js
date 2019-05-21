import React from "react";
import "../styles/JokeCard.css";

const Joke = props => {
    console.log(props)
  
    return (
    
    <div className="JokeCard">
      <div className="Setup">
        {props.joke.setup}
      </div>
      <div className="Punchline">
        {props.joke.punch_line}
      </div>
      
    </div>
    )};


export default Joke;

