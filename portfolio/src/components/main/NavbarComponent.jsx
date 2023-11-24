import React from 'react';
import './NavbarComponent.css';
import {Link } from "react-router-dom";

function NavbarComponent() {

  return (
    <div className='NavbarComponent'>
      <div className='headerContainer'>
        <div>
          <Link to="/">
            <span>김범기 로고 위치!</span>
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
            <Link className='navbarMenu' to="/project">프로젝트</Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default NavbarComponent;
