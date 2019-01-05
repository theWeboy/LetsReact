import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

  state = {
    people: [
        {username:'Deepak'},
        {username:'Abhinav'},
        {username:'Aditya'}
    ]
  };

  switchNameHandler = (newName) => {
    console.log("Name needs to be changes ASAP!");
    this.setState({
        people: [
            {username: newName },
            {username:'Abhinav' },
            {username:'Aditya' }
        ]
    })
  };

  nameChangedHandler = (event) => {
    console.log("Changing thy name!");
      this.setState({
          people: [
              {username: event.target.value },
              {username:'Abhinav' },
              {username:'Aditya' }
          ]
      })
  };

  render() {
    const style = {
        margin: '10px auto',
        padding: '5px',
        display: 'block'
    };

    return (
      <div className="App">
        <ol>
          <li>Create TWO new components: UserInput and UserOutput</li>
          <li>UserInput should hold an input element, UserOutput two paragraphs</li>
          <li>Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
          <li>Pass a username (of your choice) to UserOutput via props and display it there</li>
          <li>Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
          <li>Add a method to manipulate the state (=> an event-handler method)</li>
          <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
          <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
          <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
          <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
        </ol>

        <UserInput username = {this.state.people[0].username} changed={this.nameChangedHandler}/>
        <button style={style} onClick={this.switchNameHandler.bind(this,'TheOneWhoHatesJava')}>Click me!</button>
        <UserOutput username={this.state.people[0].username}/>
        <UserOutput username={this.state.people[1].username}/>
        <UserOutput username={this.state.people[2].username}/>
      </div>
    );
  }
}

export default App;
