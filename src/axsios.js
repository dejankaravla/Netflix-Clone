import axsios from "axios";

// base url to make request to the movie database

const instance = axsios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
