import { useReducer } from "react";
import { initialState, reducer } from "./App";

const Test = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  retrun(
    <>
      <h1>Test</h1>
    </>
  );
};
export default Test;
