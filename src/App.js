import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {

  const[allPokemons, setAllPokemons] = useState([])

  const clickHandler =()=>{
    console.log("clicked");
    fetch("https://pokeapi.co/api/v2/pokemon")
    .then(res=>{
      return res.json();
    })
    .then(res=>{
      console.log("the response looks good")
      console.log(res.results);
      setAllPokemons(res.results);
    })
    .catch(err=>{
      console.log(err);
    })
}
  return (
    <div className="App container">
      <h1>List of Pokemons</h1>
      <button onClick={clickHandler} className="btn btn-success">Fetch Pokemons!</button>
    <br></br>
    {
      allPokemons.map((pokemon, idx)=>{
        return  <div key={idx} className="card bg-dark text-white">
                  <img style={{width:"100px"}} className="card-img" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${idx +1}.png`} alt="Card image"/>
                  <div className="card-img-overlay">
                    <p className="card-text">{pokemon.name}</p>
                  </div>
              </div>
      })
    }
    </div>
  );
}

export default App;
