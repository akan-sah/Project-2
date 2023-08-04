
import React, { useState } from 'react';
import './App.css';
import { Header } from './MyComponents/Header';
import { Navbar } from './MyComponents/Navbar';
import { Table } from './MyComponents/Table';
import { people } from './MyComponents/Data';

function App() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (searchQuery) => {
    const filteredResults = people.filter(
      (person) =>
        person.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        person.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
        person.email.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setSearchResults(filteredResults);
  };

  return (
    <div className='container'>
      <Header />
      <Navbar handleSearch={handleSearch} />
      <Table data={searchResults.length > 0 ? searchResults : people} />
    </div>
  );
}

export default App;
