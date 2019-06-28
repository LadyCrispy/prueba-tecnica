export const fillPhones = allPhones =>({
        type: 'SET_ALL_PHONES',
        payload: allPhones
})


export const getThePhone =(id)=>({
    type: 'DETAIL', 
    payload: id
})


export const goToIndex = () =>({
    type: 'GOTOINDEX'
})
