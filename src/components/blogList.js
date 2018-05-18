import React, {Component} from 'react';
import Card from './card';
import post from "../blogs/testPost";


export default class BlogList extends Component {
  render() {
    return (
      <section >
        {post.map( (post) =>
          <Card key={post.id.toString()} post={post} />
        )}
      </section>  
    );
  }
}
