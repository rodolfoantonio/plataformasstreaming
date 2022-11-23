import {
  URL_BASE,
  ENDPOINT_LOGIN,
  ENDPOINT_LOGOUT,
  ENDPOINT_PELICULA_ALQUILADA,
  ENDPOINT_PELICULA_CATALOGO,
  ENDPOINT_REGISTRO,
  ENDPOINT_ROLE,
} from "./apiConfig";

import axios from "axios";

/**
 * Consulta el endpoint de registro. Agrega un usuario a la tabla Usuario de la base de datos
 * @param {string} email
 * @param {string} password
 * @param {string} nombre
 * @param {string} role Debe tomar los valores ADMIN y USER
 */
export function registro(email, password, nombre, role) {
  axios
    .post(URL_BASE + ENDPOINT_REGISTRO, {
      email: email,
      password: password,
      nombre: nombre,
      role: role,
    })
    .then((res) => {
      console.log(res.data);
      return res.data;
    });
}

export function login(email, password) {
  axios
    .post(
      URL_BASE + ENDPOINT_LOGIN,
      {
        email: email,
        password: password,
      },
      { withCredentials: true }
    )
    .then((res) => {
      console.log(res.data);
      return res.data;
    });
}

export function obtenerPeliculasCatalogo() {
  axios
    .get(URL_BASE + ENDPOINT_PELICULA_CATALOGO, {
      withCredentials: true,
    })
    .then((res) => {
      console.log(res.data);
      return res.data;
    });
}

export function agregarPeliculaCatalogo(
  idPelicula,
  poster_path,
  title,
  release_date,
  original_language,
  vote_average,
  overview
) {
  axios
    .post(
      URL_BASE + ENDPOINT_PELICULA_CATALOGO,
      {
        idPelicula: idPelicula,
        poster_path: poster_path,
        title: title,
        release_date: release_date,
        original_language: original_language,
        vote_average: vote_average,
        overview: overview,
      },
      {
        withCredentials: true,
      }
    )
    .then((res) => {
      console.log(res.data);
      return res.data;
    });
}

export function borrarPeliculaCatalogo(idPelicula) {
  axios
    .delete(
      URL_BASE + ENDPOINT_PELICULA_CATALOGO,
      {
        idPelicula: idPelicula,
      },
      {
        withCredentials: true,
      }
    )
    .then((res) => {
      console.log(res.data);
      return res.data;
    });
}

export function obtenerPeliculasAlquiladas() {
  axios
    .get(URL_BASE + ENDPOINT_PELICULA_ALQUILADA, {
      withCredentials: true,
    })
    .then((res) => {
      console.log(res.data);
      return res.data;
    });
}

export function agregarPeliculaAlquilada(idPelicula) {
  axios
    .post(
      URL_BASE + ENDPOINT_PELICULA_ALQUILADA,
      {
        idPelicula: idPelicula,
      },
      {
        withCredentials: true,
      }
    )
    .then((res) => {
      console.log(res.data);
      return res.data;
    });
}

export function borrarPeliculaAlquilada(idPelicula) {
  axios
    .delete(
      URL_BASE + ENDPOINT_PELICULA_ALQUILADA,
      {
        idPelicula: idPelicula,
      },
      {
        withCredentials: true,
      }
    )
    .then((res) => {
      console.log(res.data);
      return res.data;
    });
}

export function role() {
  axios.get(URL_BASE + ENDPOINT_ROLE, { withCredentials: true }).then((res) => {
    console.log(res.data);
    return res.data;
  });
}

export function logout() {
  axios
    .get(URL_BASE + ENDPOINT_LOGOUT, { withCredentials: true })
    .then((res) => {
      console.log(res.data);
      return res.data;
    });
}