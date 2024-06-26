import { Button, Center, Circle, HStack, Input, Spinner, Stack, Text } from "@chakra-ui/react"
import { CheckCircleIcon,CloseIcon} from "@chakra-ui/icons"
import { useState } from "react";
import axios from "axios";
import { useAuthContext } from "./App";

const Authentication = () => {
  const [cred, setCred] = useState({ username: "", password: "" });
  const [isRegistered, setIsRegistered] = useState(false)
  const [loginStatus, setLoginStatus] = useState("")
  const [statusLoading, setStatusLoading] = useState(false)
  const { setAuthenticated, setUserGlobalData,userGlobalData } = useAuthContext()

  const handleCred = (e) => {
    setCred({ ...cred, [e.target.name]: e.target.value })
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    setStatusLoading(true);
    if (isRegistered) {
      const res = await axios.post("https://my-api-kappa-flax.vercel.app/login", { ...cred })
      setStatusLoading(false)
      setLoginStatus(res.data?.message)
      if (res.status===200) {    
          setAuthenticated(true);
          setUserGlobalData({token:res.data?.jwtToken, username:cred.username});
          sessionStorage.setItem('token',res.data?.jwtToken)
          sessionStorage.setItem('username',cred.username)
      }
    }
    else {
      const res = await axios.post("https://my-api-kappa-flax.vercel.app/sign-up", { ...cred })
      setStatusLoading(false)
      setLoginStatus(res.data)
    }
  }


  return (
    <Center h="98vh">
      <form onSubmit={handleLogin}>
        <Stack border="2px" borderColor="aliceblue" borderRadius={35}
          alignItems="center" p="6%" bgColor="azure"
          boxShadow="lg"
          width="40vh"
          h={"40vh"}
          justifyContent={"center"}>

          {loginStatus.length > 0
            ?(<HStack color={loginStatus.includes("successfully") ? "green" : "red"} fontWeight={"bolder"} alignItems={"center"}>
              {loginStatus.includes("success")
                ?<Text fontSize={"2rem"}><CheckCircleIcon /></Text> 
                : <Circle size="2rem" bgColor={"red"} color={"white"}><CloseIcon/></Circle>}
                <Text>{loginStatus}</Text>
             </HStack>
            ) 
            :statusLoading && <Spinner color="teal" thickness="3px" speed="2.5s"/>
          }

          <Input placeholder='User Name' value={cred.username} name="username"
            variant="flushed" borderBlockEndColor="grey" onChange={handleCred} autoComplete={"off"} required autoFocus/>
          <Input placeholder='Password' value={cred.password} name="password"
            variant="flushed" borderBlockEndColor="grey" type="password" onChange={handleCred} required />

          <Button type="submit" bgColor="lightseagreen" color={"white"} _hover={{ bgColor: "teal" }} _active={{ bgColor: "teal" }}>
            {isRegistered ? 'Login' : 'Register'}
          </Button>

          {!isRegistered &&
            <Button bgColor={"azure"}
              onClick={() => { setIsRegistered(true); setLoginStatus(""); setCred({ username: "", password: "" }) }}
              fontSize={".8rem"} _hover={{ fontWeight: "bolder" }} _active>
              Already registered, I want to Login
            </Button>}

        </Stack>
      </form>
    </Center>

  );
}
export default Authentication;
