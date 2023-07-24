import React from "react";
import {
  chakra,
  Box,
  Flex,
  Heading,
  Stack,
} from "@chakra-ui/react";

import images from "../assets/images/nebula.jpg"

export default function App(){
  // const bg = useColorModeValue("white", "gray.800");

  return (
    <chakra.header>
      <Box
        w="full"
        h="container.sm"
        backgroundImage= { images }
        bgPos="center"
        bgSize="cover"
      >
        <Flex
          align="center"
          pos="relative"
          justify="center"
          boxSize="full"
          bg="blackAlpha.700"
        >
          <Stack textAlign="center" alignItems="center" spacing={6}>
            <Heading
              fontSize={["2xl", "3xl"]}
              fontWeight="semibold"
              color="white"
              textTransform="uppercase"
            >
              hello there{" "}

            </Heading>
          </Stack>
        </Flex>

        
      </Box>

      
    </chakra.header>


  );
};

