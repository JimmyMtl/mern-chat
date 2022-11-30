const AuthReducer = (state, action) => {
    switch (action.type) {
        case 'SET_USER':
            localStorage.setItem("auth", JSON.stringify(action.payload))
            console.log(localStorage.getItem("auth"))
            console.log(action.payload)
            return {
                ...state,
                auth: action.payload || {},
            }
        default:
            return state
    }
}
export default AuthReducer;