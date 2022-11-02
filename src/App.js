<<<<<<< HEAD
import logo from "./assets/logo.svg";
import "./App.css";

import Navbar from "./components/navbar/Navbar";
import { useSelector } from "react-redux";
import CardPrueba from "./components/card/CardPrueba";

function App() {
  const movies = useSelector((state) => state.movies.value);

  return (
    <div className="App">
        <Navbar />
      <div className="row">
        {movies.map((movie) => (
          //console.log(movie.original_title);
          <CardPrueba movie={movie} />
        ))}
      </div>
      <header className="App-header">
      </header>
    </div>
=======

import './App.css';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      
    </div>
 
>>>>>>> 464e39264e7d1dd21713c8a01364bd886b75a9aa
  );
}

export default App;
