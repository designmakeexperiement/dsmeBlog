import React, {Component} from 'react';
import Footer from "./footer";
import BlogList from "./blogList";
import Header from "./header";


class Main extends Component {
  render () {
      return (
        <div>
          <Header></Header>
          <BlogList></BlogList>
          <Footer></Footer>
        </div>
      );
  }
}

class FullBlog extends Component {
  render () {
      return (
        <div>
          <Header></Header>
          <Footer></Footer>
        </div>
      );
  }
}

export { Main, FullBlog }