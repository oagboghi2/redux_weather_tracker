import React, { Component } from 'react';
import SearchBar from '../container/searchbar';
import WeatherList from '../container/weatherList';


export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
