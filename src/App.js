import React, { Component, Fragment } from "react";
import BlogContainer from "./containers/BlogContainer";
import HomeContainer from "./containers/HomeContainer";
import Menu from "./components/Menu";
import Post from "./components/Post";
import { Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Menu />
        <Route exact path="/portfolio/" component={HomeContainer} />
        <Route path="/portfolio/blog" component={BlogContainer} />
        <Route path="/portfolio/blog/:id" component={Post} />
        <footer>
          Made with <i className="far fa-heart" /> by Aubree Abril
        </footer>
      </Fragment>
    );
  }
}

export default App;
