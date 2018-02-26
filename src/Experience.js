import React from 'react';

export default class Experience extends React.Component {
  render() {
    return <nav className="level">
      <div className="level-item has-text-centered">
        <div>
          <a href="https://localvore.co" className="link is-info" target="_new">Localvore.co</a>
          <p className="heading">Local Food Advocacy</p>
          <p className="heading">Lead / Front End</p>
        </div>
      </div>
      <div className="level-item has-text-centered">
        <div>
          <a href="https://engagedpractice.com" className="link is-info" target="_new">Collaborative Care Initiative</a>
          <p className="heading">Mental Health</p>
          <p className="heading">Lead / Full Stack</p>
        </div>
      </div>
      <div className="level-item has-text-centered">
        <div>
          <a href="https://www.engineyard.com" className="link is-info" target="_new">Engine Yard</a>
          <p className="heading">Platform as a Service</p>
          <p className="heading">IC / Front End</p>
        </div>
      </div>
      <div className="level-item has-text-centered">
        <div>
          <a className="link is-info" href="https://online.berklee.edu/" target="_new">Berklee College of Music</a>
          <p className="heading">Online Education</p>
          <p className="heading">Manager / Full Stack</p>
        </div>
      </div>
      <div className="level-item has-text-centered">
        <div>
          <a href="https://www.filewave.com/" className="link is-info" target="_new">Filewave</a>
          <p className="heading">Enterprise Software</p>
          <p className="heading">IC / Full Stack</p>
        </div>
      </div>
      <div className="level-item has-text-centered">
        <div>
          <a href="http://www.emerson.edu" className="link is-info" target="_new">Emerson College</a>
          <p className="heading">Broadcasting &amp; Arts</p>
          <p className="heading">IC / Full Stack</p>
        </div>
      </div>
    </nav>;
  }
}
