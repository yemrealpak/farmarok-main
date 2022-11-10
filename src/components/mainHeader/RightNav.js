import React, { useState , Component } from 'react';


import styled from 'styled-components';
import './header.css';
import logo from '../../assets/icon.png';
import { FaGithub , FaReddit , FaTwitter} from 'react-icons/fa';
import {BsDiscord} from 'react-icons/bs';
import heroimg from '../../assets/heroimg.png';
const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  
  li {
    padding: 18px 10px;
  }



  

  @media (max-width: 1100px) {
    flex-flow: column nowrap;
    margin-top: -0.5rem;
    background-color: #000000;
    z-index: 2;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  
    top: 0;
    right: 0;
    height: 120%;
    width: 100%;
    
    transition: transform 0.3s ease-in-out;

    li {
      color: #111;
      font-size: 2rem;
    }
  }
`;

const RightNav = ({ open , setOpen }) => {


  
  
  

  return (

 
    
        <div className='wrapper'>
        
        <div className='menuwrapper'>
        <Ul open={open}>
       
        <li>
          <div className='logowrapper'>
          <img src={logo} alt='logo' className='logo'/>
            <span className='span'>Farmarok</span>
          </div>
        </li>  
        <li><a   onClick={() => setOpen(!open)} className='menutxt' href="#containermainhome">About</a></li>
        <li><a   onClick={() => setOpen(!open)} className='menutxt'  href="https://github.com/ContractChecker/audits/blob/main/Farmarok_Token_0xDD451Fb4b6359e2d669675E1DC974604B7bCe9dC_Smart_Contract_Security_Audit_By_ContractChecker.pdf">Audit Report</a></li>
        <li><a   onClick={() => setOpen(!open)} className='menutxt'  href="#containerfairlaunch">Pinksale</a></li>
        <li><a   onClick={() => setOpen(!open)} className='menutxt'  href="#containertokenomics">Tokenomic</a></li>
        <li><a   onClick={() => setOpen(!open)} className='menutxt'  href="#containerpartners">Partner</a></li>
        <li>
            <button className='btnmenu'>Farmarok dApps</button>
        </li>
        
          
         </Ul>
        </div>
        </div>
    
  )
}

export default RightNav