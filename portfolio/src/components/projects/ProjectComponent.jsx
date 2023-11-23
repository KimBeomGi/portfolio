// import logo from './logo.svg';
import React from 'react';
// import { Route, Routes } from 'react-router-dom';
import { Outlet, Link } from "react-router-dom";

function ProjectComponent() {
  return (
    <div>
      <p>프로젝트</p>
      <p>
      <Link to="/introduction">소개</Link>
      </p>
      <p>
      <Link to="/profile">약력</Link>
      </p>
      <p>
      <Link to="/techstack">기술 스택</Link>
      </p>
      <p>
      <Link to="/project">프로젝트</Link>
      </p>
      <Outlet />
    </div>
  );
}

export default ProjectComponent;
