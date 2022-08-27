export const Router =(state={},action)=>{
    switch(action.type){
        case 'ROUTE':
        return action.payload
        default:
        return state
    }
}