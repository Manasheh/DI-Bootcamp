import { connect } from "react-redux"; // one option to connect class component to redux
import { increment, decrement } from '../redux/actions'

const Counter = (props) => {
    return (
        <>
            <h2>Counter Redux</h2>
            <button onClick={() => props.add()}>+</button>
            count = {props.count}
            <button onClick={() => props.minus()}> - </button>
        </>

    )
}

const mapStateToProps = (state) => {
    return {
        count: state.counter.count
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        add: () => dispatch(increment()),
        minus: () =>  dispatch(decrement()),
        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter); // for class component