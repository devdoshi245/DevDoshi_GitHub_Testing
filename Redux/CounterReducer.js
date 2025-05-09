import { dec, inc } from "./CounterAction"

const initialState = {
    count:0,
    data:[]
}
const CounterReducer = (state=initialState,action)=>{
    switch(action.type){
        case inc:return {
            count: state.count+1
        }
        case dec:return {
            count: state.count-1
        }
        default: return state
    }
}

export default CounterReducer
