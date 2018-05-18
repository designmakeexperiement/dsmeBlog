import React, {Component} from 'react';

export default class Header extends Component {
  render() {
    return (
      <header className="top_bar group">
        <div className="logo"><a href="index.html"><img id="owllogo" src="../img/logo.png" alt="JISULOGO"></img></a>
        </div>
          <nav>
            <div className="menu">
              <ul>
                <li><a id="about" href="about.html">About</a></li>
                <li><a id="work" href="index.html#worksection">Work</a></li>
                <li><a id="resume" href="jisupark_resume.pdf" target="_blank">Resume</a></li>
                <li><a id="hireme" href="https://helloimjisu.typeform.com/to/JBKeVa" target="_blank">Contact Me</a></li>
              </ul>
            </div>
          </nav>
      </header>
    );
  }
}