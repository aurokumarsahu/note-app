import { Button, Center, Input, Stack, Text } from "@chakra-ui/react"
import { useState } from "react";
import axios from "axios";

function App() {
  const [cred, setCred] = useState({ username: "", password: "" });
  const [isRegistered, setIsRegistered] = useState(false)
  const [loginStatus, setLoginStatus] = useState("")

  const handleCred = (e) => {
    setCred({ ...cred, [e.target.name]: e.target.value })
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    //console.log(cred);
    if (isRegistered) {
      const res = await axios.post("https://my-api-kappa-flax.vercel.app/login", { ...cred })
      setLoginStatus(res.data)
    }
    else {
      const res = await axios.post("https://my-api-kappa-flax.vercel.app/sign-up", { ...cred })
      setLoginStatus(res.data)
    }
  }
  return (
    <Center h="100vh">
      <form onSubmit={handleLogin}>
        <Stack border="2px" borderColor="aliceblue" borderRadius={35}
          alignItems="center" p="6%" pb={0} bgColor="azure" spacing={5}
          boxShadow="lg"
          width="40vh"
          h={"40vh"}
          justifyContent={"center"}>
          {loginStatus.length > 0 &&
            <Text color={loginStatus.includes("successfully") ? "green" : "red"} fontWeight={"bolder"}>{loginStatus.includes("success") ? '✅' : '❌'}{loginStatus}</Text>
          }
          <Input placeholder='User Name' name="username" variant="flushed" borderBlockEndColor="grey" onChange={handleCred} required />
          <Input placeholder='Password' name="password" variant="flushed" borderBlockEndColor="grey" type="password" onChange={handleCred} required/>
          <Button type="submit" bgColor="lightseagreen" color={"white"} _hover _active={{ bgColor: "teal" }} >{isRegistered ? 'Login' : 'Register'}</Button>
          {!isRegistered && <Button bgColor={"azure"} onClick={() => setIsRegistered(true)} fontSize={".8rem"} _hover={{ fontWeight: "bolder" }} _active>
            Already registered, I want to Login
          </Button>}
        </Stack>
      </form>
    </Center>

  );
}

export default App;
