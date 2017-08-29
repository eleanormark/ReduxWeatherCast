import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    console.log(event.target.value);
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();

    // We need to go and fetch weather data
    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a five-day forecast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </span>
      </form>
    );
  }
}

// hook up Action-Creator fetchWeather function to searchBar container
function mapDispatchToProps(dispatch) {
  //bindActionCreator makes sure the action flows down into the middleware and into the reducers
  return bindActionCreators({ fetchWeather }, dispatch);
}

// null because we dont need to keep track of the state here
// mapDispatchToProps is always the second arg
export default connect(null, mapDispatchToProps)(SearchBar);