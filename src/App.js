import './App.css';
import React from 'react'
import Header from './MyComponents/Header';
import Categories from './MyComponents/Categories';
import Content from './MyComponents/Content';
import Footer from './MyComponents/Footer';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

function App() {

  return (
    <>
      <Router>
        <div className="container">
          <Header />
          <Categories />
          <Route exact path="/">
            <Content choice="trending" />
          </Route>
          <Route exact path="/world">
            <Content choice="world" />
          </Route>
          <Route exact path="/sport">
            <Content choice="sport" />
          </Route>
          <Route exact path="/technology">
            <Content choice="Technology" />
          </Route>
          <Route exact path="/design">
            <Content choice="Design" />
          </Route>
          <Route exact path="/culture">
            <Content choice="Culture" />
          </Route>
          <Route exact path="/business">
            <Content choice="Business" />
          </Route>
          <Route exact path="/politics">
            <Content choice="Politics" />
          </Route>
          <Route exact path="/opinion">
            <Content choice="Opinion" />
          </Route>
          <Route exact path="/science">
            <Content choice="Science" />
          </Route>
          <Route exact path="/health">
            <Content choice="Health" />
          </Route>
          <Route exact path="/style">
            <Content choice="Style" />
          </Route>
          <Route exact path="/travel">
            <Content choice="Travel" />
          </Route>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
