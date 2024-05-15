import { useState } from "react";
import Authentication from "./Authentication";
import Dashboard from "./Dashboard";
import { Routes, Route, useNavigate, Outlet } from "react-router-dom";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();
  const navigateToDashboard = () => {
    if (authenticated)
      navigate('/dashboard')
  }
  return (
    <>
      {!authenticated
        ? <Authentication />
        : (<Routes>
          <Route path="/" element={<Authentication />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>)
      }
    </>
  );
}

export default App;
