import {
    Box, Button, Card, CardBody, CardFooter, CardHeader, Divider,
    Editable, EditableInput, EditablePreview, EditableTextarea,
    HStack, Icon, Text, Textarea
} from "@chakra-ui/react";
import { IoPersonAdd } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import EditableControls from "./EditableControls";
import { color } from "framer-motion";
import { useRef } from "react";

const AddTask = ({setTasks}) => {
    const createTaskTile=()=>{
        setTasks((prevTask)=>{
            return [...prevTask,{taskDescription:textAreaRef.current.value}]
        })
    }
    const textAreaRef=useRef()
    return (
        <Card bgColor="lightseagreen" color={"white"}>
            <CardHeader>
                <Box alignItems={"flex-start"}>
                    <Text fontWeight={"bold"} display={"inline"}>New Task</Text>
                    <Button bgColor={"inherit"} _hover={{bgColor:"inherit"}} _active={{bgColor:"inherit"}} 
                    float={"right"} p={0} onClick={createTaskTile}>
                        <Icon as={IoMdAdd} boxSize={"2.5rem"} color={"white"}/>
                        </Button>
                </Box>
            </CardHeader>
            <CardBody pt={0}>
                <Box>
                    <Textarea resize="none" _focus={{border:"3px white solid"}} focusBorderColor="white" ref={textAreaRef} />
                </Box>
            </CardBody>
            <Divider />
            <CardFooter>
                <Button gap={2}>
                    <Icon as={IoPersonAdd} />
                    Add Peer
                </Button>
            </CardFooter>
        </Card>
    );
}
export default AddTask;