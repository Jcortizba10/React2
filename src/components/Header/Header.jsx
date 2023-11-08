/*
import './styles.scss'
export default function Header() {
  return (
    <div className="header">
      <div className="title">Pokedex</div>
      <div className="search">
        <input type="text" className="searchbox" />
        <button className="searchbutton">
          <i className="fas fa-search"></i>
        </button>
      </div>
    </div>
  )
}
*/
import React, { useState } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './styles.scss';

export default function Header() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="header">
      <div className="title">Pokedex</div>
      <div className="search">
        <input
          type="text"
          className="searchbox"
          value={searchValue}
          onChange={(event) => {
            setSearchValue(event.target.value);
          }}
        />
        <button className="searchbutton">
          <i className="fas fa-search"></i>
          {"Buscar"}
        </button>
      </div>
    </div>
  );
}

