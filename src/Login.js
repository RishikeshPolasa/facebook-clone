import { Button } from '@material-ui/core'
import React from 'react'
import logo from './images/fb_logo.png'
import {auth,provider} from './firebase'
import {useStateValue} from './StateProvider'
import './Login.css'
import { actionTypes } from './reducer'
function Login() {
        const [state,dispatch]=useStateValue();
        const signIn = () =>{
                //sign in...
                auth.signInWithPopup(provider)
                        .then((result)=>{
                                dispatch({
                                        type:actionTypes.SET_USER,
                                        user:result.user,
                                });
                        })
                        .catch((error)=>alert(error.message));
        };
        return (
                <div className="login">
                      <div className="login__logo">
                                <img 
                                        src={logo}
                                        alt="Facebook"
                                />
                                <h3>facebook</h3>
                        </div>  
                        <Button type="submit" onClick={signIn}>
                                SignIn
                        </Button>
                </div>
        )
}

export default Login
