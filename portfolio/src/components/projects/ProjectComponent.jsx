// import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './Project.css'
import ProjectContentComponent from './ProjectContentComponent'
import { TfiArrowCircleLeft } from "react-icons/tfi";
import { TfiArrowCircleRight } from "react-icons/tfi";
import {handleProjectPageNum} from '../../redux/slices/main/mainSlice'
import { useDispatch, useSelector } from 'react-redux';
import {handleNavPageName} from '../../redux/slices/main/mainSlice'
import projectData from '../../datas/projectData';


function ProjectComponent() {
  const dispatch = useDispatch()
  dispatch(handleNavPageName('projectSelect'))
  const projectPageNum = useSelector((state) => state.mainSlice.projectPageNum)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [pjData, setPjData] = useState(projectData.project)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <div className='majorContainer'>
      {/* 메인 컴포넌트 전체 */}
      <div className='subContainer'>
          {/* <div className='majorText'>프로젝트</div> */}
          {
            windowWidth  >= 768
            ?
            // 좌우에 넘어가기 버튼
            <div className='overMdDiv'>
              <div className='overMdDivLeft'>
                {projectPageNum === 0
                ? null
                :
                  <div className='circleArrow' onClick={()=>{dispatch(handleProjectPageNum(-1))}}>
                    <TfiArrowCircleLeft size='100%' color='#ffffff'/>
                  </div>
                }
              </div>
              <div className='overMdDivMiddle'>
                <ProjectContentComponent />
              </div>
              <div className='overMdDivRight'>
                { pjData.length-1 <= projectPageNum
                ? null
                :
                  <div className='circleArrow' onClick={()=>{dispatch(handleProjectPageNum(1))}}>
                    <TfiArrowCircleRight size='100%' color='#ffffff'/>
                  </div>
                }
                </div>
            </div>
            : 
            // 하단에 넘어가기 버튼
            <div className='underMdDiv'>
              <div className='underMdDivTop'>
                <ProjectContentComponent />
              </div>
              <div className='underMdDivBottom'></div>
            </div>
          }
          
      </div>
    </div>
  );
}

export default ProjectComponent;
