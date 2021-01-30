const initialState={
    current_page: '',
    current_theme: localStorage.getItem('current_theme') || 'dark',
    
}

function userReducer(state=initialState,action){
    switch(action.type){
       case "CHANGE_CURRENT_PAGE":
           return {...state, current_page: action.payload}
       case "SWITCH_THEME":
           return {...state, current_theme: action.payload}
        //    return {...state, current_theme: state.current_theme==="dark"?"light":"dark"}
        default: return state
    }   
}




export default userReducer