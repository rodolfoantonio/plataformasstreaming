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
 
  );
}

export default App;
