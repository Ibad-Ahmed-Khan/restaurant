import {
  Box,
  Button,
  Flex,
  Heading,
  Img,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import TryFreeButton from "../pages/TryFreeButton";
import HomeImg from "../assets/hero.webp";
import Customer1 from "../assets/customer-1.jpg";
import Customer2 from "../assets/customer-2.jpg";
import Customer3 from "../assets/customer-3.jpg";
import Customer4 from "../assets/customer-4.jpg";
import Customer5 from "../assets/customer-5.jpg";
import Customer6 from "../assets/customer-6.jpg";

const Home = () => {
  const Boxes = [
    Customer1,
    Customer2,
    Customer3,
    Customer4,
    Customer5,
    Customer6,
  ];

  return (
    <Flex
      id="logo"
      flexDir={{ base: "column", md: "column", lg: "row", xl: "row" }}
      align="center"
      justify="center"
      w="full"
      bg="#fdf2e9"
      p={{ base: "2rem", md: "2rem", lg: "4rem", xl: "4rem" }}
    >
      <VStack
        align="start"
        w={{ base: "full", md: "full", lg: "50%", xl: "50%" }}
        spacing="16"
      >
        <Heading fontFamily="Poppins, sans-serif">
          A healthy meal delivered to your door, every single day
        </Heading>
        <Text>
          The smart 365-days-per-year food subscription that will make you eat
          healthy again. Tailored to your personal tastes and nutritional needs.
        </Text>
        <Flex align="center" justify="center" gap="2rem">
          <TryFreeButton name={"Start eating well"} />
          <Button h="3rem">Learn more</Button>
        </Flex>
        <Flex align="center" justify="center" gap="2rem">
          <Flex>
            {Boxes.map((box, index) => {
              return (
                <Box
                  w={{ base: "2.5rem", lg: "3rem" }}
                  h={{ base: "2.5rem", lg: "3rem" }}
                  border="3px solid #fff "
                  borderRadius="50%"
                  mr="-1rem"
                  overflow="hidden"
                  bg="#e67e22"
                  key={index}
                >
                  <Img src={box} />
                </Box>
              );
            })}
          </Flex>
          <Text fontWeight="bold">
            <Box as="span" color="#e67e22" mr="2px">
              250,000+
            </Box>
            meals last year!
          </Text>
        </Flex>
      </VStack>
      <Flex
        align="center"
        justify="center"
        w={{ base: "full", md: "full", lg: "50%", xl: "50%" }}
        minH="30rem"
      >
        <Img src={HomeImg} />
      </Flex>
    </Flex>
  );
};

export default Home;
