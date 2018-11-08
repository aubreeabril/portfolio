import React from "react";
import { Jumbotron } from "reactstrap";

class Post extends React.Component {
  render() {
    return (
      <Jumbotron
        style={{ minHeight: window.innerHeight, backgroundColor: "white" }}
        className="single-post"
      >
        <h1 style={{ marginTop: "-40px" }}>{this.props.post.title}</h1>
        <p className="meta-text">
          {`${this.props.post.author.first_name} ${
            this.props.post.author.last_name
          }`}{" "}
          | {new Date(this.props.post.published).toString()}
        </p>
        <div dangerouslySetInnerHTML={{ __html: this.props.post.body }} />
      </Jumbotron>
    );
  }
}

export default Post;
