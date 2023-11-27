import React from 'react';
import './NavbarComponent.css';
import {Link } from "react-router-dom";
import { GoHome } from "react-icons/go";

function NavbarComponent() {

  return (
    <div className='NavbarComponent'>
      <div className='headerContainer'>
        <div style={{width:"100%"}}>
          <Link to="/" className='headerLogo'>
            <div className='headerLogoLeft'>
              <GoHome size='55px' color='#ffffff' />
            </div>
            {/* <span>김범기 로고 위치!</span> */}
            <div className='headerLogoMiddle'>
              <img src="/image/logo/kimbeomgiLogo.png" alt="김범기 로고" className='kimbeomgiLogo'/>
            </div>
            <div className='headerLogoRight'></div>
          </Link>
        </div>
      </div>
      <div className='navbarContainer'>
        <div className='navbar'>
          <span className='navbarDivsion'>
            <Link className='navbarMenu' to="/introduction">소개</Link>
          </span>
          <span className='navbarDivsion'>
            <Link className='navbarMenu' to="/profile">약력</Link>
          </span>
          <span className='navbarDivsion'>
            <Link className='navbarMenu' to="/techstack">기술 스택</Link>
          </span>
          <span className='navbarDivsion'>
            <Link className='navbarMenu' to="/projectSelect">프로젝트</Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default NavbarComponent;
