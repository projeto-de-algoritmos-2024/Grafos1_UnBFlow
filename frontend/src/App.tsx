import React from 'react';
import Header from './components/Header';
import SearchArea from './components/SearchArea';
import './App.css';

function App() {
  return (
    document.title = "ClassFlow",
    <div className="App">
      <Header />

      <div className="content">
        
        <div className='searchContainer'>
          <SearchArea />
        </div>
        
      </div>

    </div>
  );
}

export default App;
