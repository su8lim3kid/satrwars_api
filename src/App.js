import React, { Component } from 'react';
import List from './components/List'; 
import axios from 'axios'; 


  class App extends React.Component {
    state = { people: [], };
  
    componentDidMount() {
      axios.get('https://swapi.co/api/people')
        .then( res => this.setState({ people: res.data.results }) )
       
    }
  
  



  render() {
    const {people} = this.state; 
    return (
      <div className="App">
        <List people={people} />
      </div>
    );
  }
}

export default App;
