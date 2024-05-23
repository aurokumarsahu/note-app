import { Box, Center, HStack, Stack, Heading, Textarea, Text, Avatar, TagRightIcon, Skeleton, SimpleGrid } from "@chakra-ui/react";
import { useAuthContext } from "./App";
import Logout from "./Logout";
import AvatarMenu from "./AvatarMenu";
import Tiles from "./Tiles";

const Dashboard = () => {
    const { userGlobalData, authenticated } = useAuthContext();
    return (
        <>
            {/* Header*/}
            <Center h={"9vh"} bgColor={"teal"} color={"white"} >
                <HStack justifyContent="space-between" w={"92vw"}>
                    <Text fontSize={"2rem"} fontFamily="monospace" >TaskTrack</Text>
                    <HStack justifyContent="space-around">
                        <AvatarMenu username={sessionStorage.getItem("username")} />
                        <Text>Hi, {sessionStorage.getItem("username")}</Text>
                    </HStack>
                </HStack>
            </Center>
            {/* Header*/}

            <HStack h={"92vh"} bgColor={"azure"} spacing={0} alignItems={"start"} justifyContent={"center"}>
                <Box m={"1%"} w={"92vw"} >
                    <SimpleGrid spacing={3} columns={{sm:2,md:3}}>
                    {[1,2,3,4,5,6].map((x,inx)=>{
                        return <Tiles key={x} Id={x}/>
                    })}
                    </SimpleGrid>
                    <Stack>
                        <Skeleton height='20px'  bgColor={"teal"}/>
                        <Skeleton height='20px' color={"teal"}/>
                        <Skeleton height='20px' color={"teal"}/>
                    </Stack>
                    <Text color={"grey"} as={"b"}>Development in progress</Text>
                </Box>
            </HStack>
        </>
    );
}
export default Dashboard;