import { ADDANSWER, DECRIMENT, INCRIMENT } from "./Action";

const initstate={
    count:0,
    answers:{}
}

export const Countreducer=(state=initstate, action)=>{


    switch (action.type) {
        case INCRIMENT:
            return {... state, count:state.count+1}
            
        case DECRIMENT:

        return {... state, count:state.count-1}
        case ADDANSWER:
            return { ...state,answers:{... state.answers,[action.idq]:action.ido}}
             
        default:

            return state;
    }
    
}
 