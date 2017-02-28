import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
let axios = require('axios');

class App extends React.Component {
  constructor() {
    super();
    // this.state.page is what will be used to track which page to render
    this.state = {
      page: 'HOME'
    }
    // we need to bind our methods to the component itself
    this.goToHome = this.goToHome.bind(this);
    this.goToAbout = this.goToAbout.bind(this);
  }
  goToHome() {
    this.setState({
      page: 'HOME'
    })
  }
  goToAbout() {
    this.setState({
      page: 'ABOUT'
    })
  }
  render() {
    let content
    if (this.state.page === 'HOME') {
      content = <Home />
    } else if (this.state.page === 'ABOUT') {
      content = <About />
    }
    return (
      <div>
        <div>
          <button onClick={this.goToHome}>HOME</button>
          <button onClick={this.goToAbout}>ABOUT</button>
        </div>
        {content}
      </div>
    )
  }
}

class Home extends React.Component {
  constructor() {
    super();
    this.state = {value: ''};

    this.submit_button = this.submit_button.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event){
    this.setState({value: event.target.value});
    console.log(event.target.value);
  }
  submit_button(){
    let inputData = {value: this.state.value}
    axios.post('http://localhost:8000/recipes', inputData)
    console.log(inputData);
  }
  render() {
      return (
        <form>
          <div className="group">
            <input type="text" required value={this.state.value} onChange={this.handleChange}></input>
            <span className="highlight"></span>
            <span className="bar"></span>
            <label>Search</label>
            <button type="submit" className="btn" onClick={this.submit_button}><span>Submit</span></button>
          </div>
        </form>
      )
  }
};

class About extends React.Component {
    render() {
        return (
            <div>
                <h1>About</h1>
                <p>This is the about page</p>
            </div>
        )
    }
}

export default App;
