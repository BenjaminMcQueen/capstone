import React, { Component } from 'react';
import axios from 'axios';

const Attraction = (props) => {
  return (
    <div className='attraction-card red-background'>
      <img src={props.attraction.imageURL || 'NA'} alt='an attraction of some kind' />

      <div className='attraction-card-details coral-light-background'>
        <h1 className='attraction-card-title'>{props.attraction.name}</h1>
        <div className='attraction-card-description'>
          <p>
            {props.attraction.description || 'NA'}
          </p>
        </div>
        <div className='attraction-card-booleans'>
          <div className='attraction-card-indoors'>{props.attraction.indoors && `Indoors👍`}</div>
          <div className='attraction-card-childFriendly'>{props.attraction.childFriendly && `Child Friendly👍`}</div>
        </div>
        <div className='attraction-card-addresses'>
          <p className='attraction-card-website'>{props.attraction.website || 'NA'}</p>
          <div className='attraction-card-full-address'>
            <p>{props.attraction.address}</p>
            <p>{props.attraction.city + ', ' + props.attraction.state + ' ' + props.attraction.zipcode}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

class Attractions extends Component {
  constructor(props) {
    super(props);

    this.state = { attractions: [] };
  }

  componentDidMount() {
    console.log("Component Mounted");
    axios.get('http://localhost:5000/attractions/')
      .then(res => { this.setState({ attractions: res.data }); })
      .catch(err => console.log(err));
  }

  //custom functions
  attractionList() {
    return this.state.attractions.map(currentAttraction => {
      return <Attraction attraction={currentAttraction} key={currentAttraction._id} />;
    });
  }

  render() {
    console.log("this.attractionList:", this.attractionList());

    return (
      <div>
        {this.attractionList()}
      </div>
    );
  }
}

export default Attractions;