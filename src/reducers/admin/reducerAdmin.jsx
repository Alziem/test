const INITIAL_STATE = {
    admin: {}
}

const reducerDoctor = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GETDOCTOR':
            return {
                ...state,
                admin: action.payload.data
            }
        default:
            return state
    }
}

export default reducerDoctor;