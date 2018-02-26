import React from 'react';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import Experience from './Experience';
import Projects from './Projects';
import Hobbies from './Hobbies';

export default class Main extends React.Component {
  render() {
    const { match } = this.props;

    return <div className="hero-body">
      <div className="container has-text-centered">

        <div className="tabs is-centered is-hidden-touch">
          <ul>
            <li className={classNames({
              'is-active': match.path === '/'
            })}><Link to="/">Recent Experience</Link></li>
            <li className={classNames({
              'is-active': match.path === '/projects'
            })}><Link to="/projects">Recent Projects</Link></li>
            <li className={classNames({
              'is-active': match.path === '/hobbies'
            })}><Link to="/hobbies">Hobbies</Link></li>
          </ul>
        </div> 

        <div className="is-hidden-desktop" style={{ marginBottom: '25px' }}>
          <Link to="/">Experience</Link> | <Link to="/projects">Projects</Link> | <Link to="/hobbies">Hobbies</Link>
        </div>

        <div style={{ height: '400px' }}>
          <Switch>
            <Route exact path="/" component={Experience} />
            <Route path="/projects" component={Projects} />
            <Route path="/hobbies" component={Hobbies} />
          </Switch>
        </div>
      </div>
    </div>;
  }
}
