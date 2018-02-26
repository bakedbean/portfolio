import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

export default class Header extends React.Component {
  state = {
    showNav: false
  }

  toggleNav = () => {
    this.setState({ showNav: !this.state.showNav });
  }

  render() {
    return <div className="hero-head">
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item" href="/">
              <h2 className="subtitle">Eben Goodman</h2>
            </a>
            <span className="navbar-burger burger" onClick={this.toggleNav} data-target="navbarMenu">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="navbarMenu" className={classNames('navbar-menu', {
            'is-active': this.state.showNav
          })}>
            <div className="navbar-end">
              <Link to="/" onClick={this.toggleNav} className="navbar-item is-active">
                Home
              </Link>
              <a href="/eben-goodman-resume.pdf" className="navbar-item" target="_new">
                Resume
              </a>
              <a href="mailto:eben.goodman@gmail.com" className="navbar-item">
                <span className="icon is-small">
                  <i className="fa fa-medium"></i>
                </span>&nbsp;Email
              </a>
              <a href="https://medium.com/@fatbeastie" className="navbar-item" target="_new">
                <span className="icon is-small">
                  <i className="fa fa-medium"></i>
                </span>&nbsp;Articles
              </a>
              <a href="http://github.com/bakedbean" className="navbar-item" target="_new">
                <span className="icon is-small">
                  <i className="fa fa-github"></i>
                </span>&nbsp;Github
              </a>
              <a href="http://www.linkedin.com/pub/eben-goodman/4/6/6a4" className="navbar-item" target="_new">
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
