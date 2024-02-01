import React, { useContext } from 'react';
import { SignInContext } from './authContext';

export default function SignOutScreen(){
    const { signedIn, setSignedIn } = useContext(SignInContext)
    return (
        <>
            <button 
            onClick={()=>{
                setSignedIn({
                    type:'UPDATE_SIGN_IN',
                    payload:{
                        signedInToken:false
                    }
                })
                console.log('Value: '+signedIn.signedInToken)//working
            }}>
                Signed-Out
            </button>
        </>
    )
}