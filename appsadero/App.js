import React from "react";
import { AuthProvider } from "./src/context/AuthContext";
import Navigation from "./src/navigation/Navigation";
import { QueryClient, QueryClientProvider } from "react-query";
import AppNav from "./src/navigation/AppNav";
import { MenuProvider } from "react-native-popup-menu";


{
  /* 
  MIGTH WRAP ALL CONTENT ====> USEQUERY FROM REACT QUERY
  
  */
}

const App = () => {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <MenuProvider>
        <AuthProvider>
          <AppNav />
        </AuthProvider>
      </MenuProvider>
    </QueryClientProvider>
  );
};


export default App;
