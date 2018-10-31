import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron } from "reactstrap";
import { posts } from "../components/RawBlogPosts";

class BlogContainer extends Component {
  render() {
    return (
      <Jumbotron
        className="blog-container"
        style={{ minHeight: window.innerHeight }}
      >
        {posts.map(p => (
          <div className="blog-item">
            <h1 className="blog-headline">
              <a href={`${p.link}`}>{p.title}</a>
            </h1>
            <p>{p.summary}</p>
          </div>
        ))}
      </Jumbotron>
    );
  }
}

export default BlogContainer;

// <Link to={`/blog/${p.id}`}>{p.title}</Link>
