import React, { Component } from 'react'
import './header.css';
import logo from '../../assets/heroimg.png';
import { FaGithub , FaTelegram , FaTwitter} from 'react-icons/fa';
import {BsDiscord} from 'react-icons/bs';
import Navbar from './Navbar'
export default class index extends Component {
  render() {
    return (
      <div>
      <div className='container'>
        <div className='wrapper'>
          <div className='logowrapper'>
          <img src={logo} alt='logo' className='logo'/>
            <span className='spanLogo'>Farmarok</span>
            <br></br>
          </div>
            
          <div className='menuwrapper'>
            <a className='menutxt' href="#containermainhome">About</a>
            <a className='menutxt'  href="https://github.com/ContractChecker/audits/blob/main/Farmarok_Token_0xDD451Fb4b6359e2d669675E1DC974604B7bCe9dC_Smart_Contract_Security_Audit_By_ContractChecker.pdf">Audit Report</a>
            <a className='menutxt'  href="#containerfairlaunch">Pinksale</a>
            <a className='menutxt'  href="#containertokenomics">Tokenomic</a>
            <a className='menutxt'  href="#containerpartners">Partner</a>
            <button className='btnmenu'>Farmarok dApps</button>
            <div className='iconwrapper'>
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
      <div className='hamburger'>
        <Navbar />
        </div>
      </div>
      
    )
  }
}
