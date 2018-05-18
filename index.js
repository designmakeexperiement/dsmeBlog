
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// main app
import {Main, FullBlog} from './src/components/App';

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={Main} />
      <Route path="/blogPages" component={FullBlog} />
    </div>
  </Router>
  , document.getElementById('app'));
