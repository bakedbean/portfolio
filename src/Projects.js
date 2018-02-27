import React from 'react';

const tagStyles = {
  display: 'flex',
  justifyContent: 'center',
  margin: '10px 0 10px 0'
};

export default class Projects extends React.Component {
  render() {
    return <nav className="columns">
      <div className="column has-text-centered">
        <div>
          <p><a href="https://localvore.co" className="link is-info" target="_new">Goodcalleats</a></p>
          <a href="https://goodcalleats.com" target="_new"><img src="/images/goodcalleats.jpg" /></a>
          <p className="heading">Social meal planning</p>
          <div style={tagStyles}>
            <div className="tags">
              <span className="tag">Elixir</span>
              <span className="tag">React</span>
              <span className="tag">Redux</span>
            </div>
          </div>
          <p>Created in partnership with <a href="https://github.com/doomspork" target="_new">Sean Callan</a>, Goodcalleats is a project built to solve the problem of coming up with new meal ideas each week.</p>
        </div>
      </div>
      <div className="column has-text-centered">
        <div>
          <p><a href="https://npmnotifier.com" className="link is-info" target="_new">NPM Notifier</a></p>
          <a href="https://npmnotifier.com" target="_new"><img src="/images/npmnotifier.jpg" /></a>
          <p className="heading">Automated NPM package version management</p>
          <div style={tagStyles}>
            <div className="tags">
              <span className="tag">Node</span>
              <span className="tag">React</span>
              <span className="tag">Redux</span>
            </div>
          </div>
          <p>NPM Notifier provides automatic notifications when packages you care about are updated. It also allows for integration to github to automatically submit pull requests to update package versions.</p>
        </div>
      </div>
      <div className="column has-text-centered">
        <div>
          <a href="https://ebendev.com/hn" className="link is-info" target="_new">Ask HN: Who's Hiring Remote</a>
          <a href="https://ebendev.com/hn" target="_new"><img src="/images/hn-remote.jpg" /></a>
          <p className="heading">Hacker News Who's Hiring Post: Remote positions</p>
        </div>
        <div style={tagStyles}>
          <div className="tags">
            <span className="tag">Firebase</span>
            <span className="tag">React</span>
            <span className="tag">Redux</span>
          </div>
        </div>
        <p>Parses the current Hacker News Who's Hiring posts for opportunities that are remote friendly.</p>
      </div>
    </nav>;
  }
}
