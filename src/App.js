import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: {firstName: 'Lewis', lastName:'Hamilton'},
      team: 'Mercedes'
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
           Hi, I am {this.state.name.firstName} {this.state.name.lastName}, I drive for {this.state.team}
          </p>
          <button onClick={() => {
                this.setState(() => {
                  return {
                    name: {firstName: 'Lando', lastName:'Norris'}, 
                    team: 'McLaren' 
                  }
                }, 
                () => {
                  // Callback: Do this when we are done setting the state
                  console.log(this.state)
                })
            }}
            >Change name</button>
        </header>
      </div>
    );
  }
}

export default App;
