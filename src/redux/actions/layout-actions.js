export const setCurrentPage=(page)=>{
    localStorage.setItem('current_page',page)
    return {
        type: 'CHANGE_CURRENT_PAGE',
        payload: page
        
    }
}
export const toggleTheme=(mode)=>{
    localStorage.setItem('current_theme',mode)
    
    return {
        type: 'SWITCH_THEME',
        payload: mode
        

    }
}