import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      drivers: [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => this.setState(() => {
      return {drivers: users}
    }));
  }

  render() {
    return (
      <div className="App">
        {
          this.state.drivers.map((driver) => {
            return (
              <div key={driver.id}>
                <h1>{driver.name}</h1>
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default App;
