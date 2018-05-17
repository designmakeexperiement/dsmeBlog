import React, {Component} from 'react';
import Footer from "./footer";
import BlogList from "./blogList";


export default class App extends Component {
  render () {
      return (
        <div>
          <BlogList></BlogList>
          <Footer></Footer>
        </div>
      );
  }
}
