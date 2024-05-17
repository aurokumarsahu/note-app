import { createContext, useContext, useState } from "react";
import Authentication from "./Authentication";
import Dashboard from "./Dashboard";
import { Routes, Route,useNavigate} from "react-router-dom";

const AuthContext=createContext();
const useAuthContext=()=>{
  return useContext(AuthContext)
}

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const navigate=useNavigate()

  return (
    <>
    <AuthContext.Provider value={{authenticated,setAuthenticated}}>
    {!authenticated
        ? <Authentication/>
        : <Dashboard/>
      }
      {/* <Routes>
          <Route path="/" element={<Authentication />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes> */}
    </AuthContext.Provider>
    </>
  );
}

export {useAuthContext};
export default App;
