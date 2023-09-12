import React from "react";
import { AuthProvider } from "./src/context/AuthContext";
import Navigation from "./src/navigation/Navigation";
import { QueryClient, QueryClientProvider } from "react-query";


{
  /* 
  MIGTH WRAP ALL CONTENT ====> USEQUERY FROM REACT QUERY
  
  */
}

const App = () => {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <AuthProvider>
        <Navigation />
      </AuthProvider>
    </QueryClientProvider>
  );
};


export default App;
