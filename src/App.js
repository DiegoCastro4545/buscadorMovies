
import React, { Component} from 'react';
import './App.css';
import { Title } from './components/Title'
import { SearchForm } from './components/SearchForm'

import 'bulma/css/bulma.css';

function App() {
  return (
    <div className="App">
      <Title>Search Movies</Title> 
      <div className='SearchForm-wrapper'>
        <SearchForm />
      </div>
    </div>
  );
}

export default App;
