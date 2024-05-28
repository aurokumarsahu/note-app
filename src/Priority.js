import { ArrowDownIcon, ArrowUpIcon } from '@chakra-ui/icons'
import { Text, textDecoration } from '@chakra-ui/react'
import { useState } from 'react'

const Priority = () => {
    const [priority, setPriority] = useState("Low");
    const upPriority = () => {
        switch (priority) {
            case "Low":
                setPriority("Medium");
                break;
            case "Medium":
                setPriority("High");
                break;
        }
    }
    const downPriority = () => {
        switch (priority) {
            case "High":
                setPriority("Medium");
                break;
            case "Medium":
                setPriority("Low");
                break;
        }

    }
    return (
        <>
            <ArrowUpIcon boxSize={"1.5rem"} onClick={upPriority} />
            <Text fontWeight={"bolder"} color={priority=="Low"?"lightgreen":priority=="Medium"?"yellow":"#ffa500"}>
                {priority}
            </Text>
            <ArrowDownIcon boxSize={"1.5rem"} onClick={downPriority} />
        </>
    )
}

export default Priority     