import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import AboutCountry from "./component/Header/aboutcountry/AboutCountry";
import Countrydeatil from "./component/Header/countrydetail/Countrydeatil";
import Header from './component/Header/Header/Header';
import Home from "./component/Header/Home/Home";
import NotFound from "./component/Header/NotFound/NotFound";
import Login from "./component/Login/Login";
import firebase from "firebase/app";
import "firebase/auth";
import { createContext, useState } from "react";
import PrivatRoute from "./component/PrivateRoute/PrivatRoute";

export const userContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <p>name:{loggedInUser.email}</p>
      <Router>
        <Header />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <PrivatRoute path="/about/:name">
            <Countrydeatil />
          </PrivatRoute>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivatRoute path="/*">
            <NotFound />
          </PrivatRoute>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
