import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
  render() {
    return <div className="hero-head">
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item" href="/">
              <h2 className="subtitle">Eben Goodman</h2>
            </a>
            <span className="navbar-burger burger" data-target="navbarMenu">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="navbarMenu" className="navbar-menu">
            <div className="navbar-end">
              <Link to="/" className="navbar-item is-active">
                Home
              </Link>
              <a className="navbar-item">
                Resume
              </a>
              <a className="navbar-item">
                <span className="icon is-small">
                  <i className="fa fa-medium"></i>
                </span>&nbsp;Articles
              </a>
              <a className="navbar-item">
                <span className="icon is-small">
                  <i className="fa fa-github"></i>
                </span>&nbsp;Github
              </a>
              <a className="navbar-item">
                <span className="icon is-small">
                  <i className="fa fa-linkedin"></i>
                </span>&nbsp;LinkedIn
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>;
  }
}
