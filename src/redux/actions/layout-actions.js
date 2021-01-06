export const setCurrentPage=(page)=>{
    localStorage.setItem('current_page',page)
    return {
        type: 'CHANGE_CURRENT_PAGE',
        payload: page

    }
}