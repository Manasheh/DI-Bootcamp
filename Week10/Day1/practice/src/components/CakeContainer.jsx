import React from 'react'
import { connect } from 'react-redux'
import { useSelector, useDispatch } from 'react-redux'
// import { buyCakeForMe } from '../redux/cakes/cakeAction'
import { BUY_CAKE } from '../redux/cakes/cakeReducer'
function CakeContainer(props) {
  const newState = useSelector(state=> state.cake.numberOfCakes)
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch({type: BUY_CAKE})
  }
  return (
    <div>
        <h2>Number of cakes</h2>
        <h3>{newState}</h3>
        <button onClick={() => handleClick()}>Buy cakes</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    numberOfCakes : state.cake.numberOfCakes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch({type: BUY_CAKE})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)