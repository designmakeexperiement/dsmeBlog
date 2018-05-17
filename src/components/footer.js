import React, {Component} from 'react';

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="contentcontainer">
          <p id="copyright">&copy; 2018. Designed and hand-coded by <span>Design Make Experiment</span>.</p>
          
          <div className="socialmedia">
            <ul>
              <li><a className="linkedin" href="https://www.linkedin.com/in/parkjisu" target="_blank"><i className="fa fa-linkedin"></i></a></li>
              <li><a className="twitter" href="https://twitter.com/helloimjisu" target="_blank"><i className="fa fa-twitter"></i></a></li>
              <li><a className="github" href="https://github.com/helloimjisu" target="_blank"><i className="fa fa-github-alt"></i></a></li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
}