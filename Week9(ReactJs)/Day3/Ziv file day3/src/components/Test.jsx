import { useEffect } from "react";

const Test = (props) => {

  useEffect(() => {
    console.log('useEffect in Test');
    return () => alert("I will soon gone");
  }, []);

  return (
    <>
      <h2>Contact Form</h2>
      <input placeholder="email"/>
    </>
  );
};
export default Test;
