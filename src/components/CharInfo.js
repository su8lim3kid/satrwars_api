import React, { Component } from 'react';
import axios from 'axios'

class CharInfo extends Component {
  constructor(props){
    super(props); 

    this.state = {
      expanded: false,  
    }

    this.open = this.open.bind(this); 
    this.close = this.close.bind(this); 
  }

  open(){
    this.setState({ expanded: !this.state.expanded })
  }

  close(){
    this.setState({ expanded: !this.state.expanded })
  }

  componentDidMount() {
    axios.get('https://swapi.co/api/planets/')
      .then( res => this.setState({ homeworld: res.data }) )
     
  }

  render() {
    const info = this.props.charInfo; 

    if(!this.state.expanded){
      return <p className="btn btn-info" onClick={this.open}>Show info</p>
    }

    return(
      <div className="user-details">
        <p className="btn btn-danger" onClick={this.close}>Hide info</p>
        <ul>
          <li><h2>Planet: {info.homeworld}</h2></li> 
            <li><h2>Birth date: {info.birth_year}</h2></li> 
            <li><h2>Hair color: {info.hair_color}</h2></li> 
        </ul>
      </div>
    )
  }
}

export default CharInfo; 