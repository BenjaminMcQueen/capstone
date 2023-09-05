import React, { Component } from 'react';
import axios from 'axios';

const Attraction = props => {
  <div className='attraction card'>
    <img src={props.attraction.imageURL} alt='an attraction of some kind' />

    <div className='attraction card details'>
      <h1 className='attraction card title'>{props.attraction.name}</h1>
      <div className='attraction card description'>
        <p>
          {props.attraction.description}
        </p>
      </div>
      <div className='booleans'>
        <div className='attraction card indoors'>{props.attraction.indoors && `Indoors👍`}</div>
        <div className='attraction card childFriendly'>{props.attraction.childFriendly && `Child Friendly👍`}</div>
      </div>
      <div className='addresses'>
        <p className='attraction card website'>{props.attraction.website}</p>
        <div className='full-address'>
          <p>{props.attraction.address}</p>
          <p>{props.attraction.city + ', ' + props.attraction.state + ' ' + props.attraction.zipcode}</p>
        </div>
      </div>
    </div>
  </div>;
};

class Attractions extends Component {
  constructor(props) {
    super(props);

    this.state = { attractions: [] };
  }

  componentDidMount() {
    console.log("Component Mounted");
    axios.get('localhost:5000/attractions/')
      .then(res => this.setState({ attraction: res.data }))
      .catch(err => console.log(err));
  }

  //custom functions
  attractionList() {
    return this.state.attractions.map(currentAttraction => {
      return <Attraction attraction={currentAttraction} key={currentAttraction._id}/>;
    });
  }

  render() {
    return (
      <div>
        there should be some stuff below here.
        {this.attractionList()}
      </div>
    );
  }
}

export default Attractions;