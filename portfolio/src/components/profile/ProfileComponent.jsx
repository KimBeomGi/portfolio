// import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './Profile.css'
import profileData from '../../datas/profileData'
import { useDispatch, useSelector } from 'react-redux';
import {handleNavPageName} from '../../redux/slices/main/mainSlice'

function ProfileComponent() {
  const [profiles, setProfiles] = useState(profileData)
  // const navPageName = useSelector((state) => state.mainSlice.navPageName)
  const dispatch = useDispatch()
  dispatch(handleNavPageName('profile'))


  return (
    <div className='majorContainer'>
      {/* 메인 컴포넌트 전체 */}
      <div className='subContainer'>
        {/* <div className='majorText'>약력</div> */}
          <div class='row'>
            {/* 좌측 */}
            <div class='col-md-5' style={{padding:0, display:'flex', justifyContent:'center', alignItems:'center'}}>
              <div className='profileLeft'>
                <img src='/image/profileImage/portfolioMe3.png' alt="약력이미지" className='profileImage'/>
              </div>
            </div>
            {/* 우측 */}
            <div class='col-md-7' style={{padding:0}}>
              <div className='profileRight'>
                {/* 우측 상단 */}
                <div className='listContainer'>
                  <h1 className='profileRightHText'>약력</h1>
                    <ul className='listUl'>
                    {profiles.profile.map((item, index) => {
                      return (
                        <li className='profilesList' key={index}>
                          <div className='profilesListSub'>
                            <p className='profilesText1'>{item.startMonth} ~ {item.endMonth}</p>
                          </div>
                          <p className='profilesText2'>{item.affiliation}</p>
                        </li>
                      );
                    })}
                    </ul>
                </div>
                {/* 우측 중단 */}
                <div className='listContainer'>
                  <h1 className='profileRightHText'>수상</h1>
                  <ul className='listUl'>
                    {profiles.award.length > 0
                      ?
                      profiles.award.map((item, index) => {
                        return (
                          <div key={index}>
                            <li className='profilesList'>
                              <div className='profilesListSub'>
                                <p className='profilesText1'>{item.winningDate}</p>
                                <p className='profilesText2'>{item.winningName}</p>
                              </div>
                            </li>
                            <p className='profilesList'>'{item.winningSupervision}' 주관</p>
                          </div>
                        );
                      })
                      :
                      <li className='profilesList'>
                        <div className='profilesListSub'>
                          <p className='profilesText2'>현재 수상 경력이 없습니다.</p>
                        </div>
                      </li>
                    }
                    
                    </ul>
                </div>
                {/* 우측 하단 */}
                <div className='listContainer'>
                  <h1 className='profileRightHText'>자격증</h1>
                  <ul className='listUl'>
                    {profiles.certification.map((item, index) => {
                      return (
                        <li className='profilesList' key={index}>
                          <div className='profilesListSub'>
                            <p className='profilesText2'>{item.certificationName}</p>
                          </div>
                        </li>
                      );
                    })}
                    </ul>
                </div>
              </div>
            </div>

          </div>
      </div>  
    </div>
  );
}

export default ProfileComponent;
