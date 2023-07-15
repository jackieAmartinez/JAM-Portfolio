import React from "react";
import { Box, Flex, Link, chakra } from "@chakra-ui/react";

import { AiOutlineLink, AiOutlineTwitter } from "react-icons/ai";
export default function App(){
  return (
    <Flex
      bg="#edf3f8"
      _dark={{ bg: "#3e3e3e" }}
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        w="full"
        maxW="sm"
        mx="auto"
        px={4}
        py={3}
        bg="white"
        _dark={{ bg: "gray.800" }}
        shadow="md"
        rounded="md"
      >
        <Flex justifyContent="space-between" alignItems="center">
        </Flex>

        <Box>
          <chakra.h1
            fontSize="lg"
            fontWeight="bold"
            mt={2}
            color="gray.800"
            _dark={{ color: "white" }}
          >
            AP® Psychology - Course 5: Health and Behavior
          </chakra.h1>
          <chakra.p
            fontSize="sm"
            mt={2}
            color="gray.600"
            _dark={{ color: "gray.300" }}
          >
            <a href="https://docs.google.com/document/d/1b8ctT0cceRQ8arObMu-IvuTs3dgngfk4xDyn9dIktd0/edit?usp=sharing">Resume</a>
          </chakra.p>
        </Box>

        <Box>
          <Flex
            alignItems="center"
            mt={2}
            color="gray.700"
            _dark={{ color: "gray.200" }}
          >
            <span>Visit on:</span>
            <Link
              mx={2}
              cursor="pointer"
              textDecor="underline"
              color="brand.600"
              _dark={{ color: "brand.400" }}
            >
              edx.org
            </Link>
            <span>or</span>
            <Link
              mx={2}
              cursor="pointer"
              textDecor="underline"
              color="brand.600"
              _dark={{ color: "brand.400" }}
              wordBreak="break-word"
            >
              classcentral.com
            </Link>
          </Flex>

          <Flex alignItems="center" justifyContent="center" mt={4}>
            <Link
              mr={2}
              color="gray.800"
              _dark={{ color: "gray.400" }}
              _hover={{ color: "gray.700", _dark: { color: "gray.300" } }}
              cursor="pointer"
            >
              <AiOutlineTwitter />
            </Link>

            <Link
              mr={2}
              color="gray.800"
              _dark={{ color: "gray.400" }}
              _hover={{ color: "gray.700", _dark: { color: "gray.300" } }}
              cursor="pointer"
            >
              <AiOutlineLink />
            </Link>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};

