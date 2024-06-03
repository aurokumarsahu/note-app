import { EditIcon,CheckIcon } from "@chakra-ui/icons";
import { Button, Card, CardBody, CardFooter, CardHeader, Divider, Icon,Text,Box,Textarea, IconButton,HStack } from "@chakra-ui/react";
import { color } from "framer-motion";
import { useDebugValue, useState } from "react";
import { IoPersonAdd } from "react-icons/io5";
import Priority from "./Priority";
const Tiles=({Id,tasks,task,setTasks})=>{
    const [editable,setEditable]=useState(false)
    const editTile=(e)=>{
        const updatedTask=[...tasks]
        updatedTask[Id-1].taskDescription=e.target.value
        setTasks(updatedTask)
        
    }
    return(
        <Card bgColor={"black"} color={"white"}>
            <CardHeader>
                <Text fontWeight={"bold"} display={"inline"}>
                    Task Id: {Id}
                </Text>
                <Icon as={!editable?EditIcon:CheckIcon} display={"inline"} float={"right"} boxSize={"1.5rem"} onClick={()=>setEditable(!editable)}/>
            </CardHeader>
            <CardBody>
                <Box>
                    <Textarea resize="none" value={task.taskDescription} isDisabled={!editable} _disabled={{color:"white"}}
                    _focus={{border:"3px white solid"}} focusBorderColor="white"
                    onChange={editTile} />
                </Box>
            </CardBody>
            <Divider/>
            <CardFooter>
                <HStack title="Add Peer">
                    <Icon as={IoPersonAdd} boxSize={"1.5rem"}/>
                     <Text>Add Peer</Text>
                </HStack>
                <HStack gap={"0.5rem"} ml={"auto"}>
                    <Priority/>
                </HStack>
            </CardFooter>       
        </Card>
    );
}
export default Tiles;