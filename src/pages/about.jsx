import React from "react";
import { Box, Image, Flex, Link, chakra } from "@chakra-ui/react";
import images from "../assets/images/jedShoot.jpg"

export default function App(){
  return (
    <Flex
      bg="#824c71"
      _dark={{ bg: "#da4167" }}
      p={150}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        bg="white"
        _dark={{ bg: "gray.800" }}
        mx={{ lg: 8 }}
        display={{ lg: "flex" }}
        maxW={{ lg: "5xl" }}
        shadow={{ lg: "lg" }}
        rounded={{ lg: "lg" }}
      >
        <Box w={{ lg: "50%" }}>
          <Box
            h={{ base: 64, lg: "full" }}
            rounded={{ lg: "lg" }}
            bgSize="cover"
            fit="scale-down"
          ><Image src = {images} alt="image of Jackie sitting"/></Box>
        </Box>

        <Box py={12} px={6} maxW={{ base: "xl", lg: "5xl" }} w={{ lg: "50%" }}>
          <chakra.h2
            fontSize={{ base: "2xl", md: "3xl" }}
            color="gray.800"
            _dark={{ color: "white" }}
            fontWeight="bold"
          >
            Hello there{" "}
          </chakra.h2>
          <chakra.p mt={4} color="gray.600" _dark={{ color: "gray.400" }}>
          Voraciously curious, consistently resourceful, and easily adaptable to unplanned challenges, I am avidly exploring the parallels of parenthood to programming, while allowing my creative background to flourish and grow. <br></br> <b>Think about the biggest problem on your plate...</b>
          </chakra.p>

          <Box mt={8}>
            <Link
              bg="gray.900"
              color="gray.100"
              px={5}
              py={3}
              fontWeight="semibold"
              rounded="lg"
              _hover={{ bg: "gray.800" }}
            >
              Let's talk about how I can fix it
            </Link>
          </Box>
        </Box>
      </Box>
      </Flex>
  );
};

