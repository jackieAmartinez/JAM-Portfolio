import React from "react";
import {Link} from "react-router-dom";
// import "./App.css";

import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  VisuallyHidden,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";


export default function App(){
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();

  return (
    <React.Fragment>
      <chakra.header
        bg={bg}
        w="full"
        px={{ base: 2, sm: 4 }}
        py={4}
        shadow="md"
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <Flex>
            <chakra.a
              href="/"
              title="Choc Home Page"
              display="flex"
              alignItems="center"
            >
              {/* <Logo /> */}
              <VisuallyHidden>Choc</VisuallyHidden>
            </chakra.a>
            <chakra.h1 fontSize="xl" fontWeight="medium" ml="2">
            <Button variant="ghost"><Link to = "/about">Jacqueline Martinez</Link></Button>
            </chakra.h1>
          </Flex>
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={1}
              mr={1}
              color="brand.500"
              display={{ base: "none", md: "inline-flex" }}
            >
              
              <Button variant="ghost"><Link to = "/about">About Me</Link></Button>
              <Button variant="ghost"><Link to = "/portfolio">Portfolio</Link></Button>
              <Button variant="ghost"><Link to = "https://docs.google.com/document/d/1b8ctT0cceRQ8arObMu-IvuTs3dgngfk4xDyn9dIktd0/edit?usp=sharing">Resume</Link></Button>
              <Button variant="ghost"><Link to = "/contact">Contact</Link></Button>
              <Button variant="ghost"><Link to = "/blog">Blog</Link></Button>
            </HStack>
            <Box display={{ base: "inline-flex", md: "none" }}>
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                color="gray.800"
                _dark={{ color: "inherit" }}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />

              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  onClick={mobileNav.onClose}
                />

                <Button w="full" variant="ghost"><Link to = "/about">
                  About Me</Link>
                </Button>
                <Button w="full" variant="ghost"><Link to = "/portfolio">
                  Portfolio</Link>
                </Button>
                <Button w="full" variant="ghost"><Link to = "/resume">
                  Resume</Link>
                </Button>
                <Button w="full" variant="ghost"><Link to = "/contact">
                  Contact</Link>
                </Button>
                <Button w="full" variant="ghost"><Link to = "/blog">
                  Blog</Link>
                </Button>
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
  );
};
