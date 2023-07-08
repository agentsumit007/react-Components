import React, { Component } from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/home';
import PageNotFound from './pages/ErrorPages/404';
import LandingPage from './pages/Landing/landing-page';

class App extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/home' element={<Home />} />
          <Route path='*' element={<PageNotFound/>} />
        </Routes>
      </div>
    );
  }
}

export default App;
