import { Component } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      drivers: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => this.setState(() => {
      return {drivers: users}
    }));
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase(); 
    this.setState(() => {
      return { searchField }
    });
  }

  render() {
    //Destructuring
    const { drivers, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredDrivers = drivers.filter((driver) => {
      return driver.name.toLocaleLowerCase().includes(searchField);
    })
    return (
      <div className="App">
        <h1 className='app-title'>Drivers</h1>
        <SearchBox className='drivers-search-box' onChangeHandler={onSearchChange} placeholder='Search Driver'/>
        <CardList drivers={filteredDrivers}/>
      </div>
    );
  }
}

export default App;
