export const movieAJson= (movie)=>{
    const movieJson = {
        id: movie.id,
        poster_path: movie.poster_path,
        title: movie.title,
        realease_date: movie.release_date,
        original_language: movie.original_language,
        vote_average: movie.vote_average,
        overview: movie.overview,
      };
      
      return movieJson;
}