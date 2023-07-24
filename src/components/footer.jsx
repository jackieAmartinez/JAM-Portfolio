import React from "react";
import { chakra, Flex, Icon } from "@chakra-ui/react";
// import images from "../assets/images/PlottingPurposeCreations.png"

export default function App(){
  return (
    <Flex
      w="full"
      bg="#000000"
      _dark={{ bg: "#3e3e3e" }}
      p={5}
      alignItems="center"
      justifyContent="center"
      position="static"
    >
      <Flex
        w="full"
        as="footer"
        flexDir={{ base: "column", sm: "row" }}
        align="center"
        justify="space-between"
        px="6"
        py="4"
        bg="white"
        _dark={{
          bg: "gray.800",
        }}
      >
        <chakra.a
          href="#"
          fontSize="xl"
          fontWeight="bold"
          color="gray.600"
          _dark={{
            color: "white",
            _hover: {
              color: "gray.300",
            },
          }}
          _hover={{
            color: "gray.700",
          }}
        >
          JAM
        </chakra.a>

        <chakra.p
          py={{ base: "2", sm: "0" }}
          color="gray.800"
          _dark={{ color: "white" }}
        >
          All rights reserved
        </chakra.p>

        <Flex mx="-2">
          <chakra.a
            href="https://www.linkedin.com/in/jackie-martinez-442a26177/"
            mx="2"
            color="gray.600"
            _dark={{ color: "gray.300", _hover: { color: "gray.400" } }}
            _hover={{
              color: "gray.500",
            }}
            aria-label="LinkedIn"
          >
            <Icon boxSize="5" viewBox="0 0 24 24" fill="currentColor">
            <path  d="M21.75 0H2.25C1.01 0 0 1.01 0 2.25V21.75C0 22.99 1.01 24 2.25 24H21.75C22.99 24 24 22.99 24 21.75V2.25C24 1.01 22.99 0 21.75 0ZM7.5 20.25H4.5V9H7.5V20.25ZM6 7.88C5.03 7.88 4.25 7.1 4.25 6.12C4.25 5.13 5.03 4.38 6 4.38C6.97 4.38 7.75 5.13 7.75 6.12C7.75 7.1 6.97 7.88 6 7.88ZM20.5 20.25H17.5V14.5C17.5 13.34 17.47 11.94 15 11.94C12.53 11.94 12.5 13.34 12.5 14.5V20.25H9.5V9H12.5V10.59C13.28 9.68 14.41 8.5 16.5 8.5C19.54 8.5 20.5 10.26 20.5 13.25V20.25Z"></path>
            </Icon>
          </chakra.a>

          <chakra.a
            href="https://www.github.com/jackieamartinez/"
            mx="2"
            color="gray.600"
            _dark={{ color: "gray.300", _hover: { color: "gray.400" } }}
            _hover={{
              color: "gray.500",
            }}
            aria-label="GitHub"
          >
            <Icon boxSize="5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"></path>
            </Icon>
          </chakra.a>

          <chakra.a
            href="https://www.cobaltcasa.com"
            mx="2"
            color="gray.600"
            _dark={{ color: "gray.300", _hover: { color: "gray.400" } }}
            _hover={{
              color: "gray.500",
            }}
            aria-label="CobaltCasa"
          >
            <Icon boxSize="5" viewBox="0 0 24 24" fill="currentColor">
            <path fill="currentColor" d="M12 7.5C8.41015 7.5 5.5 10.4101 5.5 14C5.5 17.5899 8.41015 20.5 12 20.5C15.5899 20.5 18.5 17.5899 18.5 14C18.5 10.4101 15.5899 7.5 12 7.5ZM12 18C9.23858 18 7 15.7614 7 13C7 10.2386 9.23858 8 12 8C14.7614 8 17 10.2386 17 13C17 15.7614 14.7614 18 12 18ZM12 9.5C10.067 9.5 8.5 11.067 8.5 13C8.5 14.933 10.067 16.5 12 16.5C13.933 16.5 15.5 14.933 15.5 13C15.5 11.067 13.933 9.5 12 9.5ZM12 15C11.1716 15 10.5 14.3284 10.5 13.5C10.5 12.6716 11.1716 12 12 12C12.8284 12 13.5 12.6716 13.5 13.5C13.5 14.3284 12.8284 15 12 15Z" />

            </Icon>
          </chakra.a>
        </Flex>
      </Flex>
    </Flex>
  );
};
