// import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './Project.css'
import projectData from '../../datas/projectData'
import { useDispatch, useSelector } from 'react-redux';
import {handleNavPageName} from '../../redux/slices/main/mainSlice'


function ProjectContentComponent() {
  const dispatch = useDispatch()
  dispatch(handleNavPageName('projectSelect'))
  const projectPageNum = useSelector((state) => state.mainSlice.projectPageNum)
  // const [selectProject, setSelectProject] = useState(projectData.project)
  const [selectProject, setSelectProject] = useState(projectData.project[projectPageNum])
  useEffect(() => {
    setSelectProject(projectData.project[projectPageNum])
  }, [projectPageNum])
  
  return (
    <div className='projectMainContainer'>
      {/* 메인 컴포넌트 전체 */}
      <div className='projectSubContainer'>
        <div class='row'>
          <div class='col-md-8' style={{padding: 0}}>
            <div className='projectContainTopLeft'>
              <div className='projectContainTopLeftTop'>
                <h1 className='projectTitleText'>{selectProject.projectName}</h1>
              </div>
              <div className='projectContainTopLeftBottom'>
                <p className='referenceUrlText'>참고주소</p>
                <a className='referenceUrl' href={selectProject.projectUrl}>{selectProject.projectUrl}</a>
              </div>
            </div>
          </div>
          <div class='col-md-4' style={{padding: 0}}>
            <div className='projectContainTopRight'>
              <img src={selectProject.projectImage} alt="프로젝트 이미지" className='projectImage'/>
            </div>
          </div>
        </div>
        <div class='row'>
          <div class='col-md-7' style={{padding: 0}}>
            <div className='projectContainBottomLeft'>
              <div className='divisionContain'>
                <h3 className='projectContainTitle'>개요</h3>
                <ul>
                  <li className='projectContainListText'>
                    {selectProject.outline}
                  </li>
                </ul>
              </div>
              <div className='divisionContain'>
                <h3 className='projectContainTitle'>기획 배경</h3>
                <ul>
                  {
                    selectProject.planningBackground.map((item, index) => {
                      return(
                        <li className='projectContainListText' key={index}>
                          {item}
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
              <div className='divisionContain'>
                <h3 className='projectContainTitle'>개발기간</h3>
                <ul>
                  <li className='projectContainListText'>{selectProject.developStart} ~ {selectProject.developEnd}</li>
                </ul>
              </div>
              <div className='divisionContain'>
                <h3 className='projectContainTitle'>개발인력</h3>
                <ul>
                  <li className='projectContainListText'>총 인원: {selectProject.developmentManpower}명</li>
                  <li className='projectContainListText'>대분류: FrontEnd {selectProject.frontManpower}명, BackEnd {selectProject.backManpower}명</li>
                  <li className='projectContainListText'>기타내용:  {selectProject.additionalMan}</li>
                </ul>
              </div>
              <div className='divisionContain'>
                <h3 className='projectContainTitle'>담당업무</h3>
                <ul>
                  {selectProject.responsibilities.map((item, index) => {
                    return(
                      <div key={index}>
                        <li className='projectContainListText'>
                          {item.mainExplanation}
                        </li>
                        <ol>
                        { item.detailExplanation.map((detailItem) => {
                          return(
                            <li className='projectContainListText'>
                              {detailItem}
                            </li>
                          )
                        })
                        }
                        </ol>
                      </div>
                    )
                  })}
                </ul>
              </div>
              <div className='divisionContain'>
                <h3 className='projectContainTitle'>사용 기술</h3>
                <ul>
                {selectProject.usedTech.map((item) => {
                  return(
                    <li className='projectContainListText'>
                      {item}
                    </li>
                  )
                })}
                </ul>
              </div>
            </div>
          </div>
          <div class='col-md-5' style={{padding: 0}}>
            <div class='projectContainBottomRight'>
            {selectProject.projectRunImage.map((item, index) => {
              return(
                <div className='projectRunDiv'>
                  <h3 className='projectRunTitle'>{item.explanation}</h3>
                  <img key={index} src={item.runImage} alt="실행 이미지" className='runImage'/>
                </div>
              )
            })}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ProjectContentComponent;
