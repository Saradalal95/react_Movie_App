import { combineReducers } from "redux";

let searchResult = {
  data: [],
  status: "",
};

const searchReducer = (results = searchResult, action) => {
  console.log(action);

  switch (action.type) {
    case "START":
      searchResult = { data: [], status: "START" };
      return { ...searchResult };
    case "SUCCESS":
      searchResult = { data: action.payload.Search, status: "SUCCESS" };
      return { ...searchResult };
    case "FAILED":
      searchResult = { data: [], status: "FAILED" };
      return { ...searchResult };

    default:
      return results;
  }
};

let movieSearchResult = {
  data: [],
  status: "",
};

const movieSearchReducer = (results = movieSearchResult, action) => {
  console.log(action);

  switch (action.type) {
    case "MOVIE_START":
      movieSearchResult = { data: [], status: "START" };
      return { ...movieSearchResult };
    case "MOVIE_SUCCESS":
      movieSearchResult = { data: action.payload.Search, status: "SUCCESS" };
      return { ...movieSearchResult };
    case "MOVIE_FAILED":
      movieSearchResult = { data: [], status: "FAILED" };
      return { ...movieSearchResult };
    default:
      return results;
  }
};

let seriesSearchResult = {
  data: [],
  status: "",
};

const seriesSearchReducer = (results = seriesSearchResult, action) => {
  console.log(action);

  switch (action.type) {
    case "SERIES_START":
      seriesSearchResult = { data: [], status: "START" };
      return { ...seriesSearchResult };
    case "SERIES_SUCCESS":
      seriesSearchResult = { data: action.payload.Search, status: "SUCCESS" };
      return { ...seriesSearchResult };
    case "SERIES_FAILED":
      seriesSearchResult = { data: [], status: "FAILED" };
      return { ...seriesSearchResult };
    default:
      return results;
  }
};
let favoriteList = [];
const favoriteReducer = (results = favoriteList, action) => {
  if (action.type === "ADD_TO_FAVORITE") {
    //  favoriteList = { data: action.payload };
      favoriteList.push(action.payload);
    return [...favoriteList];
  }
  if (action.type === "REMOVE_FAVORITE") {
    favoriteList.splice(action.payload, 1);
    return [...favoriteList];
  }
  return results;
};


export default combineReducers({
  results: searchReducer,
  movieResults: movieSearchReducer,
  seriesResults: seriesSearchReducer,
  favoriteResults: favoriteReducer,
});
