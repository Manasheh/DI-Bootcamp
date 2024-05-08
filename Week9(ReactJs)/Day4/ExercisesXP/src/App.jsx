import React from 'react'
import { ErrorBoundary } from './components/ErrorBoundary.component'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route, NavLink } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
// import { PostList } from './components/PostList';
import { SocialMedia } from './components/SocialMedia';
import Skills from './components/Skills';
import Experiences from './components/Experiences';

export default class App extends React.Component {
  render() {
    const route = <Routes>
    <Route path='/' element={<SocialMedia />} />
    <Route path='/skill' element={<Skills/>} />
    <Route path='/experiences' element={<Experiences />} />
  </Routes>
    return (
    <ErrorBoundary>
      <BrowserRouter>
        <MyComponent />
        <ErrorBoundary>{route}</ErrorBoundary>
      </BrowserRouter >
     
    </ErrorBoundary>
    );
  }
}

function MyComponent () {
  return (
    <>
      <h1>Welcome to react router</h1>
      <NavLink to= '/' >SocialMedia</NavLink> {''}
      <NavLink to= '/skill' >Skills</NavLink>  {''}
      <NavLink to= '/experiences' >Experience</NavLink> {''}
      
    </>
  )
}


