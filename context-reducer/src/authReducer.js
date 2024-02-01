export const SignInReducer = (state, action) => {
    switch(action.type) {
        case 'UPDATE_SIGN_IN':
            return {
                signedInToken: action.payload.signedInToken
            }
        default:
            return state
    }
}