/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import projectData from '../../datas/projectData';
import {Link } from "react-router-dom";
import {handleChangeProjectPageNum} from '../../redux/slices/main/mainSlice'
import { useDispatch } from 'react-redux';

function ProjectSelectorComponent() {
  const dispatch = useDispatch()
  const [pjData] = useState(projectData.project);
  const [allPage, setAllPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [pjPageData, setPjPageData] = useState(projectData.project.slice(0, 5));

  function calculatePageNumbers() {
    let tmpPageNumber = pjData.length / 5;
    tmpPageNumber = Math.ceil(tmpPageNumber);
    setAllPage(tmpPageNumber);
  }

  useEffect(() => {
    calculatePageNumbers();
  }, [pjData]);

  useEffect(() => {
    setPjPageData(projectData.project.slice(((currentPage-1)*5), (currentPage*5)))
  }, [currentPage])

  // 시작 페이지와 끝 페이지 계산
  let startPage = currentPage - 2;
  if (startPage < 1) {
    startPage = 1;
  }
  let endPage = startPage + 4;
  if (endPage > allPage) {
    endPage = allPage;
    startPage = Math.max(endPage - 4, 1);
  }

  return(
    <div className='majorContainer'>
      <div className='subContainer'>
        {/* 상단 */}
        <div className='majorText'>프로젝트</div>
        {/* 중단 */}
        {/* 게시글 목록 */}
        <div>
        <div>
          <div className='IndividualProjectDiv' to="/project">
            <div className='IndividualProjectNumber'><p className='topText'>순번</p></div>
            <div className='IndividualProjectTitle'><p className='topText'>프로젝트명</p></div>
            <div className='IndividualProjectOutline'><p className='topText'>개요</p></div>
            <div className='IndividualProjectDivImageContain'><p className='topText'>프로젝트 이미지</p></div>
          </div>
          <hr className='IndividualHrTop'/>
        </div>
          {
            pjPageData.map((item, index) => {
              return(
                <div>
                  <Link className='IndividualProjectDiv' to="/project" key={index} onClick={() => {dispatch(handleChangeProjectPageNum(item.id))}}>
                      <div className='IndividualProjectNumber'>{index+1 + (currentPage -1) * 5}</div>
                      <div className='IndividualProjectTitle'>{item.projectName}</div>
                      <div className='IndividualProjectOutline'>{item.outline}</div>
                      <div className='IndividualProjectDivImageContain'>
                        <img src={item.projectImage} alt="프로젝트 이미지" className='IndividualProjectDivImage'/>
                    </div>
                  </Link>
                  <hr className='IndividualHr'/>
                </div>
              )
            })

          }

        </div>
        {/* 하단 */}
        {/* 페이지 */}
        <div className='pageButtonDiv'>
          {Array.from({length: endPage - startPage + 1}, (_, index) => startPage + index).map((pageNumber) => (
            <div key={pageNumber} className='pageButton' onClick={() => {setCurrentPage(pageNumber)}} style={{color: pageNumber===currentPage ? '#ffffff': 'gray'}}>
              {pageNumber}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectSelectorComponent