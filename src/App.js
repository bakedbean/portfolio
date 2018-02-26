import React, { Component } from 'react';
import { Route } from 'react-router';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

class App extends Component {
  render() {
    return (
      <section className="hero is-fullheight is-default">
        <Header />
        <Route exact path="/" component={Main} />
        <Route path="/projects" component={Main} />
        <Route path="/hobbies" component={Main} />
        <Footer />
      </section>
    );
  }
}

export default App;
