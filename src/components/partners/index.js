import React, { Component } from 'react'
import './partners.css';
import partner1 from '../../assets/partner1.png';
import partner2 from '../../assets/partner2.png';
import partner3 from '../../assets/partner3.png';

export default class index extends Component {
  render() {
    return (
      <div id='containerpartners' className='containerpartners'>
        <h1>Partners</h1>
        <div className='containerpartnerico'>
          <a href='https://cryptechking.com/' target='_blank'>
          <img src={partner1}  className='partner1'/>
          </a>
          <a href='https://www.contractchecker.app/' target='_blank'>
        <img src={partner2}  className='partner2'/>
        </a>
        <a href='https://themarketingwizards.net/home/' target='_blank'>
        <img src={partner3}  className='partner3'/>
        </a>
        </div>    
      </div>
    )
  }
}
