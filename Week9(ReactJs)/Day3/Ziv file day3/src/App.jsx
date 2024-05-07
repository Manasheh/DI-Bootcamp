import { useState, useEffect } from "react";
import "./App.css";
// import Parent from "./components/Parent";
import Child from "./components/Child";
import Counter from "./components/Counter";
import ErrorBoundary from "./ErrorBoundary";
function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type='submit' value='Submit' />
      </form>
      <h2>Error Boundary</h2>
      {/* <Parent auth='rretrt'>
        <Child />
      </Parent> */}
      <ErrorBoundary fallback={<p>counter 1 was down</p>}>
        <Counter />
      </ErrorBoundary>
      <ErrorBoundary fallback={<p>counter 2 was down</p>}>
        <Counter />
      </ErrorBoundary>
    </>
  );
}

export default App;
