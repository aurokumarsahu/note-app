import { useState } from "react";
import Authentication from "./Authentication";
import Dashboard from "./Dashboard";

function App() {
  const [authenticated,setAuthenticated]=useState(false);
  return (
    <>
      <Authentication/>
      {authenticated && <Dashboard />}
    </>
  );
}

export default App;
