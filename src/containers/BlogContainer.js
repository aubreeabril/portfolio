import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Jumbotron,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText
} from "reactstrap";
import Post from "../components/Post";

class BlogContainer extends Component {
  render() {
    return (
      <Jumbotron
        className="blog-container"
        style={{ minHeight: window.innerHeight }}
      >
        <ListGroup>
          {this.props.blogPosts
            ? this.props.blogPosts.map(p => (
                <ListGroupItem className="headline-card">
                  <ListGroupItemHeading className="blog-headline">
                    <Link to={`/portfolio/blog/${p.slug}`}>{p.title} </Link>
                  </ListGroupItemHeading>
                  <p className="meta-text">
                    {new Date(p.published).toString()}
                  </p>
                  <ListGroupItemText>{p.summary}</ListGroupItemText>
                </ListGroupItem>
              ))
            : "Loading ..."}
        </ListGroup>
      </Jumbotron>
    );
  }
}

export default BlogContainer;
