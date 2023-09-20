import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState(null)
  
 

  const login = () => {
    setIsLoading(true)
    getToken()
    setIsLoading(false)
  }

  const getToken = async () => {
    const userToken = await AsyncStorage.getItem('token')
    if(userToken !== undefined){
      setToken(userToken)
    }
  }


  const logout = () => {
    setIsLoading(true);
    setToken(null)
    AsyncStorage.removeItem('token')
    AsyncStorage.removeItem('first_name');
    AsyncStorage.removeItem('nickname');
    setIsLoading(false)
  }

  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      const value = await AsyncStorage.getItem("token");
      setToken(value);
      setIsLoading(false)
    } catch (e) {
      console.log(`isLogged in error ${e}`)
      
    }
  }

  useEffect(()=> {
    isLoggedIn()
  }, [])

  return (
    <AuthContext.Provider value={{login, logout, isLoading, token }}>{children}</AuthContext.Provider>
  );
};
