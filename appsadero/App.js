import React from "react";
import { AuthProvider } from "./src/context/AuthContext";
import Navigation from "./src/navigation/Navigation";

{
  /* 
  MIGTH WRAP ALL CONTENT ====> USEQUERY FROM REACT QUERY
  <QueryClientProvider client={new QueryClient()}>

    </QueryClientProvider> 
*/
}

const App = () => {
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
};

export default App;
