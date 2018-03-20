import React, { Component } from 'react'

class GoogleMap extends Component{
  //this is a liecycle method that is called automatically after this component has been rendered
  componentDidMount(){
    //we called a new google map inside of out DOM
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center:{
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
    console.log(this.props.lat);
    console.log(this.props.lon)
  }


  render(){
    //this.refs.map
    return <div ref="map" />;
  }
}

export default GoogleMap;
