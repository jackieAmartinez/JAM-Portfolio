import React, { useState } from "react";
import { Box, Flex, HStack, Image, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function App(){
  const arrowStyles = {
    cursor: "pointer",
    pos: "absolute",
    top: "50%",
    w: "auto",
    mt: "-22px",
    p: "16px",
    color: "white",
    fontWeight: "bold",
    fontSize: "18px",
    transition: "0.6s ease",
    borderRadius: "0 3px 3px 0",
    userSelect: "none",
    _hover: {
      opacity: 0.8,
      bg: "black",
    },
  };

  const slides = [
    {
      img: "https://imgur.com/itAitIO",
      label: <Link to="https://imgur.com/qgIGDvA" target_blank>Deployed Application </Link>,
      description: <Link to="https://github.com/jackieAmartinez/takingSomeNotes.git" target_blank> {""} GitHub </Link>, 
    },
    
  ];

  // comm back end video: <iframe src="https://drive.google.com/file/d/1PSUM6Abd5cNluBCFeuCCVHUmg-eLlRsj/preview" width="640" height="480" allow="autoplay"></iframe>

  // employee tracker video: <iframe src="https://drive.google.com/file/d/1PSUM6Abd5cNluBCFeuCCVHUmg-eLlRsj/preview" width="640" height="480" allow="autoplay"></iframe>

  // Presentations: TWSS Proposal, Project 1 Presentation, Project 2 Presentation
  // Projects: Project 1, Project 2, Project 3,

  // images
  // 
  // * day planner: https://imgur.com/qgIGDvA - https://tranquil-reaches-29344.herokuapp.com/
  // weather planner: https://imgur.com/L1LOE6w
  // readme: https://imgur.com/CmEUx9T
  // dajalimavi: https://imgur.com/LpW8hpc
  // project 2: https://imgur.com/vuGH22Y
  // project 3: 

  const [currentSlide, setCurrentSlide] = useState(0);

  const slidesCount = slides.length;

  const prevSlide = () => {
    setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
  };
  const nextSlide = () => {
    setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
  };
  const setSlide = (slide) => {
    setCurrentSlide(slide);
  };
  const carouselStyle = {
    transition: "all .5s",
    ml: `-${currentSlide * 100}%`,
  };

  return (
    <Flex
      w="full"
      bg="#edf3f8"
      _dark={{ bg: "#3e3e3e" }}
      p={10}
      alignItems="center"
      justifyContent="center"
    >
      <Flex w="800px" overflow="hidden" pos="relative">
        <Flex h="400px" w="full" {...carouselStyle}>
          {slides.map((slide, sid) => (
            <Box key={`slide-${sid}`} boxSize="full" shadow="md" flex="none">
              <Text
                color="white"
                fontSize="xs"
                p="8px 12px"
                pos="absolute"
                top="0"
              >
                {sid + 1} / {slidesCount}
              </Text>
              <Image
                src={slide.img}
                alt="carousel image"
                boxSize="full"
                backgroundSize="cover"
              />
              <Stack
                p="8px 12px"
                pos="absolute"
                bottom="1px"
                textAlign="left"
                w="full"
                mb="8"
                
                color="white"
                fontWeight="bold"
                textShadowColor= "Yellow"
                >
                <Text fontSize="4xl">{slide.label} </Text>
                
                <Text fontSize="2xl">{slide.description}</Text>
                
              </Stack>
            </Box>
          ))}
        </Flex>
        <Text {...arrowStyles} left="0" onClick={prevSlide}>
          &#10094;
        </Text>
        <Text {...arrowStyles} right="0" onClick={nextSlide}>
          &#10095;
        </Text>
        <HStack justify="center" pos="absolute" bottom="8px" w="full">
          {Array.from({ length: slidesCount }).map((_, slide) => (
            <Box
              key={`dots-${slide}`}
              cursor="pointer"
              boxSize={["7px", null, "15px"]}
              m="0 2px"
              bg={currentSlide === slide ? "blackAlpha.800" : "blackAlpha.500"}
              rounded="50%"
              display="inline-block"
              transition="background-color 0.6s ease"
              _hover={{ bg: "blackAlpha.800" }}
              onClick={() => setSlide(slide)}
            ></Box>
          ))}
        </HStack>
      </Flex>
    </Flex>
  );
};