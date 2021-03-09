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



function App() {
  return (
   <>
   <Router>
   <Header/>
     <Switch>
       <Route path="/home">
          <Home/>
       </Route>
       <Route  path="/about/:name">
          <Countrydeatil/>
       </Route>
       <Route exact path="/">
          <Home/>
       </Route>
       <Route path="*">
          <NotFound/>
       </Route>
     </Switch>
   </Router>
   </>
  );
}

export default App;
