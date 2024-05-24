import {
    Box, Button, Card, CardBody, CardFooter, CardHeader, Divider,
    Editable, EditableInput, EditablePreview, EditableTextarea,
    HStack, Icon, Text, Textarea
} from "@chakra-ui/react";
import { IoPersonAdd } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import EditableControls from "./EditableControls";
import { color } from "framer-motion";

const AddTask = () => {
    return (
        <Card bgColor="lightseagreen" color={"white"}>
            <CardHeader>
                <Box>
                    <Text fontWeight={"bold"} display={"inline"}>
                        New Task
                    </Text>
                    {/* <Button float={"right"}><Icon as={IoMdAdd} /></Button> */}
                </Box>
            </CardHeader>
            <CardBody pt={0}>
                <Box>
                    <Textarea resize="none" _focus={{border:"3px white solid"}} focusBorderColor="white" />
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