// import logo from './logo.svg';
import React, { useState } from 'react';
import './Techstack.css'
import TechstackData from '../../datas/TechstackData'
// import { Route, Routes } from 'react-router-dom';

function TechstackComponent() {
  const [techLanguage, setTechLanguage] = useState(TechstackData.techLanguage)
  const [techLibrary, setTechLibrary] = useState(TechstackData.techLibrary)
  const [techCollaborateTool, setTechCollaborateTool] = useState(TechstackData.techCollaborateTool)

  return (
    <div className='majorContainer'>
        {/* 메인 컴포넌트 전체 */}
      <div className='subContainer'>
        <div className='majorText'>기술 스택</div>
          <div className='contain'>
            <div>
              <div className='techStackTitle'>사용 가능한 언어</div>
              {techLanguage.map((item) => {
                return (
                  <div className='techstackIndividualContain'>
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
              <hr className='divisionTechStack'/>
              {/* 라이브러리 및  프레임워크 */}
              <div className='techStackTitle'>사용 가능한 라이브러리 및 프레임워크</div>
              {techLibrary.map((item) => {
                return (
                  <div className='techstackIndividualContain'>
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
              <hr className='divisionTechStack'/>
              {/* 협업도구 및 기타 */}
              <div className='techStackTitle'>협업도구 및 기타</div>
              <div className='techStackTitleCollaborate'>
                {techCollaborateTool.map((item) => {
                  return (
                    <div className='techStackTitleCollaborateContain'>
                      <img className='techstackLogoImage' src={item.techstackLogo} alt={item.techstackName} />
                      <p className='techstackLogoName'>{item.techstackName}</p>
                    </div>
                  );
                })}
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default TechstackComponent;
