// import logo from './logo.svg';
import React, { useState } from 'react';
import './Techstack.css'
import TechstackData from '../../datas/TechstackData'
// import { Route, Routes } from 'react-router-dom';

function TechstackComponent() {
  const [techstacks, setTechstacks] = useState(TechstackData.techstack)

  return (
    <div className='majorContainer'>
        {/* 메인 컴포넌트 전체 */}
      <div className='subContainer'>
        <div className='majorText'>기술 스택</div>
          <div className='contain'>
            <div>
              {techstacks.map((item) => {
                return (
                  <div>
                    <div className='techstackVisible'>
                      <div class='row'>
                        <div class='col-md-2' style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                          <img className='techstackLogoImage' src={item.techstackLogo} alt={item.techstackName} />
                        </div>
                        <div class='col-md-3' style={{display:'flex', alignItems:'center'}}>
                          <p className='techstackName'>{item.techstackName}</p>
                        </div>
                        <div class='col-md-7' style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                          <div className='scoreBox'>
                            {Array.from({length: 5}).map((_, index) => {
                              return (
                                <div
                                  style={{
                                    backgroundColor: index < item.techstackScore ? '#FF792E' : 'gray', 
                                    borderRadius: '20%',
                                    // width: '100px', 
                                    // height: '100px', 
                                    // marginRight: '10px'  // margin 추가
                                    minWidth: '50px',
                                    minHeight: '50px',
                                    width: '5vw', // 수정된 부분
                                    height: '5vw', // 수정된 부분
                                    maxWidth: '100px',
                                    maxHeight: '100px',
                                    marginRight: '10px'  // margin 추가
                                  }}
                                ></div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                    <ul className='techstackExplanationUl'>
                      {item.techstackExplanation.map((itemExplain) => {
                        return (
                          <li className='techstackExplanationList'>
                            {itemExplain}
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
        </div>
      </div>
    </div>
  );
}

export default TechstackComponent;
