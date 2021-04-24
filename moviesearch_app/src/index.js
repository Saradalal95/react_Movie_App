import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import './css/style.css';


import reducers from "./reducer";
import Navbar from "./components/navbar.js";
import Home from "./pages/home";
import Movies from "./pages/movies";
import Series from "./pages/series";
import Search from "./pages/search";
import Favorite from "./pages/favorite";




//Connecting   people with fun and entertainment

const App = () => {

  return (
    <Router>
      <Navbar />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path='/search'>
          <Search />
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/series">
          <Series />
        </Route>
        <Route path="/favorite">
          <Favorite />
        </Route>
      </Switch>
    </Router>
  );
};

ReactDOM.render(
  <Provider store={createStore(reducers, applyMiddleware(thunk))}>
    <App />
  </Provider>,
  document.getElementById("root")
)

