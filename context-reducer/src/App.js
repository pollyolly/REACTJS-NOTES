import React, {useContext, useEffect} from 'react';
import SignInScreen from './SignInScreen';
import SignOutScreen from './SignOutScreen';
import { SignInContext, SignInContextProvider } from './authContext'

export default function App(){
  

  return(
      <SignInContextProvider>
        <h1> Context Reducer </h1>
       <AuthSign />
     </SignInContextProvider>
  )
}

const AuthSign = ()=>{
  const { signedIn } = useContext(SignInContext)
    console.log('App: '+signedIn.signedInToken);
   return signedIn.signedInToken ? ( <SignOutScreen />) : (<SignInScreen />)
  
}