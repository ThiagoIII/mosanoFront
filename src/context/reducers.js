export const addUser = (state, action) => {
    switch (action.type) {
        case 'ADDUSER':
            const {
                payload: { data, dayMonthAge, id }
            } = action
            console.log('inside adduser', state)
            return {
                usersList: [...state.usersList, data], // state.userList.concat(action.payload)
                userSubmitted: data,
                dayMonthAge: dayMonthAge,
                id: id
            }
        case 'SHOWLEGEND':
            console.log('inside showlegend', state)
            return {
                usersList: state.usersList,
                userSubmitted: action.payload.data,
                dayMonthAge: action.payload.dayMonthAge
            }
        default:
            return state
    }
}
