import { EditIcon,CheckIcon } from "@chakra-ui/icons";
import { Button, Card, CardBody, CardFooter, CardHeader, Divider, Icon,Text,Box,Textarea, IconButton } from "@chakra-ui/react";
import { color } from "framer-motion";
import { useState } from "react";
import { IoPersonAdd } from "react-icons/io5";
const Tiles=({Id,desc})=>{
    const [editable,setEditable]=useState(false)
    return(
        <Card bgColor={"teal"} color={"white"}>
            <CardHeader>
                <Text fontWeight={"bold"} display={"inline"}>
                    Task Id: {Id}
                </Text>
                <Icon as={!editable?EditIcon:CheckIcon} display={"inline"} float={"right"} boxSize={"1.5rem"} onClick={()=>setEditable(!editable)}/>
            </CardHeader>
            <CardBody pt={0} mt={4}>
                <Box>
                    <Textarea resize="none" value={desc} isDisabled={!editable} _disabled={{color:"white"}}
                    _focus={{border:"3px white solid"}} focusBorderColor="white" />
                </Box>
            </CardBody>
            <Divider/>
            <CardFooter>
                <Button gap={2}>
                    <Icon as={IoPersonAdd}/>
                    Add Peer
                </Button>
            </CardFooter>
        </Card>
    );
}
export default Tiles;