import { Box, Center, HStack, Stack, Heading, Textarea, Text, Avatar, TagRightIcon, Skeleton, SimpleGrid } from "@chakra-ui/react";
import { useAuthContext } from "./App";
import Logout from "./Logout";
import AvatarMenu from "./AvatarMenu";
import Tiles from "./Tiles";
import AddTask from "./AddTask";
import { useEffect, useState } from "react";

const Dashboard = () => {
    const { userGlobalData, authenticated } = useAuthContext();
    const [tasks, setTasks] = useState([])
    return (
        <>
            {/* Header*/}
            <Center h={"9vh"} color={"white"} position="sticky" top={0} zIndex={1} bgColor="#004C4C" >
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
                    <SimpleGrid spacing={3} columns={{ sm: 2, md: 3 }}>
                        <AddTask setTasks={setTasks}/>
                        {
                            tasks.map((task,inx)=>{
                                return <Tiles key={(inx+1)*10} Id={inx+1} desc={task.taskDescription} setTasks={setTasks}/>
                            })
                        }
                    </SimpleGrid>
                </Box>
            </HStack>
        </>
    );
}
export default Dashboard;