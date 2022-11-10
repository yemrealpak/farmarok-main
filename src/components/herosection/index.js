import React, { Component } from 'react'
import './hero.css';
import heroimg from '../../assets/heroimg.png';
import pdf from '../../assets/whitepaper.pdf';

export default class index extends Component {
  render() {
    return (
      <div>
        <div className='containerhero'>

            
            <div className='logohero'>
            
            <img src={heroimg} className='logoh' />
          
            <h1 className='hhero'>A Fast Financial system </h1>
            <h1 className='h1hero'>Lottery, ETC</h1>
            </div>
            <div className='containerheroo'>
              
            <span className='spanhero'>
            People were mad that all of their money has disappeared and the financial system has collapsed
            </span>
            <div className='boxherobutton'>
              
               <a className='btnheroa' target='_blank' href={pdf}><button className='btnhero'>Whitepaper</button></a> 
                <button className='btnherotwo'>Buy $FROK</button>
            </div>
            <span className='spanherot'>
            People were mad that all of their money has disappeared and the financial system has collapsed
            </span>
            </div>
        </div>    
      </div>
    )
  }
}
