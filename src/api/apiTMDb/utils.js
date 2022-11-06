/* toma el objeto movie que viene de la API con los parámetros que 
se muestran a continuación y devuleve un objeto JSON normalizado
para ser guardado posteriormente en {results:[]} */
export const movieAJson= (movie)=>{
    const movieJson = {
        id: movie.id,
        poster_path: movie.poster_path,
        title: movie.title,
        release_date: movie.release_date,
        original_language: movie.original_language,
        vote_average: movie.vote_average,
        overview: movie.overview,
      };
      
      return movieJson;
}

/* recibe un objeto de tipo {results:[{propsmovie1, propsmovie2....}]} 
Elimina de la lista en results, la pelicula según el id
devuelve el objeto {results:[{con la peli eliminada}]}
*/
export const eliminarPorID = (id, listaPeliculas)=>{
  const _listaPeliculas = listaPeliculas.results;
  const peliculasRestantes = _listaPeliculas.filter(movie=>movie.id!=id); 
  return {results:peliculasRestantes};
}