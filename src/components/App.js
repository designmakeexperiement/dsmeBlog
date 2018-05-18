import React, {Component} from 'react';
import Footer from "./footer";
import BlogList from "./blogList";
import Header from "./header";


export default class App extends Component {
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
