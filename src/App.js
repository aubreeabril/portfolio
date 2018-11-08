import React, { Component, Fragment } from "react";
import BlogContainer from "./containers/BlogContainer";
import HomeContainer from "./containers/HomeContainer";
import Menu from "./components/Menu";
import Post from "./components/Post";
import { Route } from "react-router-dom";
import Butter from "buttercms";
const BUTTER = Butter(process.env.REACT_APP_BUTTER_API_KEY);

class App extends Component {
  state = {
    blogPosts: null
  };

  componentDidMount() {
    BUTTER.post.list({ page: 1, page_size: 10 }).then(response => {
      this.setState({
        blogPosts: response.data.data
      });
    });
  }

  render() {
    return (
      <Fragment>
        {this.state.blogPosts ? (
          <Fragment>
            <Menu />
            <Route exact path="/portfolio/" component={HomeContainer} />
            <Route
              exact
              path="/portfolio/blog"
              render={() => <BlogContainer blogPosts={this.state.blogPosts} />}
            />
            <Route
              path="/portfolio/blog/:id"
              render={data => {
                console.log(data);
                let selectedPost = this.state.blogPosts.find(
                  post => post.slug == data.match.params.id
                );

                return <Post post={selectedPost} />;
              }}
            />
            <footer>
              Made with <i className="far fa-heart" /> by Aubree Abril
            </footer>
          </Fragment>
        ) : (
          "Loading..."
        )}
      </Fragment>
    );
  }
}

export default App;
