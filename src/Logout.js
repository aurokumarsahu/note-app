import { Button } from "@chakra-ui/react"
import { useAuthContext } from "./App";

const Logout = () => {

    const {authenticated,setAuthenticated}=useAuthContext();

    const clearSession=()=>{
        sessionStorage.clear();
        setAuthenticated(false)
    }
    return (
        <Button onClick={clearSession}> 
            Log Out
        </Button>
    )
}

export default Logout