import { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [drivers, setDrivers] = useState([]);
  const [filteredDrivers, setFilteredDrivers] = useState(drivers);
   
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => setDrivers(users));
  }, []);

  useEffect(() => {
    const filteredDriversList = drivers.filter((driver) => {
      return driver.name.toLocaleLowerCase().includes(searchField);
    })
    setFilteredDrivers(filteredDriversList);
  }, [drivers, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString); 
  }

   return(
      <div className="App">
        <h1 className='app-title'>Drivers</h1>
        <SearchBox className='drivers-search-box' onChangeHandler={onSearchChange} placeholder='Search Driver'/>
        <CardList drivers={filteredDrivers}/>
      </div>
   ); 
};

export default App;
