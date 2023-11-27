import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavbarComponent from './components/main/NavbarComponent';
import MainComponent from './components/main/MainComponent'
import IntroductionComponent from './components/introduction/IntroductionComponent';
import ProfileComponent from './components/profile/ProfileComponent';
import ProjectComponent from './components/projects/ProjectComponent';
import TechstackComponent from './components/techstacks/TechstackComponent';
import ProjectSelectorComponent from './components/projects/ProjectSelectorComponent'

function App() {
  return (
    <div className='App'>
      <div className='NavContainer'>
        <NavbarComponent />
      </div>
      <div className='AppContainer'>
        <Routes>
          <Route path='/' element={<MainComponent />} />
          <Route path='/introduction' element={<IntroductionComponent />} />
          <Route path='/profile' element={<ProfileComponent />} />
          <Route path='/techstack' element={<TechstackComponent />} />
          <Route path='/project' element={<ProjectComponent />} />
          <Route path='/projectSelect' element={<ProjectSelectorComponent />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
