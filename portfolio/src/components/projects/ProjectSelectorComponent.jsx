import React, { useEffect, useState } from 'react';
import projectData from '../../datas/projectData';

function ProjectSelectorComponent() {
  const [pjData, setPjData] = useState(projectData.project);
  const [allPage, setAllPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  // function calculatePageNumbers() {
  //   let tmpPageNumber = pjData.length / 5;
  //   tmpPageNumber = Math.ceil(tmpPageNumber);
  //   setAllPage(tmpPageNumber);
  // }

  // useEffect(() => {
  //   calculatePageNumbers();
  // }, [pjData]);

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
          {
            pjData.map((item, index) => {
              return(
                <div className='IndividualProjectDiv' key={index}>
                  <div className='IndividualProjectTitle'>{item.projectName}</div>
                  <div className='IndividualProjectOutline'>{item.outline}</div>
                  <div className='IndividualProjectDivImageContain'>
                    <img src={item.projectImage} alt="프로젝트 이미지" className='IndividualProjectDivImage'/>
                  </div>
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