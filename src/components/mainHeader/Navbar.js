import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import logo from '../../assets/icon.png';
const Nav = styled.nav`
  width: auto;
  background-color: #000000;
  
  border-bottom: 1px solid #0000;
  padding: 0 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .wrapper{
    justify-content: left;
  align-items: left;
  }

  .logo {
    padding: 15px 0;
  }
`

const Navbar = () => {
  return (
    <Nav>
      <div className="wrapper">
      <div className='logowrapper'>
          <img src={logo} alt='logo' className='logo'/>
            <span className='spanLogo'>Farmarok</span>
          </div>
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar