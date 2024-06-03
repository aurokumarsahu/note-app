import { Box, HStack, Text } from '@chakra-ui/react'
import React from 'react'

export const Navbar = () => {
  return (
    <div>
        <HStack>
            <Text>Tasks</Text>
            <Text>Visualiser</Text>
        </HStack>
    </div>
  )
}
