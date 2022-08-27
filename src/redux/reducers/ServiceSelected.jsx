export const Service =(state={},action)=>{
    switch(action.type){
        case 'SERVICE':
        return action.payload
        default:
        return state
    }
}