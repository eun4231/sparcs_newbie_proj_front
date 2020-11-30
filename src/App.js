import React, { Component } from 'react';
import './App.css';

class Subject extends Component {
  render(){
    return (
      <header>
        <h1>Campus Diary</h1>
        <h4>Welcome, {this.props.name}</h4>
      </header>
    );
  }
}

class Login extends Component {
  render(){
    return(
      <form action="" method="post">
        <h3>Login</h3>
        <section class="id">
          <label for="id">UserID</label>
          <input type="text" name="id" id="id"></input>
        </section>
        <section class="pw">
          <label for="ipw">Password</label>
          <input type="password" name="pw" id="pw"></input>
        </section>
        <input type="submit"></input>
      </form>
    );
  }
}
class Semester extends Component {
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

class BucketList extends Component {
  render(){
    return (
      <h2>My Bucket List</h2>
    );
  }
}

class App extends Component {
  render(){
    return (
      <div className="App">
        <Subject name="username"></Subject>
        <Login name="login"></Login>
        <Semester name="semester"></Semester>
        <BucketList name="bucket"></BucketList>
      </div>
    );
  }
}


export default App;
