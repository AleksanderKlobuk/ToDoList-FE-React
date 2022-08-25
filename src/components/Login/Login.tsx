import React, { ChangeEvent, useContext, useEffect, useReducer, useState } from "react";
import AuthContext from "../store/AuthContext";
import styles from "./Login.module.css";

type State = {
  value:string
}
type ActionEmail =
  | { type: 'EMAIL_INPUT'; val: string; }
  | { type: 'CHECK_EMAIL_INPUT_WHEN_BLUR'; val: string }
  | { type: 'CHECK_EMAIL_INPUT_WHEN_BLUR'}
  type ActionPassword =
  | { type: 'PASSWORD_INPUT'; val: string; }
  | { type: 'CHECK_PASSWORD_INPUT_WHEN_BLUR'; val: string }
  | { type: 'CHECK_PASSWORD_INPUT_WHEN_BLUR'}


const emailReducer = (state:State, action:ActionEmail)=> {
  if(action.type === 'EMAIL_INPUT'){
    return {value:action.val , isValid: action.val.includes('@')}
  }
  if(action.type === 'CHECK_EMAIL_INPUT_WHEN_BLUR'){console.log(state.value + 'THIS IS STATE')
    return {value:state.value , isValid: state.value.includes('@')}
  } 
  // else   Try if else works
  return {value:'', isValid:false}
}

const passwordReducer = (state:State,action:ActionPassword) => {
  if(action.type === 'PASSWORD_INPUT'){
    return{value:action.val, isValid:action.val.trim().length > 6}
  }
  if(action.type ==='CHECK_PASSWORD_INPUT_WHEN_BLUR'){
    return{value:state.value, isValid:state.value.trim().length > 6}
  }
  return {value:'', isValid:false}
}

const Login = () => {
  const AuthCtx = useContext(AuthContext)

  const [formStateValid, setFormStateValid] = useState(false)
  const [emailState,dispatchEmail] = useReducer(emailReducer, {value:'', isValid: false})
  const [passwordState,dispatchPassword] = useReducer(passwordReducer, {value:'', isValid: false})

  const {isValid:emailIsValid} = emailState //This is how we assign isValid  boolean to emailIsValid. So it's isValid of emailState with value true or false
  const {isValid:passwordIsValid} = passwordState
  
  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log('Checking form validity!');
      setFormStateValid(
        emailIsValid && passwordIsValid
      );
    }, 500);

    return () => {
      console.log('CLEANUP');
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);


  const emailChangeHandler = (event:ChangeEvent<HTMLInputElement>) => {
    dispatchEmail({type:'EMAIL_INPUT',val:event.target.value})
  };

  const emailValidatorHandler = () => {
    dispatchEmail({type:'CHECK_EMAIL_INPUT_WHEN_BLUR'})
  };

  const passwordChangeHandler = (event:ChangeEvent<HTMLInputElement>) => {
    dispatchPassword({type:'PASSWORD_INPUT', val:event.target.value})
  };  
  const passwordValidatorHandler = () => {
    dispatchPassword({type:'CHECK_PASSWORD_INPUT_WHEN_BLUR'})
  };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    AuthCtx.onLogin(emailState.value, passwordState.value)
  };

  return (
    <div className={styles.login_container}>
      <form onSubmit={submitHandler}>
        <div className={styles.form_container}>

          <label htmlFor="email">User</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            placeholder="Email Adress"
            onChange={emailChangeHandler}
            onBlur={emailValidatorHandler}
          ></input>

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={passwordValidatorHandler}
          ></input>

          <button type="submit" disabled={!formStateValid}>Login / Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
