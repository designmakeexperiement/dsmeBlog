import React, {Component} from 'react';
// import {title, subtitle, description} from "../blogs/testPost";


export default class Card extends Component {
  render() {
    const post = this.props.post;

    function openBlog() {
      window.location = post.url;
    }

    return (
      <div className="card" onClick={openBlog}>
        <div className="card-body">
          <h1>{post.title}</h1>
          <h3>{post.subtitle}</h3>
          <p>{post.description}</p>
        </div>
      </div>  
    );
  }
}