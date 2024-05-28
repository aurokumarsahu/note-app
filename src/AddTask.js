import {
    Box, Button, Card, CardBody, CardFooter, CardHeader, Divider,
    Editable, EditableInput, EditablePreview, EditableTextarea,
    HStack, Icon, Text, Textarea
} from "@chakra-ui/react";
import { IoPersonAdd } from "react-icons/io5";
import { useRef } from "react";
import { AddIcon } from "@chakra-ui/icons";

const AddTask = ({ tasks,setTasks, Id }) => {
    const createTaskTile = () => {
        setTasks((prevTask) => {
            return [...prevTask,
            {
                taskId: prevTask.length+1,
                taskDescription: textAreaRef.current.value
            }
            ]
        })
    }
    const textAreaRef = useRef()
    return (
        <Card bgColor="lightseagreen" color={"white"}>
            <CardHeader>
                <Box alignItems={"flex-start"}>
                    <Text fontWeight={"bold"} display={"inline"}>New Task</Text>
                    <AddIcon bgColor={"inherit"} _hover={{ bgColor: "inherit" }} _active={{ bgColor: "inherit" }}
                        float={"right"} p={0} onClick={createTaskTile} boxSize={"1.5rem"} />
                </Box>
            </CardHeader>
            <CardBody>
                <Box>
                    <Textarea resize="none" _focus={{ border: "3px white solid" }} focusBorderColor="white" ref={textAreaRef} />
                </Box>
            </CardBody>
            <Divider />
            <CardFooter >
                <HStack title="Add Peer">
                    <Icon as={IoPersonAdd} boxSize={"1.5rem"} />
                    <Text>Add Peer</Text>
                </HStack>
            </CardFooter>
        </Card>
    );
}
export default AddTask;