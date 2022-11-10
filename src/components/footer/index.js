import React, { Component } from 'react'
import './footer.css';
import logo from '../../assets/icon.png';
import { FaGithub , FaTelegram , FaTwitter} from 'react-icons/fa';
import {BsDiscord} from 'react-icons/bs';

export default class index extends Component {
  render() {
    return (
      <div className='containerfooter'>
        
      <div className='wrapperfooter'>
        <div className='logowrapperfooter'>
        <img src={logo} alt='logo' className='logofooter'/>
          <span className='spanlfooter'>Farmarok</span>
        </div>
          
        <div className='menuwrapperfooter'>
        <span className='spanfooter'>Copyright @ Farmarok 2022</span>
          <div>
            <a href='https://t.me/Farmarok_Cash' target='_blank'>
            <FaTelegram className='iconfooter'/>
            </a>
            
            <a href='https://twitter.com/farmarok_cash?s=11&t=wCzuFrZI-yJSD3gGWhDeDA' target='_blank'>
            <FaTwitter className='iconfooter'/>
            </a>

            <FaGithub className='iconfooter'/>
          </div>
        
        
        </div>
       
      </div>
    </div>
    )
  }
}
