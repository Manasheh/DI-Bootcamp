
// exmport { BUY_CAKE } from "./cakeAction";
export const  BUY_CAKE  = 'buy_cake' 

const initialState = {
    numberOfCakes: 100
}

export const cakeReducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_CAKE:
        return {
            ...state, 
            numberOfCakes: state.numberOfCakes - 1
        }
        default: return state
    }
}

