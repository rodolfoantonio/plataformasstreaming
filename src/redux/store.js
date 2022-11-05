import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from './moviesSlice';
import movieReducer from './movieSlice';
import alquiladasReducer from './alquiladasSlice';

export default configureStore(
  {
    reducer: {
        movies: moviesReducer,
        movie: movieReducer,
        alquiladas: alquiladasReducer,
    },
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
