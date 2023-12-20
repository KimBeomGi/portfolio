import React from 'react';
import './Introduction.css'
// import { Route, Routes } from 'react-router-dom';
// import { Outlet, Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {handleNavPageName} from '../../redux/slices/main/mainSlice'

function IntroductionComponent() {
  const dispatch = useDispatch()
  dispatch(handleNavPageName('introduction'))

  return (
    <div className='majorContainer'>
      {/* 메인 컴포넌트 전체 */}
      <div className='subContainer'>
        {/* <div className='majorText'>소개</div> */}
        <div className='introductionMajorText'>결승점에 도착하는 거북이의 의지</div>
        <div class='row'>
          {/* 좌측 */}
          <div class='col-md-6' style={{display:'flex',  flexDirection:'column', justifyContent:'space-evenly'}}>
            {/* 좌측 상단 */}
            <div class='col-md-12'>
              <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                {/* 이미지 */}
                <div class='col-3 col-md-3'>
                  <img className='introTopImage' src='/image/introductionImage/portfolioMe2.jpg' alt="main logo"/>
                </div>
                {/* 주요가치관 */}
                <div class='col-9 col-md-9'>
                  <h1 className='introTopText'>결승점에<br />도달하는</h1>
                  <h1 className='introTopText'>김범기입니다.</h1>
                </div>
              </div>
            </div>
            {/* 좌측 하단 */}
            <div class='col-md-12'>
              <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                {/* 목표 */}
                <div class='col-3 col-md-3'>
                  <h1 className='purpose'>목표</h1>
                </div>
                {/* 목표내용 */}
                <div class='col-9 col-md-9'>
                  <p className='purposeText'>특전사 장교로서의 6년 생활로 다져진<br />책임감, 성실성, 소통능력을 기반으로<br />주어진 임무를 성공적으로 완수한다.</p>
                </div>
              </div>
            </div>
          </div>
          {/* 우측 */}
          <div class='col-md-6' style={{display: 'flex', flexDirection: 'column', justifyContent:'center'}}>
            {/* 우측상단 */}
            <div className='introRightTop'>
              <p className='introRightTopText'>책임감을 가지고 소통하며 끝까지 성실하게 이행하여,<br/> 그릇을 채워가는 대기만성 인간 김범기입니다.</p>
            </div>
            {/* 우측중단 */}
            <div className='introRightMiddle'>
              <div className='imageBorder'>
                <div className='imageBorderCircle'>
                  <img src='/image/introductionImage/working.png' alt="성실" className='valuesImage'/>
                </div>
                <p className='imageBorderCircleText'>성실</p>
              </div>
              <div className='imageBorder'>
                <div className='imageBorderCircle'>
                  <img src='/image/introductionImage/accountability.png' alt="책임" className='valuesImage'/>
                </div>
                <p className='imageBorderCircleText'>책임</p>
              </div>
              <div className='imageBorder'>
                <div className='imageBorderCircle'>
                  <img src='/image/introductionImage/communication.png' alt="소통" className='valuesImage'/>
                </div>
                <p className='imageBorderCircleText'>소통</p>
              </div>
            </div>
            {/* 우측하단 */}
            <div className='introRightBottom'>
              <p className='introRightBottomText' >
                세상의 모든 코드는 어떤 방식으로든 사용 가능하다고 생각합니다.<br/>
                세상에 알려진 코드를 원하는 방식, 필요한 방식으로 사용합니다.<br/>
                세상의 많고 많은 인재 중 저를 찾아와주셔서 감사합니다.<br/>
                세상에 알려지지 않은 와룡을 찾은 당신과 같이하겠습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroductionComponent;
