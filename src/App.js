import React, { Component } from 'react';
import './App.css';

class Subject extends Component {
  render(){
    return (
      <header>
        <h1>Campus Diary</h1>
      </header>
    );
  }
}

class TOC extends Component {
  render(){
    return (
      <nav class="semester">
        <ul>
          <li><a href="1st spring">1st Spring</a></li>
          <li><a href="1st summer">1st Summer</a></li>
          <li><a href="1st autumn">1st Autumn</a></li>
          <li><a href="1st winter">1st Winter</a></li>
          <li><a href="2nd spring">2nd Spring</a></li>
          <li><a href="2nd summer">2nd Summer</a></li>
          <li><a href="2nd autumn">2nd Autumn</a></li>
          <li><a href="2nd winter">2nd Winter</a></li>
        </ul>
      </nav>
    );
  }
}

class App extends Component {
  render(){
    return (
      <div className="App">
        <Subject></Subject>
      </div>
    );
  }
}

export default App;
