import { Box, Center, HStack, Stack, Heading, Textarea, Text, Avatar, TagRightIcon } from "@chakra-ui/react";
import { useAuthContext } from "./App";


const Dashboard = () => {
    const { userGlobalName, authenticated } = useAuthContext();
    return (
        <>
            {/* Header*/}
            <Center h={"9vh"} bgColor={"teal"} color={"white"} >
                <HStack  justifyContent="space-between" w={"92vw"}>
                    <Text fontSize={"2rem"} fontFamily={"cursive"} >WriteSpace</Text>
                    <HStack >
                        <Avatar name={userGlobalName} size="md"></Avatar>
                        <Text>Hi, {userGlobalName}</Text>
                    </HStack>
                </HStack>
            </Center>
            {/* Header*/}

            <HStack h={"92vh"} bgColor={"azure"} spacing={0} alignItems={"start"} justifyContent={"center"}>
                <Box  m={"1%"} w={"92vw"} >
                    <Textarea placeholder="Enter your content" border={"4px solid teal"} resize={"vertical"} _hover={{ borderColor: "teal" }}
                        _focus={{ borderColor: "teal" }} >
                    </Textarea>
                </Box>
            </HStack>
        </>
    );
}
export default Dashboard;