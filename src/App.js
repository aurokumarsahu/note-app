import {Button, Center, Input, Stack} from "@chakra-ui/react"

function App() {
  return (
      <Center h="100vh">
          <Stack border="2px" borderColor="aliceblue" borderRadius={35} alignItems="center" p="4%"  bgColor="azure" spacing={5}>
          <Input placeholder='User Name' variant="flushed" borderBlockEndColor="grey"/>
          <Input placeholder='Password' variant="flushed" borderBlockEndColor="grey" type="password"/> 
          <Button type="submit">Login</Button>
          </Stack>
      </Center>
   
  );
}

export default App;
