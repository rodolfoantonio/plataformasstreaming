import logo from "./assets/logo.svg";
import "./App.css";

import Navbar from "./components/navbar/Navbar";
import { useSelector } from "react-redux";
import CardPrueba from "./components/cardmovie/CardPrueba";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App2() {
  const movies = useSelector((state) => state.movies.value);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="row">
          <Routes>
            <Route path="/catalogo" element={<div className="text-light">Este es el catalogo</div>}/>
            <Route path="/mispeliculas" element={<div className="text-light">Estas son mis peliculas</div>}/>
          </Routes>

          {movies.map((movie) => (
            //console.log(movie.original_title);
            <CardPrueba movie={movie} />
          ))}
        </div>
        {/* <header className="App-header"></header> */}
      </Router>
    </div>
  );
}

export default App2;
