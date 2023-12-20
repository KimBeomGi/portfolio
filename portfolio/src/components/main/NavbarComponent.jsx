import React from 'react';
import './NavbarComponent.css';
import {Link } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { useDispatch, useSelector } from 'react-redux';
import {handleNavPageName} from '../../redux/slices/main/mainSlice'



function NavbarComponent() {
  const navPageName = useSelector((state) => state.mainSlice.navPageName)
  const dispatch = useDispatch()

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
            <Link className='navbarMenu' onClick={() => {dispatch(handleNavPageName('introduction'))}} style={{color: navPageName ==='introduction'? 'red' :'#000000'}} to="/introduction">소개</Link>
          </span>
          <span className='navbarDivsion'>
            <Link className='navbarMenu' onClick={() => {dispatch(handleNavPageName('techstack'))}} style={{color: navPageName ==='techstack'? 'red' :'#000000'}} to="/techstack">기술 스택</Link>
          </span>
          <span className='navbarDivsion'>
            <Link className='navbarMenu' onClick={() => {dispatch(handleNavPageName('projectSelect'))}} style={{color: navPageName ==='projectSelect'? 'red' :'#000000'}} to="/projectSelect">프로젝트</Link>
          </span>
          <span className='navbarDivsion'>
            <Link className='navbarMenu' onClick={() => {dispatch(handleNavPageName('profile'))}} style={{color: navPageName ==='profile'? 'red' :'#000000'}} to="/profile">약력</Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default NavbarComponent;
