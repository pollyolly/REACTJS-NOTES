import React, { useContext } from 'react';
import { SignInContext } from './authContext';

export default function SignInScreen(){
    const { signedIn, setSignedIn } = useContext(SignInContext)
    return (
        <>
            <button 
            onClick={()=>{
                setSignedIn({
                    type:'UPDATE_SIGN_IN',
                    payload:{
                        signedInToken:true
                    }
                })
                console.log('Value: '+signedIn.signedInToken)//working 
            }}>
                Signed-In
            </button>
        </>
    )
}