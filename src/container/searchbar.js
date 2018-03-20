import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component{
  constructor(props){
    super(props);

    this.state = {term: ''};
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event){
    console.log(event.target.value);
    this.setState({term: event.target.value})
  }

  onFormSubmit(event){
    event.preventDefault();
    //Now we fetch data from a API from our actionCreator
    this.props.fetchWeather(this.state.term);
    //clear the search bar
    this.setState({term: ''})
  }

  render(){
    return(
      <form className="input-group" onSubmit={this.onFormSubmit}>
        <input placeholder="Get a five day forecast" className="form-control"
        value={this.state.term} onChange={this.onInputChange}/>
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
        </form>
    )
  }
}

/* this causes the action creator, whenever it is called and
returns an action, bind it with dispatch, and makes sure the action flows
down into the middleware and then the reducers inside of our redux application. */
function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchWeather }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar)
