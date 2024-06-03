import { Button } from "@chakra-ui/react"
import { useAuthContext } from "./App";

const Logout = () => {

    const {authenticated,setAuthenticated}=useAuthContext();

    const clearSession=()=>{
        sessionStorage.clear();
        setAuthenticated(false)
    }
    return (
        <Button onClick={clearSession} bgColor={"black"} color={"white"} _hover _active> 
            Log Out
        </Button>
    )
}

export default Logout