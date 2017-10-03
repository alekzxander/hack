import React, { Component } from 'react';
import './App.css';
import Header from './header';
import Menu from './menu';
import Main from './main'
import Footer from './footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
         
        <Header />
        </header>
        <div className="menu">
          <Menu />
        </div>
        <div className="container">
            <Main />
        </div>   
        <Footer />
      </div>
    );
  }
}

export default App;
