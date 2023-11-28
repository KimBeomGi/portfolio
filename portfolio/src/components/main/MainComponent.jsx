import React, { useEffect, useState } from 'react';
import './Main.css'

// import { useSelector, useDispatch } from 'react-redux'
// import { Outlet, Link } from "react-router-dom";
// import { decrement, increment } from '../../redux/slices/main/mainSlice';

function MainComponent() {
  // const count = useSelector((state) => state.mainSlice.value)
  // const dispatch = useDispatch()
  const [textColor, setTextColor] = useState('#FFFFFF');
  const [overMouse, setOverMouse] = useState(false)
  // const [rgbValue, setRgbValue] = useState({redValue:128, greenValue:128, blueValue:128})
  const [selectId, setSelectId] = useState(null)

  useEffect(() => {
    if(overMouse){
      const interval = setInterval(() => {
        const randomColor = getRandomColor();
        setTextColor(randomColor);
      }, 1000);
  
      return () => {
        clearInterval(interval); // 컴포넌트가 언마운트될 때 인터벌 해제
      };
    }
  }, [overMouse]);

  const getRandomColor = () => {
    // const minRed = rgbValue.redValue - 100 < 0 ? 0 : rgbValue.redValue - 100;
    // const minGreen = rgbValue.greenValue - 100 < 0 ? 0 : rgbValue.greenValue - 100;
    // const minBlue = rgbValue.blueValue - 100 < 0 ? 0 : rgbValue.blueValue - 100;
    // const maxRed = rgbValue.redValue + 100 > 255 ? 255 : rgbValue.redValue + 100;
    // const maxGreen = rgbValue.greenValue + 100 > 255 ? 255 : rgbValue.greenValue + 100;
    // const maxBlue = rgbValue.blueValue + 100 > 255 ? 255 : rgbValue.blueValue + 100;

    // const red = Math.floor(Math.random() * (maxRed - minRed) + minRed)
    // const green = Math.floor(Math.random() * (maxGreen - minGreen) + minGreen)
    // const blue = Math.floor(Math.random() * (maxBlue - minBlue) + minBlue)
    const red = Math.floor(Math.random() * 255)
    const green = Math.floor(Math.random() * 255)
    const blue = Math.floor(Math.random() * 255)
    // setRgbValue({redValue:red, greenValue:green, blueValue:blue})
    const redHex = red.toString(16)
    const greenHex = green.toString(16)
    const blueHex = blue.toString(16)

    const hexrgb = `#${redHex}${greenHex}${blueHex}`;
    
    return hexrgb;
  };
  return (
    <div className='majorContainer'>
      {/* 메인 컴포넌트 전체 */}
      <div className='subContainer'>
        <div class='row'>
        <div class='col-md-8' style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
            <div className='mainTopLeft'>
              <div className='mainTopLeftSub'>
                <h1 className='mainTopLeftText'>어찌되었든 결승점에 도착하는 거북이🐢</h1>
                <h1 className='mainTopLeftText'>김범기입니다.</h1>
              </div>
            </div>
          </div>
          <div class='col-md-4' style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
            <img className='mainTopRigthImage' src='/image/mainImage/portfolioMe1.png' alt="main logo"/>
          </div>
          <div class='col-md-8' style={{display:'flex', alignItems:'center'}}>
            <div className='mainBottomLeftSub'>
              <ul className='mainBottomLeftSubUl'>
                <li className='mainBottomLeftListText'>안되면 되게하라!의 신념으로 일하는 개발자 김범기입니다.</li>
                <li className='mainBottomLeftListText'>수치화와 분석을 통해 최적의 성과를 추구합니다.</li>
                <li className='mainBottomLeftListText'>작업 전, 계획과 설계로 효율적인 코드를 준비합니다.</li>
                <li className='mainBottomLeftListText'>React와 React Native를 이용할 줄 아는 프론트엔드 개발자입니다.</li>
                <li className='mainBottomLeftListText'>특전사 중대장 경험으로 협력의 가치를 인지하고 실천하는 개발자입니다.</li>
              </ul>
            </div>
          </div>
          <div class='col-md-4' style={{display: 'flex', flexDirection: 'column', justifyContent:'center'}}>
            <div>
              <div className='account'>
                <h3 className='mainBottomRigthH3Text'>Email</h3>
                <p className='mainBottomRigthText'>dyd1308@naver.com</p>
              </div>
              <div className='account'>
                <h3 className='mainBottomRigthH3Text'>Phone number</h3>
                <p className='mainBottomRigthText'>010-9953-1308</p>
              </div>
              <div className='account'
                onMouseOver={() =>{
                  setOverMouse(true)
                  setSelectId('blogUrl')
                }}
                onMouseLeave={() => {
                  setOverMouse(false)
                  setTextColor('#FFFFFF');
                  setSelectId(null)
                }}
              >
                <h3 className='mainBottomRigthH3Text'>Blog</h3>
                <a id='blogUrl' className='mainBottomRigthText' href="https://velog.io/@dyd1308" style={{ color: selectId==='blogUrl' ? textColor : '#FFFFFF' }}>https://velog.io/@dyd1308</a>
              </div>
              <div
                className='account'
                onMouseOver={() =>{
                  setOverMouse(true)
                  setSelectId('githubUrl')
                }}
                onMouseLeave={() => {
                  setOverMouse(false)
                  setTextColor('#FFFFFF');
                  setSelectId(null)
                }}
              >
                <h3 className='mainBottomRigthH3Text'>Github</h3>
                <a id='githubUrl' className='mainBottomRigthText' href="https://github.com/KimBeomGi" style={{ color: selectId==='githubUrl' ? textColor : '#FFFFFF' }}>https://github.com/KimBeomGi</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainComponent;
