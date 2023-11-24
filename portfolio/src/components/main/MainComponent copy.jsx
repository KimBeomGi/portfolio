import React from 'react';
import '../Major.css'

// import { useSelector, useDispatch } from 'react-redux'
// import { Outlet, Link } from "react-router-dom";
// import { decrement, increment } from '../../redux/slices/main/mainSlice';

function MainComponent() {
  // const count = useSelector((state) => state.mainSlice.value)
  // const dispatch = useDispatch()

  return (
    <div className='majorContainer'>
      {/* 메인 컴포넌트 전체 */}
      <div className='subContainer'>
        {/* 상단 */}
        <div className='mainTop'>
          {/* 상단좌측 */}
          <div className='mainTopLeft'>
            <div className='mainTopLeftSub'>
              <h1 className='mainTopLeftText'>느리더라도 결승점에 도착하는 거북이🐢</h1>
              <h1 className='mainTopLeftText'>김범기입니다.</h1>
            </div>
          </div>
          {/* 상단우측 */}
          <div className='mainTopRigth'>

          </div>
        </div>
        {/* 하단 */}
        <div className='mainBottom'>
          {/* 하단좌측 */}
          <div className='mainBottomLeft'>
            <div className='mainBottomLeftSub'>
              <ul>
                <li className='mainBottomLeftListText'>안되면 되게하라!의 신념으로 일하는 개발자 김범기입니다.</li>
                <li className='mainBottomLeftListText'>수치화와 분석을 통해 최적의 성과를 추구합니다.</li>
                <li className='mainBottomLeftListText'>작업 전, 계획과 설계로 효율적인 코드를 준비합니다.</li>
                <li className='mainBottomLeftListText'>React와 React Native를 이용할 줄 아는 프론트엔드 개발자입니다.</li>
                <li className='mainBottomLeftListText'>특전사 중대장 경험으로 협력의 가치를 인지하고 실천하는 개발자입니다.</li>
              </ul>
            </div>
          </div>
          {/* 하단우측 */}
          <div className='mainBottomRigth'>

          </div>
        </div>
      </div>
    </div>
  );
}

export default MainComponent;
