import { useEffect } from "react";

const Test = (props) => {

  useEffect(() => {
    return () => alert("I will soon gone");
  }, []);
  
  return (
    <>
      <h2>This is a Test Component</h2>
    </>
  );
};
export default Test;