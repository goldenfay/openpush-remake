const initialState={
    current_page: ''
    
}

function userReducer(state=initialState,action){
    switch(action.type){
       case "CHANGE_CURRENT_PAGE":
           return {...state, current_page: action.payload}
        default: return state
    }   
}




export default userReducer