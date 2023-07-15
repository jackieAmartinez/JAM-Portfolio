import React from "react";
import { chakra, Box, Flex, Icon, Stack } from "@chakra-ui/react";

export default function App(){
  const Feature = (props) => {
    return (
      <Flex>
        <Flex shrink={0}>
          <Flex
            alignItems="center"
            justifyContent="center"
            h={12}
            w={12}
            rounded="md"
            _light={{ bg: "brand.500" }}
            color="white"
          >
            <Icon
              boxSize={6}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              {props.icon}
            </Icon>
          </Flex>
        </Flex>
        <Box ml={4}>
          <chakra.dt
            fontSize="lg"
            fontWeight="medium"
            lineHeight="6"
            _light={{ color: "gray.900" }}
          >
            {props.title}
          </chakra.dt>
          <chakra.dd mt={2} color="gray.500" _dark={{ color: "gray.400" }}>
            {props.children}
          </chakra.dd>
        </Box>
      </Flex>
    );
  };
  return (
    <Flex
      bg="#edf3f8"
      _dark={{ bg: "#3e3e3e" }}
      p={20}
      w="auto"
      justifyContent="center"
      alignItems="center"
    >
      <Box py={12} bg="white" _dark={{ bg: "gray.800" }} rounded="xl">
        <Box maxW="7xl" mx="auto" px={{ base: 4, lg: 8 }}>
          <Box textAlign={{ lg: "center" }}>
            <chakra.h2
              _light={{ color: "brand.600" }}
              fontWeight="semibold"
              textTransform="uppercase"
              letterSpacing="wide"
            >
              Transactions
            </chakra.h2>
            <chakra.p
              mt={2}
              fontSize={{ base: "3xl", sm: "4xl" }}
              lineHeight="8"
              fontWeight="extrabold"
              letterSpacing="tight"
              _light={{ color: "gray.900" }}
            >
              A better way to send money
            </chakra.p>
            <chakra.p
              mt={4}
              maxW="2xl"
              fontSize="xl"
              mx={{ lg: "auto" }}
              color="gray.500"
              _dark={{ color: "gray.400" }}
            >
              Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
              magnam voluptatum cupiditate veritatis in accusamus quisquam.
            </chakra.p>
          </Box>

          <Box mt={10}>
            <Stack
              spacing={{ base: 10, md: 0 }}
              display={{ md: "grid" }}
              gridTemplateColumns={{ md: "repeat(2,1fr)" }}
              gridColumnGap={{ md: 8 }}
              gridRowGap={{ md: 10 }}
            >
              <Feature
                title="Competitive exchange rates"
                icon={
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                }
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </Feature>

              <Feature
                title=" No hidden fees"
                icon={
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                  />
                }
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </Feature>

              <Feature
                title="Transfers are instant"
                icon={
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                }
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </Feature>

              <Feature
                title="Mobile notifications"
                icon={
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  />
                }
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </Feature>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

// export default function App(){
//   const arrowStyles = {
//     cursor: "pointer",
//     pos: "absolute",
//     top: "50%",
//     w: "auto",
//     mt: "-22px",
//     p: "16px",
//     color: "white",
//     fontWeight: "bold",
//     fontSize: "18px",
//     transition: "0.6s ease",
//     borderRadius: "0 3px 3px 0",
//     userSelect: "none",
//     _hover: {
//       opacity: 0.8,
//       bg: "black",
//     },
//   } as const;

//   const slides = [
//     {
//       img: "https://images.pexels.com/photos/2599537/pexels-photo-2599537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
//       label: "First Slide",
//       description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
//     },
//     {
//       img: "https://images.pexels.com/photos/2714581/pexels-photo-2714581.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
//       label: "Second Slide",
//       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     },
//     {
//       img: "https://images.pexels.com/photos/2878019/pexels-photo-2878019.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
//       label: "Third Slide",
//       description:
//         "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
//     },
//     {
//       img: "https://images.pexels.com/photos/1142950/pexels-photo-1142950.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
//       label: "Fourth Slide",
//       description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
//     },
//     {
//       img: "https://images.pexels.com/photos/3124111/pexels-photo-3124111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
//       label: "Fifth Slide",
//       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     },
//   ];

//   const [currentSlide, setCurrentSlide] = useState(0);

//   const slidesCount = slides.length;

//   const prevSlide = () => {
//     setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
//   };
//   const nextSlide = () => {
//     setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
//   };
//   const setSlide = (slide: number) => {
//     setCurrentSlide(slide);
//   };
//   const carouselStyle = {
//     transition: "all .5s",
//     ml: `-${currentSlide * 100}%`,
//   };

//   return (
//     <Flex
//       w="full"
//       bg="#edf3f8"
//       _dark={{ bg: "#3e3e3e" }}
//       p={10}
//       alignItems="center"
//       justifyContent="center"
//     >
//       <Flex w="full" pos="relative" overflow="hidden">
//         <Flex h="400px" w="full" {...carouselStyle}>
//           {slides.map((slide, sid) => (
//             <Box key={`slide-${sid}`} boxSize="full" shadow="md" flex="none">
//               <Text
//                 color="white"
//                 fontSize="xs"
//                 p="8px 12px"
//                 pos="absolute"
//                 top="0"
//               >
//                 {sid + 1} / {slidesCount}
//               </Text>
//               <Image
//                 src={slide.img}
//                 alt="carousel image"
//                 boxSize="full"
//                 backgroundSize="cover"
//               />
//               <Stack
//                 p="8px 12px"
//                 pos="absolute"
//                 bottom="24px"
//                 textAlign="center"
//                 w="full"
//                 mb="8"
//                 color="white"
//               >
//                 <Text fontSize="2xl">{slide.label}</Text>
//                 <Text fontSize="lg">{slide.description}</Text>
//               </Stack>
//             </Box>
//           ))}
//         </Flex>
//         <Text {...arrowStyles} left="0" onClick={prevSlide}>
//           &#10094;
//         </Text>
//         <Text {...arrowStyles} right="0" onClick={nextSlide}>
//           &#10095;
//         </Text>
//         <HStack justify="center" pos="absolute" bottom="8px" w="full">
//           {Array.from({ length: slidesCount }).map((_, slide) => (
//             <Box
//               key={`dots-${slide}`}
//               cursor="pointer"
//               boxSize={["7px", null, "15px"]}
//               m="0 2px"
//               bg={currentSlide === slide ? "blackAlpha.800" : "blackAlpha.500"}
//               rounded="50%"
//               display="inline-block"
//               transition="background-color 0.6s ease"
//               _hover={{ bg: "blackAlpha.800" }}
//               onClick={() => setSlide(slide)}
//             ></Box>
//           ))}
//         </HStack>
//       </Flex>
//     </Flex>
//   );
// };
