import React, { useState } from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom";

//import CheckingSignedIn from "./pages/CheckingSignedIn";
import Home from "./pages/Home";
//import Profile from "./pages/Profile";
import Club from "./pages/Club"
import DataScience from "./pages/DataScience"
import Anime from "./pages/Anime"
//import Private from "./pages/Private";
import Bookmark from "./pages/Bookmark";
import Signup from "./pages/Signup"
import Login from "./pages/Login"

export default function App() {
  const [cart, setCart] = useState([]);

  const addToBookmark = (club) => {
    setCart([ ...cart, {
      name: club.name,
    }])
    console.log("yes")
    console.log(cart);
  }


    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/club/:id" render={() => <Club cart={cart} setCart={setCart} addToBookmark={addToBookmark}/>} />
          <Route exact path="/club1/datascience" component={DataScience} />
          <Route exact path="/club2/anime" render={() => <Anime cart={cart} setCart={setCart} addToBookmark={addToBookmark}/>} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/club" render={() => <Bookmark cart={cart} setCart={setCart}/>} />
        </Switch>
      </BrowserRouter>
    );
}




