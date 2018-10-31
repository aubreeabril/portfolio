import React from "react";
import { withRouter } from "react-router-dom";
import { posts } from "./RawBlogPosts";

class Post extends React.Component {
  state = {
    currentPost: posts.find(
      p => parseInt(this.props.match.params.id, 10) === p.id
    )
  };

  componentDidMount() {
    console.log(this.props.match.params.id);
    console.log(posts);
  }

  render() {
    return (
      <div>
        {this.state.currentPost ? (
          <React.Fragment>
            <h1>{this.state.currentPost.title}</h1>
            <p>{this.state.currentPost.date}</p>
            {this.state.currentPost.body.split(`\n`).map(graf => (
              <p>{graf}</p>
            ))}
          </React.Fragment>
        ) : (
          "Loading ..."
        )}
      </div>
    );
  }
}

export default withRouter(Post);
