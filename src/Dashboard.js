import { Box, Center, HStack, Stack, Heading, Textarea, Text, Avatar, TagRightIcon, Skeleton, SimpleGrid } from "@chakra-ui/react";
import { useAuthContext } from "./App";
import Logout from "./Logout";
import AvatarMenu from "./AvatarMenu";
import Tiles from "./Tiles";
import AddTask from "./AddTask";
import { useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import { FaTasks } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { FaChartPie } from "react-icons/fa6";


const Dashboard = () => {
    const { userGlobalData, authenticated } = useAuthContext();
    const [tasks, setTasks] = useState([])
    return (
        <>
            {/* Header*/}
            <Center h={"9vh"} color={"white"} position="sticky" top={0} zIndex={1} bgColor="black" >
                <HStack justifyContent="space-between" w={"92vw"}>
                    <Text fontSize={"1.5rem"} fontFamily="monospace" >TaskTrack</Text>
                    <HStack>
                    <FaTasks fontSize={"1rem"}/>
                    <Text fontSize={"1rem"} fontFamily="monospace" >|</Text>
                    <IoMdSearch fontSize={"1rem"} />
                    <Text fontSize={"1rem"} fontFamily="monospace" >|</Text>
                    <FaChartPie fontSize={"1rem"} />
                    </HStack>
                    <HStack justifyContent="space-around">
                        <AvatarMenu username={sessionStorage.getItem("username")} />
                        <Text fontFamily="monospace" fontSize={"1rem"}>Hi, {sessionStorage.getItem("username")}</Text>
                    </HStack>
                </HStack>
            </Center>
            {/* Header*/}
            <HStack h={"92vh"} bgColor={"darkgrey"} spacing={0} alignItems={"start"} justifyContent={"center"}>
                <Box m={"1%"} w={"92vw"} >
                    <SimpleGrid spacing={3} columns={{ sm: 2, md: 3 }}>
                        <AddTask setTasks={setTasks} tasks={tasks}/>
                        {
                            tasks.map((task)=>{
                                return <Tiles key={task.taskId} Id={task.taskId} tasks={tasks} task={task} setTasks={setTasks}/>
                            })
                        }
                    </SimpleGrid>
                </Box>
            </HStack>
        </>
    );
}
export default Dashboard;
