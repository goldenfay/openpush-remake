const initialState={
    user: JSON.parse(localStorage.getItem('user')) || null
    
}

function userReducer(state=initialState,action){
    switch(action.type){
       case "LOGIN":
           return {...state, user: action.payload}
        default: return state//throw Error('Invalid action!');
    }   
}




export default userReducer