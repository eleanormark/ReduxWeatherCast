import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Chart from "../components/chart";
// import GoogleMap from "../components/google_map";

class WeatherList extends Component {
  render() {
    return (
      <table className="table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
          <tbody>
          </tbody>
        </thead>
      </table>
    );
  }
}

function mapStateToProps(state) {
    return { weather: state.weather}
}

export default connect(mapStateToProps)(WeatherList)