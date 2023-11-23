// import logo from './logo.svg';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainComponent from './components/main/MainComponent'
import IntroductionComponent from './components/introduction/IntroductionComponent';
import ProfileComponent from './components/profile/ProfileComponent';
import ProjectComponent from './components/projects/ProjectComponent';
import TechstackComponent from './components/techstacks/TechstackComponent';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainComponent />} />
      <Route path='/introduction' element={<IntroductionComponent />} />
      <Route path='/profile' element={<ProfileComponent />} />
      <Route path='/techstack' element={<TechstackComponent />} />
      <Route path='/project' element={<ProjectComponent />} />
      
    </Routes>
  );
}


export default App;
