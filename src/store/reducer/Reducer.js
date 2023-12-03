const initaialState = [];
export const reducer = (state=initaialState,action)=> {
    switch (action.type) {
        case "ADD":
            return [
                ...state, 
                action.payload
            ]
        default:
            return state
            
    }
}