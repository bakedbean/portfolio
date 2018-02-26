import React from 'react';

export default class Projects extends React.Component {
  render() {
    return <nav className="columns">
      <div className="column has-text-centered">
        <div>
          <a href="https://localvore.co" className="link is-info" target="_new">https://goodcalleats.com</a>
          <a href="https://goodcalleats.com" target="_new"><img src="/images/goodcalleats.jpg" /></a>
          <p className="heading">Social meal planning</p>
          <p>Created in partnership with <a href="https://github.com/doomspork" target="_new">Sean Callan</a>, Goodcalleats is a project built to solve the problem of coming up with new meal ideas each week.</p>
          <div className="content has-text-left">
            <ul>
              <li>Elixir</li>
              <li>React</li>
              <li>Redux</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="column has-text-centered">
        <div>
          <a href="https://npmnotifier.com" className="link is-info" target="_new">https://npmnotifier.com</a>
          <a href="https://npmnotifier.com" target="_new"><img src="/images/npmnotifier.jpg" /></a>
          <p className="heading">Automated NPM package version management</p>
          <p>NPM Notifier provides automatic notifications when packages you care about are updated. It also allows for integration to github to automatically submit pull requests to update package versions.</p>
          <div className="content has-text-left">
            <ul>
              <li>Node</li>
              <li>React</li>
              <li>Redux</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="column has-text-centered">
        <div>
          <a href="https://ebendev.com/hn" className="link is-info" target="_new">Ask HN: Who's Hiring Remote</a>
          <a href="https://ebendev.com/hn" target="_new"><img src="/images/hn-remote.jpg" /></a>
          <p className="heading">Remote positions from Hacker News Who's Hiring Post</p>
        </div>
        <p>Parses the current Hacker News Who's Hiring posts for opportunities that are remote friendly.</p>
        <div className="content has-text-left">
          <ul>
            <li>Firebase</li>
            <li>React</li>
            <li>Redux</li>
          </ul>
        </div>
      </div>
    </nav>;
  }
}
