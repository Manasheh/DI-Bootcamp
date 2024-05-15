import { connect,  useSelector, useDispatch } from 'react-redux'
import { changeText,CHANGE_TEXT } from '../redux/actions'
import './App.css'
// 1 create actions, reducer, store
// 2 connect store to react
// 3 getting text from store state
function App(props) {
  const text = useSelector((state) => state.exampleReducer.text)
  const dispatch = useDispatch()
  return (
    <>
      {/* <h2>Redux - Example</h2>
      <h3>Text = {props.text}</h3>
      <input onChange={(e) => props.changeText(e.target.value)}/> */}
      <h2>Redux - Example</h2>
      <h3>Text = {text}</h3>
      <input onChange={(e) => dispatch({type: CHANGE_TEXT, payload: e.target.value})}/>
     
    </>
  )
}

// const mapStateToProps = (state) => {
//   return {
//     text: state.exampleReducer.text
//   }
// }
// const mapDispatchToProps = (dispatch) => {
//   return {
//     changeText : (val) => dispatch(changeText(val))
//   }
// }
export default App
