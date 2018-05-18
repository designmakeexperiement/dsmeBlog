import React, {Component} from 'react';
import Footer from "./footer";
import Header from "./header";


export default class FullBlog extends Component {
  render () {
      return (
        <div>
          <Header></Header>
          <Footer></Footer>
        </div>
      );
  }
}
