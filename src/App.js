import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import UserDataTable from './UserDataTable';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      users : []
    }
  }
  
   fetchUserData =()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((json)=> {
      this.setState({
         users : json
      }
      )})
    }

  render() {
    return(
    <div className="App">
      <input type="button" value="Fetch" onClick={this.fetchUserData}/>
      <UserDataTable users={this.state.users}></UserDataTable>
    </div>)}
  
  }


export default App;
