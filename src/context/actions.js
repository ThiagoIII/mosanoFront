export const addUserAction = (dispatch, infoToSend) => {
    dispatch({
        type: 'ADDUSER',
        payload: infoToSend
    })
}
export const showUserLegend = (dispatch, infoToSend) => {
    dispatch({
        type: 'SHOWLEGEND',
        payload: infoToSend
    })
}
