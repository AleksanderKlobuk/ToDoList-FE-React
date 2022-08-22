import React, { useEffect, useState } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogin: (mail: string, password: string) => {},
  onLogout: () => {},
});

export const AuthProvider = (props:any) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(()=>{
    const isLoggedInCheckAndSet = localStorage.getItem('isLoggedIn')
    if(isLoggedInCheckAndSet === '1'){
        setIsLoggedIn(true)
    }
  },[])

  const loginHandler = (email: string, password: string) => {
    console.log('TO,......' + isLoggedIn)
    localStorage.setItem('isLoggedIn', "1");
    setIsLoggedIn(true);
    
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogin: loginHandler,
        onLogout: logoutHandler,
      }}
    >{props.children}</AuthContext.Provider>
  );
};

export default AuthContext;
