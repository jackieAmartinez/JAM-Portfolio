import React from "react";
import {
  chakra,
  Box,
  useColorModeValue,
  Flex,
  // IconButton,
  Heading,
  Button,
  Stack,
} from "@chakra-ui/react";
// import { AiOutlineMenu } from "react-icons/ai";
import images from "../assets/images/jedShoot.jpg"

export default function App(){
  const bg = useColorModeValue("white", "gray.800");

  return (
    <chakra.header>
      <chakra.nav bg={bg} shadow="base">
        <Box mx="auto" px={6} py={3} maxW="full">
          <Box
            display={{ md: "flex" }}
            alignItems={{ md: "center" }}
            justifyContent={{ md: "space-between" }}
          >
          </Box>
        </Box>
      </chakra.nav>

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
              Build Your new{" "}

            </Heading>
            <Button
              colorScheme="brand"
              textTransform="uppercase"
              w="fit-content"
            >
              Start project
            </Button>
          </Stack>
        </Flex>
      </Box>
    </chakra.header>
  );
};

