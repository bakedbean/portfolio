import React from 'react';
import { Link } from 'react-router-dom';

export default class Hobbies extends React.Component {
  render() {
    return <div className="columns">
      <div className="column">
        <p className="title is-4">Running</p>
        <p className="subtitle">Trail, Road, Marathons</p>
      </div>

      <div className="column">
        <p className="title is-4">Hiking</p>
        <p className="subtitle">I live in Vermont...</p>
      </div>

      <div className="column">
        <p className="title is-4">Cooking</p>
        <p className="subtitle">Did I mention I live in Vermont...</p>
      </div>

      <div className="column">
        <p className="title is-4">Building Apps</p>
        <p className="subtitle">I usually have <Link to="/projects">one or two side projects</Link> going</p>
      </div>
    </div>;
  }
}
