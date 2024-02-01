import React, {createContext, useReducer} from 'react';
import { SignInReducer } from './authReducer';

const SignInContext = createContext(null)

const initialValue = { signedInToken: true }

const  SignInContextProvider = ({children}) => {
    const [signedIn, setSignedIn] = useReducer(SignInReducer, initialValue)
    return (
        <SignInContext.Provider value = {{signedIn, setSignedIn}}>
            {children}
        </SignInContext.Provider>
    )
}

export { SignInContext, SignInContextProvider } 