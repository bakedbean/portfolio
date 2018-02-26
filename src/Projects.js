import React from 'react';

export default class Projects extends React.Component {
  render() {
    return <nav className="level">
      <div className="level-item has-text-centered">
        <div>
          <a href="https://localvore.co" className="link is-info" target="_new">https://goodcalleats.com</a>
          <p className="heading">Social meal planning</p>
        </div>
      </div>
      <div className="level-item has-text-centered">
        <div>
          <a href="https://npmnotifier.com" className="link is-info" target="_new">https://npmnotifier.com</a>
          <p className="heading">Automated NPM package version management</p>
        </div>
      </div>
      <div className="level-item has-text-centered">
        <div>
          <a href="https://ebendev.com/hn" className="link is-info" target="_new">Ask HN: Who's Hiring Remote</a>
          <p className="heading">Remote positions from Hacker News Who's Hiring Post</p>
        </div>
      </div>
    </nav>;
  }
}
