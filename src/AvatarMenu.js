import { Menu, MenuButton, Avatar, MenuList, Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import Logout from "./Logout";

const AvatarMenu = ({ username }) => {
    return (
        <Menu placement="top">
            <MenuButton as={Button} rightIcon={<ChevronDownIcon boxSize="2rem"/>} size="fitContent" 
             borderRadius={50} iconSpacing={-1.5} bgColor={"#004C4C"} _hover _active color={"white"}>
                <Avatar name={username} size="md" ></Avatar>
            </MenuButton>

            <MenuList padding={"6%"} border="1px grey solid" >
                <Logout/>
            </MenuList>
        </Menu>
    );
}
export default AvatarMenu;