import { ArrowLeftIcon } from "@chakra-ui/icons";
import { Button, Card, CardBody, CardFooter, CardHeader, Divider, Icon,Text,Box,Textarea } from "@chakra-ui/react";
import { IoPersonAdd } from "react-icons/io5";
const Tiles=({Id})=>{
    return(
        <Card bgColor={"teal"} color={"white"}>
            <CardHeader>
                <Text fontWeight={"bold"}>
                    Task Id: {Id}
                </Text>
            </CardHeader>
            <CardBody pt={0} mt={4}>
                <Box>
                    <Textarea resize="none" _focus={{border:"3px white solid"}} focusBorderColor="white" />
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