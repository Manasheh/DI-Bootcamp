import React from 'react'
import BuggyCounter from '../BuggyCounter';
import ErrorBoundary from './Components/ErrorBoundary';
import './App.css'
function App() {
    // return (
    //     <>
    //   <ErrorBoundary>
    //     <BuggyCounter /> 
    //     <BuggyCounter />
    //   </ErrorBoundary>
    //   <ErrorBoundary>
    //     <BuggyCounter />
    //   </ErrorBoundary>
    //   <ErrorBoundary>
    //     <BuggyCounter />
    //   </ErrorBoundary>
    //   </>
    // );

    return (
      <div>
          <BuggyCounter />
      </div>
  );
  }
  
  export default App;