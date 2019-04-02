import React, { Component } from 'react';
import axios from 'axios';
import { DonationList } from '../components/index';

class DonationView extends Component {
  

  componentDidMount() {
    
    }

  render(){
    return (
      <div className='donations'>
        <DonationList />
      </div>
    )
  }
}

export default DonationView;